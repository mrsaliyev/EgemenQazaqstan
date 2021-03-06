import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {

  // tslint:disable-next-line:typedef
  transform(value: number, unit: string) {
    if (value && !isNaN(value)) {
      if (unit === 'KZ') {
        const money = value / 420;
        return money.toFixed(2);
      } else if (unit === '$'){
        const money = value * 420;
        return money.toFixed(2);
      }
    }
    return null;
  }

}
