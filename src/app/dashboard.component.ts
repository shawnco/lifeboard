import { Component, OnInit } from '@angular/core';
import { WidgetService } from './widget.service';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    providers: [WidgetService]
})
export class DashboardComponent
{
    widgets: Object;

    constructor(
        private widgetService: WidgetService
    ){}

    ngOnInit(): void
    {
        this.getWidgets();
    }

    getWidgets(): void
    {
        this.widgetService.getWidgets("1")
            .subscribe((data) =>
            {
                this.widgets = data;
                console.log(this.widgets);
            });
    }
}