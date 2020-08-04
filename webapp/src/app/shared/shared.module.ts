import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CartOverviewComponent } from './cart-overview/cart-overview.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { BaseObject } from 'src/app/baseobject';

@NgModule({
  declarations: [
    HeaderComponent,
    CartOverviewComponent,
    NotFoundComponent,
    LayoutComponent,
    SectionComponent,
    FooterComponent,
    ButtonComponent,
    BaseObject,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    NotFoundComponent,
    SectionComponent,
    LayoutComponent,
    CartOverviewComponent,
    ButtonComponent,
    BaseObject,
  ],
})
export class SharedModule { }
