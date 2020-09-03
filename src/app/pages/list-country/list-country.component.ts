import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/constant/country';
import { CountryService } from 'src/app/services/Country.service';

@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html',
  styleUrls: ['./list-country.component.css']
})
export class ListCountryComponent implements OnInit {
  listCountry:Array<Country>;
 constructor(private countryService:CountryService) { }

 ngOnInit(): void {
   this.getAllCountries();
 }
 getAllCountries(){
   this.countryService.getCountry().subscribe((v)=>{
     this.listCountry=v;
   });
 }
}
