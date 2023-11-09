import React from "react";
import {render, screen, waitForElementToBeRemoved, act} from "../../../utils/test-utils";
import userEvent from '@testing-library/user-event'
import {TodoApp} from "../index";
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {URL} from "../api/server";

const HEADER_COUNT = 1;
const mockedTodos = [
  {
    "id": 1,
    "title": "Title 1",
    "done": false,
    "description": "Officiis ab maxime quisquam ea animi architecto officia ipsum sint similique doloremque nulla corporis doloremque tenetur soluta."
  },
  {
    "id": 2,
    "title": "Title 2",
    "done": true,
    "description": "Vero ipsum eaque odio mollitia tempora quos dicta perspiciatis magnam odio."
  },
  {
    "id": 3,
    "title": "Title 3",
    "done": true,
    "description": "Vero ipsum eaque odio mollitia tempora quos dicta perspiciatis magnam odio."
  },
]

export const handlers = [
  rest.get(URL, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(mockedTodos),
    )
  }),
]

const server = setupServer(...handlers)

describe('<TodoApp/>', () => {
  // Enable API mocking before tests.
  beforeAll(() => server.listen())

  // Disable API mocking after the tests are done.
  afterAll(() => server.close())

  // Reset any runtime request handlers we may add during the tests.
  afterEach(() => server.resetHandlers())

  it('should render table with rows', async () => {
    render(<TodoApp />);

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));

    const rows = screen.getAllByRole('row');

    expect(rows).toHaveLength(mockedTodos.length + HEADER_COUNT);
  });

  it('should filter elements when "active" button clicked', async () => {
    render(<TodoApp />);
    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));

    const activeBtn = screen.getByRole('button', {name: /active/i});

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await userEvent.click(activeBtn);
    });

    const rows = screen.getAllByRole('row');

    expect(rows).toHaveLength(mockedTodos.filter(i => i.done === false).length + 1);
  });
});