import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { SliderComponent } from 'src/app/components/slider/slider.component';
import { ClientsService } from 'src/app/services/clients.service';
import { EventsComponent } from 'src/app/components/events/events.component';
import { PlansComponent } from 'src/app/components/plans/plans.component';
import { ServicesComponent } from 'src/app/components/services/services.component';
import { DescriptionComponent } from 'src/app/components/description/description.component';
import { SlidesPipe } from 'src/app/pipes/slides.pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    EventsComponent,
    PlansComponent,
    ServicesComponent,
    DescriptionComponent,
    SlidesPipe
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ClientsService
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    EventsComponent,
    PlansComponent,
    ServicesComponent,
    DescriptionComponent,
    SlidesPipe
  ]
})
export class ComponentsModule { }
