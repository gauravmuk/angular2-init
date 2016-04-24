import {Component, Input, ViewEncapsulation} from "angular2/core";

@Component({
    encapsulation: ViewEncapsulation.Native,
    selector: 'todo-item-renderer',
    template: `<style>.completed {text-decoration: line-through;}</style>
                <span [ngClass]="todo.status">{{todo.title | uppercase}}</span>
                    <button (click)="todo.toggle()">Toggle</button>`
})

export class TodoItemRenderer{
    @Input() todo;
}