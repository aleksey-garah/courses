import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

/* tslint:disable */
@Directive()
export abstract class BaseComponent implements OnDestroy {
  protected destruct$: Subject<null> = null;

  protected constructor() {
    this.destruct$ = new Subject();
  }

  public ngOnDestroy(): void {
    this.destruct$.next();
  }
}
