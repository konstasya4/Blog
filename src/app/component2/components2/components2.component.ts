import { Component, OnInit } from '@angular/core';
import { DataForm } from 'src/app/model';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-components2',
  templateUrl: './components2.component.html',
  styleUrls: ['./components2.component.css'],
})
export class Components2Component implements OnInit {
  dataCultureList: DataForm[] = [];
  constructor(private serviceService: ServiceService) {}

  deleteCultureList(heading: string) {
    this.serviceService.deleteCultureList(heading);
    this.dataCultureList = this.serviceService.getCultureList();
  }
  sendCultureList(heading: string) {
    this.serviceService.sendCultureList(heading);
    this.dataCultureList = this.serviceService.getCultureList();
  }
  ngOnInit() {
    this.dataCultureList = this.serviceService.getCultureList();
  }
}
