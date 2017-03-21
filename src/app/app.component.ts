import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ChildTaskComponent } from './child-task.component';
import { BoardService } from './board.service';
import { TaskService } from './task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BoardService, TaskService]
})
export class AppComponent {
  title = 'app works!';

  boards: Object;
  tasks: Object;

  constructor(
      private boardService: BoardService,
      private taskService: TaskService
  ){}

  getBoards(): void
  {
      this.boardService.getBoards()
        .subscribe((data: Object) =>
        {
            this.boards = data;
            console.log(this.boards);
        });
  }
  getTasks(): void
  {
    this.taskService.getTasks()
      .subscribe((data: Response) =>
      {
        this.tasks = data.json();
        console.log(this.tasks);
      });
  }

  ngOnInit(): void
  {
    this.getTasks();
    this.getBoards();
  }

}
