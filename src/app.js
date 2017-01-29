import { Todo } from './models/todo';

// the view model of the root component (app.js by aurelia convention)

export class App {
    constructor(description) {
        this.heading = "Todos";
        this.todos = [];
        this.todoDescription = '';
    }

    addTodo() {
        if (this.todoDescription) {
            console.log('adding', this.todoDescription);
            this.todos.push(new Todo(this.todoDescription));
            this.todoDescription = '';
        }
    }

    removeTodo(todo) {
        let index = this.todos.indexOf(todo);

        if (index !== -1) {
            this.todos.splice(index, 1);
        }
    }
}