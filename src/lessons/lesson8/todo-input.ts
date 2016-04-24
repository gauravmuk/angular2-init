import {Component, Inject} from 'angular2/core';
import {TodoService} from "./todo-service";

@Component({
    selector: 'todo-input',
    template: `<div>
    <input type="text" #myInput>
    <button (click)="onClick($event, myInput)">Click Me</button>
    </div>`
})

export class TodoInput{
    constructor(@Inject(TodoService) public todoService) {
        console.info(todoService);
    }
    onClick(event, myInput) {
        this.todoService.todos.push(myInput.value);
        console.info(this.todoService);
        console.info(event);
        console.info(myInput);
    }
}