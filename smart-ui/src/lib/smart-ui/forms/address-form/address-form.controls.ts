import { FormControl } from "@angular/forms";

export enum AddressFormControls {
  city = 'city',
  region = 'region',
  zipCode = 'zipCode',
  country = 'country',
  address = 'address',
}

export interface IAddressForm {
  [AddressFormControls.country]: FormControl<string | null>;
  [AddressFormControls.region]: FormControl<string | null>;
  [AddressFormControls.city]: FormControl<string | null>;
  [AddressFormControls.zipCode]: FormControl<string | null>;
  [AddressFormControls.address]: FormControl<string | null>;
}

export enum AddressFormValidationKeys {
  countryRequired = 'countryRequired',
  regionRequired = 'regionRequired',
  cityRequired = 'cityRequired',
  zipCodeRequired = 'zipCodeRequired',
  addressRequired = 'addressRequired',
}
