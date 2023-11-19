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
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiRadioBlockModule } from '@taiga-ui/kit';

import {
  AddressFormComponent,
  LegalEntityComponent,
  PersonalInfoFormComponent,
} from '@article-workspace/smart-ui';
import { Example01FormControls, IExample01Form } from '@article-workspace/types';

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

    AddressFormComponent,
    PersonalInfoFormComponent,
    LegalEntityComponent,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Example01Component implements OnInit {
  exampleForm!: FormGroup;

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
      [Example01FormControls.isLegal]: new FormControl<boolean>(
        false,
        { nonNullable: true }
      ),
    });
  }
}
