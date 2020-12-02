import { Injectable, Pipe, PipeTransform } from '@angular/core';

export type SortOrder = 'asc' | 'desc';

@Injectable()

@Pipe({
  name: 'currencySort',
})

export class CurrencySortPipe implements PipeTransform {
  transform(value: any[], sortOrder: SortOrder | string = 'asc', sortKey?: string, rate?: string): any {
    sortOrder = sortOrder && (sortOrder.toLowerCase() as any);
    console.log(value, sortOrder, sortKey)

    if (!value || (sortOrder !== 'asc' && sortOrder !== 'desc')) return value;

    let numberArray = [];
    let stringArray = [];

    if (sortKey) {
      numberArray = value.filter(item => typeof item[sortKey] === 'number').sort((a, b) => a[sortKey]/a[rate] - b[sortKey]/b[rate]);
      stringArray = value.filter(item => typeof item[sortKey] === 'string').sort((a, b) => {
        if (a[sortKey] < b[sortKey]) return -1;
        else if (a[sortKey] > b[sortKey]) return 1;
        else return 0;
      });
    }
    const sorted = numberArray.concat(stringArray);
    return sortOrder === 'asc' ? sorted : sorted.reverse();
  }
}