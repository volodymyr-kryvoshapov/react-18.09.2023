import {Todo} from "../type";

const URL = 'http://localhost:4000/todos/';

export class TodoApi {
  static getList(): Promise<Todo[]> {
    return fetch(URL).then(response => response.json())
  }

  static create(todo: Todo): Promise<Todo> {
    return fetch(URL, {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
  }
}