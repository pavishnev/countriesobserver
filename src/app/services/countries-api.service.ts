import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class CountriesApiService {
    constructor(private http: HttpClient) { }
    getContinentCountries(continent: string | null): Observable<any> {
        return this.http.get<any>(
            `https://restcountries.com/v3.1/region/${continent}`,
        )
    }

    storeCountries(continent: string, data: any) {
        localStorage.setItem(continent, JSON.stringify(data))
    }
    retrieveCountry(continent: string, country: string): Promise<any> {
        if (!localStorage.getItem(continent)) {
            this.getContinentCountries(continent).subscribe((result: Array<any>) => {
                this.storeCountries(continent ?? '', result)
            })
        }
        return JSON.parse(localStorage.getItem(continent) ?? '').find(
            (a: any) => a.name.common == country,
        )
    }
}
