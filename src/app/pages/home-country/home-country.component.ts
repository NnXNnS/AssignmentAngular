import { Component, OnInit } from '@angular/core';
import {CountryService} from './../../services/Country.service'
import { Country } from 'src/app/constant/country';

@Component({
  selector: 'app-home-country',
  templateUrl: './home-country.component.html',
  styleUrls: ['./home-country.component.css']
})
export class HomeCountryComponent implements OnInit {
   listCountry:Array<Country>;
   listCountryLargest:Array<Country>;
  constructor(private countryService:CountryService) { }

  ngOnInit(): void {
    this.getMostPopulated();
    this.getLargestArea();
  }
  getMostPopulated(){
    this.countryService.getCountry().subscribe((v)=>{
      this.listCountry=v;
      this.listCountry=this.listCountry.sort((v,v2)=>v2.population-v.population).slice(0,3);
      console.log(this.listCountry);
    });
  }
  getLargestArea(){
    this.countryService.getCountry().subscribe((v)=>{
      this.listCountryLargest=v;
      this.listCountryLargest=this.listCountryLargest.sort((v,v2)=>v2.area-v.area).slice(0,3);
    });
  }
}
