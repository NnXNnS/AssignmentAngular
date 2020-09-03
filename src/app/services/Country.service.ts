import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Country } from '../constant/country';

@Injectable({
	providedIn:'root'
})
export class CountryService{
	private BASE_URL = 'https://5d60ae24c2ca490014b27087.mockapi.io/api/v1/country';
	constructor(private http: HttpClient){ 
	}
	getCountry(){
		return this.http.get<Country[]>(`${this.BASE_URL}`);
	}
	deleteCountry(countryId:string){
		return this.http.delete(`${this.BASE_URL}/${countryId}`);
	}
	getCountryById(countryId:string){
		return this.http.get<Country>(`${this.BASE_URL}/${countryId}`);
	}
	updateCountry(country:Country){
		return this.http.put(`${this.BASE_URL}/${country.id}`,country);
	}
	createCountry(country:Country){
		return this.http.post(`${this.BASE_URL}`,country);
	}
}