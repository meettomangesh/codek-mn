import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {APP_BASE_HREF} from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { BlogComponent } from './blog/blog.component';
import { AttributeSliderComponent } from './attribute-slider/attribute-slider.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { JournalItemComponent } from './journal-item/journal-item.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    BlogComponent,
    AttributeSliderComponent,
    PortfolioItemComponent,
    JournalItemComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
