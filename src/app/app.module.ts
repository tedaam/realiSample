import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SubmitFormComponent} from './submit-form/submit-form.component';
import {StoreModule} from '@ngrx/store';
import {reducer} from './reducers/submit-form.reducer';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SubmitFormComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      submitFormView: reducer
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
