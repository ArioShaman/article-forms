import { FormControl } from "@angular/forms";

export enum AddressFormControls {
  city = 'city',
  region = 'region',
  zipCode = 'zipCode',
  country = 'country',
  address = 'address',
}

export interface IAddressForm {
  [AddressFormControls.country]: FormControl<string>;
  [AddressFormControls.region]: FormControl<string>;
  [AddressFormControls.city]: FormControl<string>;
  [AddressFormControls.zipCode]: FormControl<string>;
  [AddressFormControls.address]: FormControl<string>;
}
