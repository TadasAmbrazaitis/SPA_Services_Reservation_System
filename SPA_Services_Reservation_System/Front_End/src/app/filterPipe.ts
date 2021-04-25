import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform
{
  transform(items: any, max_price: number, category: string, duration: number): any
  {
    if (max_price == null && category == null && duration == null) return items;
    var filtereditems: any = [];
    // Filter each
    if (max_price)
    {
      filtereditems = items.filter(t => t.price <= max_price);
    }

    if (duration) {
      filtereditems = items.filter(t => t.durationMinutes <= duration);
    }
    
    if (category)
    {
      filtereditems = items.filter(t => t.category == category);
    }

    if (category && max_price)
    {
      filtereditems = items.filter(t => t.price <= max_price);
      if (category != "Visos") {
        filtereditems = filtereditems.filter(t => t.category == category);
      }
    }

    if (category && duration) {
      filtereditems = items.filter(t => t.durationMinutes <= duration);
      if (category != "Visos") {
        filtereditems = filtereditems.filter(t => t.category == category);
      }
    }

    if (duration && max_price) {
      filtereditems = items.filter(t => t.price <= max_price);
      filtereditems = filtereditems.filter(t => t.durationMinutes <= duration);
    }

    if (category && max_price && duration) {
      filtereditems = items.filter(t => t.price <= max_price);
      filtereditems = filtereditems.filter(t => t.durationMinutes <= duration);
      if (category != "Visos") {
        filtereditems = filtereditems.filter(t => t.category == category);
      }
    }
    
    console.log("filtered", filtereditems);
    return filtereditems;
  }

}
