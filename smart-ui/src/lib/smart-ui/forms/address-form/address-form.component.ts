import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  AddressFormControls,
  AddressFormValidationKeys,
  IAddressForm,
} from './address-form.controls';
import {
  TUI_VALIDATION_ERRORS,
  TuiFieldErrorPipeModule,
  TuiInputModule,
  TuiInputNumberModule,
} from '@taiga-ui/kit';
import { TuiErrorModule } from '@taiga-ui/core';
import { MaskitoOptions } from '@maskito/core';
import { MaskitoModule } from '@maskito/angular';
import { InternalValidators } from '@article-workspace/utils';

@Component({
  selector: 'address-form',
  templateUrl: 'address-form.component.html',
  styleUrl: 'address-form.component.less',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaskitoModule,

    TuiInputModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    TuiInputNumberModule,
  ],
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        [AddressFormValidationKeys.addressRequired]:
          'Укажите адрес',
        [AddressFormValidationKeys.countryRequired]:
          'Укажите страну',
        [AddressFormValidationKeys.cityRequired]:
          'Укажите город',
        [AddressFormValidationKeys.zipCodeRequired]:
          'Укажите почтовый индекс',
        [AddressFormValidationKeys.regionRequired]:
          'Укажите область',
      },
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressFormComponent implements OnInit, OnDestroy {
  controlContainer = inject(ControlContainer);
  parentForm!: FormGroup;
  addressForm!: FormGroup;

  readonly zipCodeOptions: MaskitoOptions = {
    mask: [
      ...new Array(3).fill(/\d/),
      ' ',
      ...new Array(3).fill(/\d/),
    ],
  };
  readonly controls = AddressFormControls;

  ngOnInit(): void {
    this.parentForm = this.controlContainer.control as FormGroup;
    this.addSubformFields();
  }

  ngOnDestroy(): void {
    this.parentForm.removeControl('address');
  }

  private addSubformFields(): void {
    this.addressForm = new FormGroup<IAddressForm>({
      [AddressFormControls.city]: new FormControl<string | null>(
        null,
        [
          InternalValidators.required(
            AddressFormValidationKeys.cityRequired
          )
        ],
      ),
      [AddressFormControls.region]: new FormControl<string | null>(
        null,
        [
          InternalValidators.required(
            AddressFormValidationKeys.regionRequired
          )
        ],
      ),
      [AddressFormControls.zipCode]: new FormControl<string | null>(
        null,
        [
          InternalValidators.required(
            AddressFormValidationKeys.zipCodeRequired
          )
        ],
      ),
      [AddressFormControls.country]: new FormControl<string | null>(
        null,
        [
          InternalValidators.required(
            AddressFormValidationKeys.countryRequired
          )
        ],
      ),
      [AddressFormControls.address]: new FormControl<string | null>(
        null,
        [
          InternalValidators.required(
            AddressFormValidationKeys.addressRequired
          )
        ],
      ),
    });

    this.parentForm.addControl(
      'address',
      this.addressForm
    );
  }
}