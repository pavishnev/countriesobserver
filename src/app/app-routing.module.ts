import { CountryOverviewComponent } from './components/country-overview/country-overview.component';

import { ContinentsComponent } from './components/continents/continents.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionCountriesComponent } from './components/region-countries/region-countries.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/continents',
    pathMatch: 'full',
  },
  {
    path: 'continents',
    component: ContinentsComponent,
  },
  {
    path: 'continents/:continent',
    component: RegionCountriesComponent,
  },
  {
    path: 'continents/:continent/:country',
    component: CountryOverviewComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
