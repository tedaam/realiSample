export interface SubmitFormModel {
  viewName: string;
  formData: SubmitFormData;
  savedData?: SubmitFormData;
}

export interface SubmitFormData {
  name: string;
  email: string;
  phone: string;
}
