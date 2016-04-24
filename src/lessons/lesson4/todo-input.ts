import {Component} from 'angular2/core';

@Component({
    selector: 'todo-input',
    template: `<div>
    <input type="text" #myInput>
    <button (mouseover)="onMouseOver($event, myInput)">Click Me</button>
    </div>`
})

export class TodoInput{
    onMouseOver(event, myInput) {
        console.info(event);
        console.info(myInput);
    }
}