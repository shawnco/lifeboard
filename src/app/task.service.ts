import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class TaskService
{
    url: string = 'http://localhost/lifeboard/index.php/';
    constructor(private http: Http){}

    // Retrieves the tasks.
    getTasks(): Observable<Object>
    {
        return this.http.get(this.url + 'Task/getTasks');
    }

}