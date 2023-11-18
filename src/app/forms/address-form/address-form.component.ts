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
  IAddressForm,
} from './address-form.controls';
import {
  TuiInputModule,
  TuiInputNumberModule,
} from '@taiga-ui/kit';
import { TuiErrorModule } from '@taiga-ui/core';

@Component({
  selector: 'address-form',
  templateUrl: 'address-form.component.html',
  styleUrl: 'address-form.component.less',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,

    TuiInputModule,
    TuiErrorModule,
    TuiInputNumberModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressFormComponent implements OnInit, OnDestroy {
  controlContainer = inject(ControlContainer);
  parentForm!: FormGroup;
  addressForm!: FormGroup;

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
      [AddressFormControls.city]: new FormControl<string>(
        '',
        { nonNullable: true }
      ),
      [AddressFormControls.region]: new FormControl<string>(
        '',
        { nonNullable: true }
      ),
      [AddressFormControls.zipCode]: new FormControl<string>(
        '',
        { nonNullable: true }
      ),
      [AddressFormControls.country]: new FormControl<string>(
        '',
        { nonNullable: true }
      ),
      [AddressFormControls.address]: new FormControl<string>(
        '',
        { nonNullable: true }
      ),
    });

    this.parentForm.addControl(
      'address',
      this.addressForm
    );
  }
}
