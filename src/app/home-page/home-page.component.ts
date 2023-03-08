import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  

  allContacts:any = []

  searchKey:string =''
  
  constructor(private api:ApiService){

  }
  ngOnInit(): void {
    this.api.allContacts()
    .subscribe((result:any)=>{
      console.log(result);
      this.allContacts = result
    })
  }
}
