import {Component} from 'angular2/core';

@Component({
    selector: 'todo-input',
    template: `<div>
    I am an input
    <button (click)="onClick()">Click Me</button>
    </div>`
})

export class TodoInput{
    onClick() {
        alert('clicked');
    }
}