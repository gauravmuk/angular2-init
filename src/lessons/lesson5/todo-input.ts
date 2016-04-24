import {Component} from 'angular2/core';
import {TodoService} from "./todo-service";

@Component({
    selector: 'todo-input',
    template: `<div>
    <input type="text" #myInput>
    <button (mouseover)="onMouseOver($event, myInput)">Click Me</button>
    </div>`
})

export class TodoInput{
    constructor(public todoService:TodoService) {
        console.info(todoService);
    }
    onMouseOver(event, myInput) {
        console.info(this.todoService);
        console.info(event);
        console.info(myInput);
    }
}