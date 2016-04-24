import {Component, Inject} from 'angular2/core';
import {TodoService} from "./todo-service";
import {TodoModel} from "./todo-model";

@Component({
    selector: 'todo-input',
    template: `<div>
    <form (submit)="onSubmit()">
        <input type="text" [(ngModel)]="todoModel.title">
    </form>
    </div>`
})

export class TodoInput{
    todoModel:TodoModel = new TodoModel();

    constructor(@Inject(TodoService) public todoService) {}

    onSubmit() {
        this.todoService.addTodo(this.todoModel);
        this.todoModel = new TodoModel();
    }
}