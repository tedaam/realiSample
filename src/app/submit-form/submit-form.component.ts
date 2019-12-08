import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {SubmitFormData, SubmitFormModel} from '../models/submit-form.model';
import {Store} from '@ngrx/store';
import * as SubmitFormAction from './../actions/submit-form.action';
import {SubmitFormViewState} from './submit-form.state';

@Component({
  selector: 'app-submit-form',
  template: `
      <div class="submit-form-con">
          <form class="submit-form">
              <div class="number-buttons-con">
                  <div class="number-button"
                       [class.selected]="currentView === 'name'"
                       (click)="showViewByName('name')">Name
                  </div>
                  <div class="number-button"
                       [class.selected]="currentView=== 'email'"
                       (click)="showViewByName('email')">Email
                  </div>
                  <div class="number-button"
                       [class.selected]="currentView === 'phone'"
                       (click)="showViewByName('phone')">Phone
                  </div>
              </div>
              <div class="content-con">
                  <div class="name-input-con" *ngIf="currentView === 'name'">
                      <label for="name">1. Name</label>
                      <br>
                      <input type="text" class="form-control" id="name"
                             placeholder="Enter your name.."
                             [(ngModel)]="formData.name" name="name">
                  </div>
                  <div class="email-input-con" *ngIf="currentView === 'email'">
                      <label for="email">2. Email</label>
                      <br>
                      <input type="text" class="form-control" id="email"
                             placeholder="Enter your email.."
                             [(ngModel)]="formData.email" name="email">
                  </div>
                  <div class="phone-input-con" *ngIf="currentView === 'phone'">
                      <label for="phone">3. Phone</label>
                      <br>
                      <input type="number" class="form-control" id="phone"
                             placeholder="Enter your name.."
                             [(ngModel)]="formData.phone" name="phone">
                  </div>
                  <div class="saved-data" *ngIf="currentView === 'save'">
                     Submitted :
                      <div>Name: {{savedData.name}}</div>
                      <div>Email: {{savedData.email}}</div>
                      <div>Phone: {{savedData.phone}}</div>
                  </div>
              </div>
          </form>
          <div class="buttons-con">
              <button class="button red" [disabled]="formData.name == '' || formData.phone == '' || formData.email == ''"
                      (click)="saveForm()">save</button>
              <button class="button" (click)="clearForm()">Clear</button>
          </div>
      </div>
  `,
  styleUrls: ['./submit-form.component.scss']
})
export class SubmitFormComponent implements OnInit {

  currentView: string;
  formData: SubmitFormData;
  savedData: SubmitFormData;

  constructor(private store: Store<SubmitFormViewState>) {
    this.store.select('submitFormView').subscribe(currentState => {
      this.currentView = currentState.viewName;
      this.formData = currentState.formData;
      this.savedData = currentState.savedData;
    });
  }

  ngOnInit() {

  }

  showViewByName(viewName: string) {
    if (this.formData[this.currentView] && this.formData[this.currentView] !== viewName) {
      this.store.dispatch(new SubmitFormAction.ChangeSubmitFormView({viewName, formData: this.formData}));
    }
  }

  clearForm() {
    this.store.dispatch(new SubmitFormAction.ClearSubmitForm());
  }

  saveForm() {
    this.store.dispatch(new SubmitFormAction.SaveSubmitForm({viewName: 'save', formData: this.formData}));
  }
}
