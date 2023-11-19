import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { tuiMarkControlAsTouchedAndValidate } from '@taiga-ui/cdk';
import { TuiButtonModule, TuiGroupModule } from '@taiga-ui/core';
import { TuiRadioBlockModule } from '@taiga-ui/kit';

import {
  AddressFormComponent,
  LegalEntityComponent,
  PersonalInfoFormComponent,
} from '@article-workspace/smart-ui';
import {
  Example01FormControls,
  IExample01Form,
  PersonalDataMode
} from '@article-workspace/types';


@Component({
  selector: 'example-01',
  templateUrl: 'example-01.component.html',
  styleUrls: ['./example-01.component.less'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    TuiButtonModule,
    TuiRadioBlockModule,
    TuiGroupModule,

    AddressFormComponent,
    PersonalInfoFormComponent,
    LegalEntityComponent,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Example01Component implements OnInit {
  exampleForm!: FormGroup;
  readonly controls = Example01FormControls;

  get isLegalEntityModeEnabled(): boolean {
    return this.exampleForm.get(Example01FormControls.personalDataMode)?.value === 'legalEntity';
  }

  constructor() {}

  ngOnInit(): void {
    this.initForm();      
  }

  onSubmit(): void {
    tuiMarkControlAsTouchedAndValidate(this.exampleForm);

    const formValue = this.exampleForm.value;

    console.log('formValue', formValue);
  }

  private initForm(): void {
    this.exampleForm = new FormGroup<IExample01Form>({
      [Example01FormControls.personalDataMode]: new FormControl<PersonalDataMode>(
        'personalData',
        { nonNullable: true }
      ),
    });
  }
}
