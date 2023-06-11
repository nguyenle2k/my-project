import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { itemsReducer } from './ngrx-test/items.reducer';
import { ItemsEffects } from './ngrx-test/items.effects';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}), // Cấu hình store chính
    EffectsModule.forRoot([]), // Cấu hình effects
    StoreDevtoolsModule.instrument(), // Cấu hình Devtools
    StoreModule.forRoot({ items: itemsReducer }),
    EffectsModule.forRoot([ItemsEffects]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
