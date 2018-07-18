import { Injectable } from '@angular/core';
import * as _ from "lodash";

@Injectable({
  providedIn: 'root'
})
export class FilterServiceService {

  constructor() { }
  newArray: any
  filterData(raw, filters) {
    console.log(filters.length);
    this.newArray = raw
    if (filters.length>0) {
      filters.forEach(property => {
        var type = property.type;
        var value = property.value;
        let obj = {
          [type]: value
        }
        this.newArray = _.filter(this.newArray, obj)
      });
    }else{
      this.newArray = raw;
    }
  
    return this.newArray;
  }
}
