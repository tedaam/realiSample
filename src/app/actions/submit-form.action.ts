import {Action} from '@ngrx/store';
import {SubmitFormModel} from '../models/submit-form.model';


export const CHANGE_SUBMIT_FORM_VIEW = '[SUBMIT_FORM] change view';
export const CLEAR_SUBMIT_FORM = '[SUBMIT_FORM] clear';
export const SAVE_SUBMIT_FORM = '[SUBMIT_FORM] save';

export class ChangeSubmitFormView implements Action {
  readonly type = CHANGE_SUBMIT_FORM_VIEW;
  constructor(public payload: SubmitFormModel) {
  }
}
export class ClearSubmitForm implements Action {
  readonly type = CLEAR_SUBMIT_FORM;
  constructor() {
  }
}
export class SaveSubmitForm implements Action {
  readonly type = SAVE_SUBMIT_FORM;
  constructor(public payload: SubmitFormModel) {
  }
}
export type Actions = ChangeSubmitFormView | ClearSubmitForm | SaveSubmitForm;
