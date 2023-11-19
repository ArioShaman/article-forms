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
  TUI_VALIDATION_ERRORS,
  TuiFieldErrorPipeModule,
  TuiInputModule,
  TuiInputNumberModule,
} from '@taiga-ui/kit';
import { TuiErrorModule } from '@taiga-ui/core';
import { MaskitoOptions } from '@maskito/core';
import { MaskitoModule } from '@maskito/angular';
import { InternalValidators, ValidationRegex } from '@article-workspace/utils';
import {
  AddressFormControls,
  AddressFormValidationKeys,
  Example01FormControls,
  IAddressForm,
  ISubFormComponent,
} from '@article-workspace/types';

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
        [AddressFormValidationKeys.zipCodePattern]:
          'Некорректный формат почтового индекса',
        [AddressFormValidationKeys.regionRequired]:
          'Укажите область',
      },
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressFormComponent implements OnInit, OnDestroy, ISubFormComponent {
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
    this.parentForm.removeControl(Example01FormControls.address);
  }

  addSubformFields(): void {
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
          ),
          InternalValidators.pattern(
            ValidationRegex.zipCode,
            AddressFormValidationKeys.zipCodePattern
          ),
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
      Example01FormControls.address,
      this.addressForm,
    );
  }
}
