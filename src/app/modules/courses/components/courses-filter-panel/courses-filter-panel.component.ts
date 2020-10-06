import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { BaseComponent } from '../../../shared/helpers';
import { CourseStatus, FilterPanelModel } from '../../../../models';

@Component({
  selector: 'app-courses-filter-panel',
  templateUrl: './courses-filter-panel.component.html',
  styleUrls: ['./courses-filter-panel.component.scss']
})
export class CoursesFilterPanelComponent extends BaseComponent implements OnInit {

  @Output() public filtersChanged = new EventEmitter<FilterPanelModel>();

  public searchForm: FormGroup;
  public statusSelectDefault = 'Course Status';
  // TODO if list of the statuses will be stored on BE side - should be replaced with @Input
  public statusesList: CourseStatus[] = Object.keys(CourseStatus).map(key => CourseStatus[key]);
  public selectedFilters: FilterPanelModel = {
    searchText: '',
    status: ''
  };

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.initSearchForm();
    this.subscribeOnSearchChanges();
  }

  public clearFilters(): void {
    this.changeStatus('');
  }

  public selectStatus(status: CourseStatus): void {
    this.changeStatus(status);
  }

  private subscribeOnSearchChanges(): void {
    this.searchForm.valueChanges
      .pipe(
        takeUntil(this.destruct$),
        debounceTime(1000)
      )
      .subscribe((res) => {
        this.changeSearchText(res.text);
      });
  }

  private changeStatus(status: CourseStatus | string): void {
    if (status !== this.selectedFilters.status) {
      this.selectedFilters.status = status || '';
      this.filtersChanged.emit(this.selectedFilters);
    }
  }

  private changeSearchText(searchText: string): void {
    if (searchText !== this.selectedFilters.searchText) {
      this.selectedFilters.searchText = searchText || '';
      this.filtersChanged.emit(this.selectedFilters);
    }
  }

  private initSearchForm(): void {
    this.searchForm = this.fb.group({
      text: [''],
    });
  }

}
