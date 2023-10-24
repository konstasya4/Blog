import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-arhive-component',
  templateUrl: './arhive-component.component.html',
  styleUrls: ['./arhive-component.component.css']
})
export class ArhiveComponentComponent {
  archiveCultureList: any[] = [];
  constructor(private cultureService: ServiceService) {}
  ngOnInit() {
    this.archiveCultureList = this.cultureService.getArhiveCultureList();
  }
}
