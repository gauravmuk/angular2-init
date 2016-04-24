import {Component, Input} from "angular2/core";

@Component({
    selector: 'todo-item-renderer',
    template: `<style>.completed {text-decoration: line-through;}</style>
                <span [ngClass]="'completed'">{{todo.title}}</span>
                    <button (click)="todo.toggle()">Toggle</button>`
})

export class TodoItemRenderer{
    @Input() todo;
}