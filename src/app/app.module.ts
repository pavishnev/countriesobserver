import { CountryOverviewComponent } from './components/country-overview/country-overview.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app.material.module';
import { ContinentsComponent } from './components/continents/continents.component';
import { RegionCountriesComponent } from './components/region-countries/region-countries.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CountriesApiService } from './services/countries-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContinentsComponent,
    RegionCountriesComponent,
    CountryOverviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [CountriesApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
