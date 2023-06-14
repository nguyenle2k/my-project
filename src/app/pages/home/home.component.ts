import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { loadItems } from 'src/app/ngrx-test/items.actions';
import { selectItems } from 'src/app/ngrx-test/items.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor() {}
}
