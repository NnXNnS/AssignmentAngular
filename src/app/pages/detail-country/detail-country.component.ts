import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/constant/country';
import { CountryService } from 'src/app/services/Country.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styleUrls: ['./detail-country.component.css']
})
export class DetailCountryComponent implements OnInit {

  listCountry:Array<Country>;
  country:Country;
  id:string;

  constructor(private route:ActivatedRoute,private location:Location,private countryService:CountryService) { }
 
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getAllCountries();
  }
  getAllCountries(){
    this.countryService.getCountry().subscribe((v)=>{
      this.listCountry=v;
      this.country=this.listCountry.filter((v)=>v.id==this.id)[0];
      console.log(this.country)
    });
  }
  goBack(): void {
    this.location.back();
  }

}
