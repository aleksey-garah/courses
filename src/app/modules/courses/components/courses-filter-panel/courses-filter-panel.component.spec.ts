import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesFilterPanelComponent } from './courses-filter-panel.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('CoursesFilterPanelComponent', () => {
  let component: CoursesFilterPanelComponent;
  let fixture: ComponentFixture<CoursesFilterPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ CoursesFilterPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesFilterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
