import {Injectable} from "angular2/core";
import {TodoModel} from "./todo-model";
@Injectable()

export class TodoService{
    todos:TodoModel[] = [
        new TodoModel("eat"),
        new TodoModel("sleep")
    ];

    addTodo(todo:TodoModel) {
        this.todos = [...this.todos, todo];
    }
}