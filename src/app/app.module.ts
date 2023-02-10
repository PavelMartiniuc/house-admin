import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import {Routes, RouterModule} from '@angular/router'
import { AboutComponent } from './about/about.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';

const appRoutes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'add', component: AddPropertyComponent },
  { path: 'about', component: AboutComponent },
  { path: 'property-detail/:id', component: PropertyDetailComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
      AboutComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [HousingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
