import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class WidgetService
{
    url: string = 'http://localhost/lifeboard/index.php/';
    constructor(
        private http: Http
    ){}

    getWidgets(dashboardId: string): Observable<Object>
    {
        return this.http.get(this.url + 'Widget/getWidgets?dashboardId=' + dashboardId)
            .map((data) =>
            {
                return data.json();
            });
    }
}