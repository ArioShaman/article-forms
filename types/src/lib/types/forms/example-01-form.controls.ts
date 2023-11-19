import { FormControl, FormGroup } from "@angular/forms";
import { IAddressForm } from "./address-form.controls";
import { IPersonalInfoForm } from "./personal-info-form.controls";
import { ILegalEntityForm } from "./legal-entity-form.controls";

export type PersonalDataMode = 'personalData' | 'legalEntity'; 

export enum Example01FormControls {
  personalDataMode = 'personalDataMode',
  address = 'address',
  personalInfo = 'personalInfo',
  legalEntity = 'legalEntity',
}

export interface IExample01Form {
  [Example01FormControls.personalDataMode]: FormControl<PersonalDataMode>;
  [Example01FormControls.address]?: FormGroup<IAddressForm>;
  [Example01FormControls.personalInfo]?: FormGroup<IPersonalInfoForm>;
  [Example01FormControls.legalEntity]?: FormGroup<ILegalEntityForm>;
}
