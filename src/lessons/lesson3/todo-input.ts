import {Component} from 'angular2/core';

@Component({
    selector: 'todo-input',
    template: `<div>
    <input type="text" #myInput>
    <button (click)="onClick(myInput)">Click Me</button>
    </div>`
})

export class TodoInput{
    onClick(value) {
        console.info(value);
    }
}