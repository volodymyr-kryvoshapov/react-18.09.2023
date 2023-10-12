import {TodoI} from "../type";
import {FetchClient} from "../../../api/FetchClient";

const URL = 'http://localhost:4000/todos/';

export const TodoApi = new FetchClient<TodoI>(URL);
