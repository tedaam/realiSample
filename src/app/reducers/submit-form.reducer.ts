import {SubmitFormData, SubmitFormModel} from '../models/submit-form.model';
import * as SubmitFormActions from '../actions/submit-form.action.js';

const initState: SubmitFormModel = {
  viewName: 'name',
  formData: {name: '', email: '', phone: ''},
  savedData: {name: '', email: '', phone: ''}
};

export function reducer(state: SubmitFormModel = initState, action: SubmitFormActions.Actions) {
  switch (action.type) {
    case SubmitFormActions.CHANGE_SUBMIT_FORM_VIEW :
      return action.payload;
      break;
    case SubmitFormActions.CLEAR_SUBMIT_FORM :
      return {...initState,
        formData: {name: '', email: '', phone: ''},
        savedData: {name: '', email: '', phone: ''}};
      break;
    case SubmitFormActions.SAVE_SUBMIT_FORM :
      const savedData = {...action.payload.formData};
      return {
        ...action.payload,
        savedData,
        formData: {name: '', email: '', phone: ''}
      };
      break;
    default:
      return state;
  }
}
