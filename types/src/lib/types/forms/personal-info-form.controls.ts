import { FormControl } from "@angular/forms";

export enum PersonalInfoFormControls {
  firstName = 'firstName',
  lastName = 'lastName',
  phone = 'phone',
  snils = 'snils',
  inn = 'inn',
  passport = 'passport',
}

export interface IPersonalInfoForm {
  [PersonalInfoFormControls.firstName]: FormControl<string | null>;
  [PersonalInfoFormControls.lastName]: FormControl<string | null>;
  [PersonalInfoFormControls.phone]: FormControl<string | null>;
  [PersonalInfoFormControls.snils]: FormControl<string | null>;
  [PersonalInfoFormControls.inn]: FormControl<string | null>;
  [PersonalInfoFormControls.passport]: FormControl<string | null>;
}

export enum PersonalInfoFormValidationKeys {
  firstNameRequired = 'firstNameRequired',
  lastNameRequired = 'lastNameRequired',
  phoneRequired = 'phoneRequired',
  snilsRequired = 'snilsRequired',
  snilsPattern = 'snilsPattern',
  innRequired = 'innRequired',
  innPattern = 'innPattern',
  passportRequired = 'passportRequired',
  passportPattern = 'passportPattern',
}
