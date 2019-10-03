import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from '../utils/contants';

/**
 * Pipe utilizado para desplegar la temeperatura redondeada y formateada.
 */

@Pipe({ name: 'degrees' })
export class DegreesPipe implements PipeTransform {
  transform(value: number): string {
    return Math.round(value).toString() + Constants.DEGREE_SYMBOL;
  }
}
