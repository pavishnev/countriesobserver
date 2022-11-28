import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesApiService } from 'src/app/services/countries-api.service';

@Component({
  selector: 'app-country-overview',
  templateUrl: './country-overview.component.html',
  styleUrls: ['./country-overview.component.css']
})
export class CountryOverviewComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private api: CountriesApiService) { }


  country: string | null = "";
  continent: string | null = "";
  countryJson: any;

  routeBack() {
    this.router.navigate([`continents/${this.continent}`]);

  }

  ngOnInit() {

    this.country = this.route.snapshot.paramMap.get('country');
    this.continent = this.route.snapshot.paramMap.get('continent');
    this.countryJson = this.api.retrieveCountry(this.continent ?? "", this.country ?? "");

  }

} 
