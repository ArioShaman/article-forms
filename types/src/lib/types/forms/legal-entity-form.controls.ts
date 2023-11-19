import { FormControl } from "@angular/forms";

export enum LegalEntityFormControls {
  name = 'name',
  inn = 'inn',
  ogrn = 'ogrn',
  kpp = 'kpp',
  legalAddress = 'legalAddress',
}

export interface ILegalEntityForm {
  [LegalEntityFormControls.name]: FormControl<string | null>;
  [LegalEntityFormControls.inn]: FormControl<string | null>;
  [LegalEntityFormControls.ogrn]: FormControl<string | null>;
  [LegalEntityFormControls.kpp]: FormControl<string | null>;
  [LegalEntityFormControls.legalAddress]: FormControl<string | null>;
}

export enum LegalEntityFormValidationKeys {
  nameRequired = 'nameRequired',
  innRequired = 'innRequired',
  innPattern = 'innPattern',
  ogrnRequired = 'ogrnRequired',
  ogrnPattern = 'ogrnPattern',
  kppRequired = 'kppRequired',
  kppPattern = 'kppPattern',
  legalAddressRequired = 'legalAddressRequired',
}
