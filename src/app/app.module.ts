import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Components1Component } from './component1/components1/components1.component';
import { Components2Component } from './component2/components2/components2.component';
import { Components3Component } from './component3/components3/components3.component';
import { Components4Component } from './component4/components4/components4.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './service.service';
import { ArhiveComponentComponent } from './componentArhive/arhive-component/arhive-component.component';

@NgModule({
  declarations: [
    AppComponent,
    Components1Component,
    Components2Component,
    Components3Component,
    Components4Component,
    ArhiveComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
