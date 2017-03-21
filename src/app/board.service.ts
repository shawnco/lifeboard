import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class BoardService
{
    url: string = 'http://localhost/lifeboard/index.php/';
    constructor(private http: Http){}

    // Retrieves the boards
    getBoards(): Observable<Object>
    {
        return this.http.get(this.url + 'Board/getBoards')
            .map((res) =>
            {
                return res.json();
            });
    }    
}