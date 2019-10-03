import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe utilizado para desplegar solo la hora.
 */

@Pipe({ name: 'timeOnly' })
export class TimeOnlyPipe implements PipeTransform {
  transform(value: string): string {
    return value.split(' ')[1];
  }
}
