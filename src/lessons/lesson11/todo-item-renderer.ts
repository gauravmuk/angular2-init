import {Component, Input, Output, EventEmitter} from "angular2/core";

@Component({
    selector: 'todo-item-renderer',
    template: `<span [hidden]="todo.status === 'completed'">{{todo.title}}</span>
                    <button (click)="toggle.emit(todo)">Toggle</button>`
})

export class TodoItemRenderer{
    @Input() todo;
    @Output() toggle = new EventEmitter();
}