import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  inject
} from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  Example01FormControls,
  ILegalEntityForm,
  ISubFormComponent,
  LegalEntityFormControls,
  LegalEntityFormValidationKeys,
} from '@article-workspace/types';
import { MaskitoModule } from '@maskito/angular';
import { TuiErrorModule } from '@taiga-ui/core';
import {
  TuiInputModule,
  TuiFieldErrorPipeModule,
  TUI_VALIDATION_ERRORS,
} from '@taiga-ui/kit';
import { InternalValidators } from '@article-workspace/utils';
import { legalEntityMasks } from './legal-entity-form.masks';

@Component({
  selector: 'legal-entity-form',
  templateUrl: 'legal-entity-form.component.html',
  styleUrl: 'legal-entity-form.component.less',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaskitoModule,

    TuiInputModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
  ],
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        [LegalEntityFormValidationKeys.nameRequired]:
          'Укажите наименование организации',
        [LegalEntityFormValidationKeys.innRequired]:
          'Укажите инн',
        [LegalEntityFormValidationKeys.kppRequired]:
          'Укажите КПП',
        [LegalEntityFormValidationKeys.ogrnRequired]:
          'Укажите почтовый ОГРН',
        [LegalEntityFormValidationKeys.legalAddressRequired]:
          'Укажите юридический адрес организации',
      },
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LegalEntityComponent implements OnInit, OnDestroy, ISubFormComponent {
  controlContainer = inject(ControlContainer);
  parentForm!: FormGroup;
  legalEntityForm!: FormGroup;
  namePlaceholder = 'ООО "Рога и копыта"';

  readonly controls = LegalEntityFormControls;
  readonly masks = legalEntityMasks;

  ngOnInit(): void {
    this.parentForm = this.controlContainer.control as FormGroup;
    this.addSubformFields();
  }

  ngOnDestroy(): void {
    this.parentForm.removeControl(Example01FormControls.legalEntity);
  }

  addSubformFields(): void {
    this.legalEntityForm = new FormGroup<ILegalEntityForm>({
      [LegalEntityFormControls.name]: new FormControl<string | null>(
        null,
        [
          InternalValidators.required(
            LegalEntityFormValidationKeys.nameRequired
          )
        ],
      ),
      [LegalEntityFormControls.inn]: new FormControl<string | null>(
        null,
        [
          InternalValidators.required(
            LegalEntityFormValidationKeys.innRequired
          )
        ],
      ),
      [LegalEntityFormControls.kpp]: new FormControl<string | null>(
        null,
        [
          InternalValidators.required(
            LegalEntityFormValidationKeys.kppRequired
          )
        ],
      ),
      [LegalEntityFormControls.ogrn]: new FormControl<string | null>(
        null,
        [
          InternalValidators.required(
            LegalEntityFormValidationKeys.ogrnRequired
          )
        ],
      ),
      [LegalEntityFormControls.legalAddress]: new FormControl<string | null>(
        null,
        [
          InternalValidators.required(
            LegalEntityFormValidationKeys.legalAddressRequired
          )
        ],
      ),
    });

    this.parentForm.addControl(
      Example01FormControls.legalEntity,
      this.legalEntityForm,
    );
  }
}
