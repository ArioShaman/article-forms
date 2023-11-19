import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export class InternalValidators {
  static minMax(min: number, max: number, errorKey = 'minMax'): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value: number = control.value;

      if (value !== null) {
        if (value < min) {
          return {
            [errorKey]: true,
          };
        }

        if (value > max) {
          return {
            [errorKey]: true,
          };
        }
      }

      return null;
    };
  }

  static required(errorKey = 'required'): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (Validators.required(control)) {
        return {
          [errorKey]: true,
        };
      }

      return null;
    };
  }

  static pattern(data: RegExp, errorKey = 'pattern'): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
      const valid = data.test(control.value);

      if (!valid) {
        return {
          [errorKey]: true,
        };
      }

      return null;
    };
  }
}
