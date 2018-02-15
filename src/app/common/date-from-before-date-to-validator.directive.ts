import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appDateFromBeforeDateToValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: DateFromBeforeDateToValidatorDirective, multi: true}]

})
export class DateFromBeforeDateToValidatorDirective implements Validator{

  validate(c: AbstractControl): ValidationErrors | any {
    return undefined;
  }


}
