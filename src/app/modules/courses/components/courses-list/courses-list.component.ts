import { Component, OnInit } from '@angular/core';
import { FilterPanelModel } from '../../../../models';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onFiltersChanged(filtersData: FilterPanelModel): void {
    console.log(filtersData);
  }

}
