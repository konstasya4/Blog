import { Injectable } from '@angular/core';
import { DataForm } from './model';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor() {}

  dataCultureList: DataForm[] = [];
  arhiveCultureList: any[] = [];
  getCultureList(): DataForm[] {
    return this.dataCultureList;
  }
  addCultureList(dataCulture: DataForm) {
    this.dataCultureList.push(dataCulture);
    console.log(dataCulture);
  }

  deleteCultureList(heading: string) {
    return (this.dataCultureList = this.dataCultureList.filter(
      (dataCulture) => dataCulture.heading !== heading
    ));
  }
  sendCultureList(heading: string) {
    const archive = this.dataCultureList.find(
      (dataCulture) => dataCulture.heading === heading
    );
    this.arhiveCultureList.push(archive?.heading);
    this.deleteCultureList(heading);
  }
  getArhiveCultureList(): DataForm[] {
    return this.arhiveCultureList;
  }
}
