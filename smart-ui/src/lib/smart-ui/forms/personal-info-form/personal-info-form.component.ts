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
import { MaskitoModule } from '@maskito/angular';
import { TuiErrorModule } from '@taiga-ui/core';
import {
  TuiInputModule,
  TuiFieldErrorPipeModule,
  TUI_VALIDATION_ERRORS,
  TuiInputPhoneModule
} from '@taiga-ui/kit';
import { InternalValidators, ValidationRegex } from '@article-workspace/utils';
import { personalInfoMasks } from './personal-info-form.masks';
import {
  Example01FormControls,
  IPersonalInfoForm,
  ISubFormComponent,
  PersonalInfoFormControls,
  PersonalInfoFormValidationKeys,
} from '@article-workspace/types';

@Component({
  selector: 'personal-info-form',
  templateUrl: 'personal-info-form.component.html',
  styleUrl: 'personal-info-form.component.less',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaskitoModule,

    TuiInputModule,
    TuiInputPhoneModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
  ],
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        [PersonalInfoFormValidationKeys.firstNameRequired]:
          'Укажите имя',
        [PersonalInfoFormValidationKeys.lastNameRequired]:
          'Укажите фамилию',
        [PersonalInfoFormValidationKeys.innRequired]:
          'Укажите ИНН',
        [PersonalInfoFormValidationKeys.innPattern]:
          'Некорректный формат ИНН',
        [PersonalInfoFormValidationKeys.snilsRequired]:
          'Укажите СНИЛС',
        [PersonalInfoFormValidationKeys.snilsPattern]:
          'Некорректный формат СНИЛС',
        [PersonalInfoFormValidationKeys.phoneRequired]:
          'Укажите телефон',
        [PersonalInfoFormValidationKeys.passportRequired]:
          'Укажите серию и номер паспорта',
        [PersonalInfoFormValidationKeys.passportPattern]:
          'Некорректный формат номера паспорта',
      },
    },
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PersonalInfoFormComponent implements OnInit, OnDestroy, ISubFormComponent {
  controlContainer = inject(ControlContainer);

  parentForm!: FormGroup;
  personalInfoForm!: FormGroup;

  readonly controls = PersonalInfoFormControls;
  readonly masks = personalInfoMasks;

  ngOnInit(): void {
    this.parentForm = this.controlContainer.control as FormGroup;
    this.addSubformFields();
  }

  ngOnDestroy(): void {
    this.parentForm.removeControl(Example01FormControls.personalInfo);
  }

  addSubformFields(): void {
    this.personalInfoForm = new FormGroup<IPersonalInfoForm>({
      [PersonalInfoFormControls.firstName]: new FormControl<string | null>(
        null,
        [
          InternalValidators.required(
            PersonalInfoFormValidationKeys.firstNameRequired
          )
        ],
      ),
      [PersonalInfoFormControls.lastName]: new FormControl<string | null>(
        null,
        [
          InternalValidators.required(
            PersonalInfoFormValidationKeys.lastNameRequired
          )
        ],
      ),
      [PersonalInfoFormControls.inn]: new FormControl<string | null>(
        null,
        [
          InternalValidators.required(
            PersonalInfoFormValidationKeys.innRequired
          ),
          InternalValidators.pattern(
            ValidationRegex.inn,
            PersonalInfoFormValidationKeys.innPattern
          ),
        ],
      ),
      [PersonalInfoFormControls.snils]: new FormControl<string | null>(
        null,
        [
          InternalValidators.required(
            PersonalInfoFormValidationKeys.snilsRequired
          ),
          InternalValidators.pattern(
            ValidationRegex.snils,
            PersonalInfoFormValidationKeys.snilsPattern
          ),
        ],
      ),
      [PersonalInfoFormControls.phone]: new FormControl<string | null>(
        null,
        [
          InternalValidators.required(
            PersonalInfoFormValidationKeys.phoneRequired
          ),
        ],
      ),
      [PersonalInfoFormControls.passport]: new FormControl<string | null>(
        null,
        [
          InternalValidators.required(
            PersonalInfoFormValidationKeys.passportRequired
          ),
          InternalValidators.pattern(
            ValidationRegex.passport,
            PersonalInfoFormValidationKeys.passportPattern
          ),
        ],
      ),
    });

    this.parentForm.addControl(
      Example01FormControls.personalInfo,
      this.personalInfoForm
    );
  }
}