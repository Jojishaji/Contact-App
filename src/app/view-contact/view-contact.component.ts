import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit{
  contactId:string = ''
  contact:any = {}
  group:any = ''
constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private viewContactRouter:Router){

}

ngOnInit(): void{

this.activatedRoute.params.subscribe((data:any)=>{
  console.log(data.id);
  this.contactId = data.id
  console.log(this.contactId);
  
})

this.api.viewContact(this.contactId).subscribe((result:any)=>{
  console.log(result);
  this.contact = result


  let groupId = this.contact.groupId
  console.log(groupId);
  
  this.api.viewConactGroupName(groupId)
  .subscribe((data:any)=>{
    console.log(data);
    this.group = data.name
  })
})
}

deleteContact(contactId:any){
  this.api.deleteContact(contactId)
  .subscribe((data:any)=>{
    alert('contact is been Deleted')
    this.viewContactRouter.navigateByUrl('')
  })
}

}
