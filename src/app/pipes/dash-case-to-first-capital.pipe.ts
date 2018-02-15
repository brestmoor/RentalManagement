import {Pipe, PipeTransform} from '@angular/core';
import {toSpaceSeparated} from "../../utils";

@Pipe({
  name: 'dashCaseToFirstCapital'
})
export class DashCaseToFirstCapitalPipe implements PipeTransform {

  transform(value: string): string {
    return toSpaceSeparated(value)
  }

}
