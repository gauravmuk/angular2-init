import {bootstrap} from 'angular2/platform/browser';
import {Component, provide} from 'angular2/core';
import {TodoInput} from './todo-input';
import {TodoService} from './todo-service';
import {enableProdMode} from 'angular2/core';

@Component({
    selector: 'app',
    directives: [TodoInput],
    template: `<div><todo-input></todo-input></div>`
})

class App{}

enableProdMode();
bootstrap(App, [provide('serviceAlias', {useClass: TodoService})]);