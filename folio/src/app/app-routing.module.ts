import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { AttributeSliderComponent } from './attribute-slider/attribute-slider.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { JournalItemComponent } from './journal-item/journal-item.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: BannerComponent },
  { path: 'about-us', component: AttributeSliderComponent },
  { path: 'portfolio', component: PortfolioItemComponent },
  { path: 'journal', component: JournalItemComponent },
  { path: 'contact-us', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
