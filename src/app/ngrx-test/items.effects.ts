import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { loadItems, loadItemsSuccess, loadItemsFailure } from './items.actions';

@Injectable()
export class ItemsEffects {
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadItems),
      mergeMap(() =>
        this.http.get<any[]>('db.json').pipe(
          map((items) => loadItemsSuccess({ items })),
          catchError((error) => of(loadItemsFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
