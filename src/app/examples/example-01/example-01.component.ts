import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressFormComponent } from '@article-workspace/smart-ui';
import { tuiMarkControlAsTouchedAndValidate } from '@taiga-ui/cdk';
import { TuiButtonModule } from '@taiga-ui/core';


@Component({
  selector: 'example-01',
  templateUrl: 'example-01.component.html',
  styleUrls: ['./example-01.component.less'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiButtonModule,
    AddressFormComponent,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Example01Component implements OnInit {
  exampleForm!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.initForm();      
  }

  onSubmit(): void {
    tuiMarkControlAsTouchedAndValidate(this.exampleForm);

    const formValue = this.exampleForm.value;

    console.log('cock', formValue);
  }

  private initForm(): void {
    this.exampleForm = this.formBuilder.group({});
  }
}
