import { FormControl, FormGroup } from "@angular/forms";
import { IAddressForm } from "./address-form.controls";
import { IPersonalInfoForm } from "./personal-info-form.controls";
import { ILegalEntityForm } from "./legal-entity-form.controls";

export enum Example01FormControls {
  isLegal = 'isLegal',
  address = 'address',
  personalInfo = 'personalInfo',
  legalEntity = 'legalEntity',
}

export interface IExample01Form {
  [Example01FormControls.isLegal]: FormControl<boolean>;
  [Example01FormControls.address]?: FormGroup<IAddressForm>;
  [Example01FormControls.personalInfo]?: FormGroup<IPersonalInfoForm>;
  [Example01FormControls.legalEntity]?: FormGroup<ILegalEntityForm>;
}
