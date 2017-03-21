import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'child-task',
    template: `<ul><li *ngFor="let t of tasks">{{task.content}}</li><child-task *ngIf="childCount > 0" [tasks]="tasks" [id]="task.id"></child-task></ul>`
})
export class ChildTaskComponent
{
    @Input()
    tasks: Array<Object>;

    @Input()
    id: number;

    childCount: number = 0;

    ngOnInit(): void
    {
        // Loop through tasks and see how many tasks have you as a parent.
        console.log(this.tasks);
        for(let t in this.tasks)
        {
            console.log(this.tasks[t]);
            if(this.tasks[t]['parent'] == this.id)
            {
                this.childCount++;
            }
        }
        console.log('task ' + this.id + ' has ' + this.childCount + ' children');
    }
}