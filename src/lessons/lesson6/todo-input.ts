import {Component, Inject} from 'angular2/core';

@Component({
    selector: 'todo-input',
    template: `<div>
    <input type="text" #myInput>
    <button (mouseover)="onMouseOver($event, myInput)">Click Me</button>
    </div>`
})

export class TodoInput{
    constructor(@Inject('serviceAlias') public todoService) {
        console.info(todoService);
    }
    onMouseOver(event, myInput) {
        console.info(this.todoService);
        console.info(event);
        console.info(myInput);
    }
}