import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { DataForm } from 'src/app/model';

@Component({
  selector: 'app-components3',
  templateUrl: './components3.component.html',
  styleUrls: ['./components3.component.css'],
})
export class Components3Component {
  constructor(private cultureService: ServiceService) {}
  myForm = {
    author: '',
    heading: '',
    category: '',
    content: '',
  };
  addCultureList() {
    if (
      this.myForm.author != '' &&
      this.myForm.heading != '' &&
      this.myForm.category != '' &&
      this.myForm.content != ''
    )
      this.cultureService.addCultureList(
        new DataForm(
          this.myForm.author,
          this.myForm.heading,
          this.myForm.category,
          this.myForm.content
        )
      );
  }
}
