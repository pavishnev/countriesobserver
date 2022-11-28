import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CountriesApiService } from 'src/app/services/countries-api.service';

@Component({
  selector: 'app-region-countries',
  templateUrl: './region-countries.component.html',
  styleUrls: ['./region-countries.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegionCountriesComponent implements OnInit {
  expression: any;

  constructor(private route: ActivatedRoute, private router: Router, private api: CountriesApiService) { }
  currentContinent: string | null = "";
  countries: Array<any> = [];
  options: Array<string> = [];
  myControl = new FormControl('');
  ngOnInit() {
    this.currentContinent = this.route.snapshot.paramMap.get('continent');
    this.api.getContinentCountries(this.currentContinent).subscribe(
      (result: Array<any>) => {
        this.countries = result;
        this.options = result.map(item => item.name.common)
        this.api.storeCountries(this.currentContinent ?? "", result);
      })
  }
  returnSelectedCountry(value: string) {
    return this.countries.find(item => item.name.common === value)
  }
  routeTo(country: string) {
    this.router.navigate([`${country}`],
      { queryParams: { continent: this.currentContinent, country: country }, relativeTo: this.route })

  };

}
