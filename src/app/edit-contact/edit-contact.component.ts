import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { myContact } from 'src/model/myContacts';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit{

  contactId:string =''
  contact:myContact = {}
  groups:any = []

  constructor(private editContactActivatedRoute:ActivatedRoute,private api:ApiService,private editContactRouter:Router){


  }


  ngOnInit(): void {
    this.editContactActivatedRoute.params
    .subscribe((data:any)=>{
      this.contactId= data.id
      console.log(this.contactId);
      
    })

    this.api.allGroups()
    .subscribe((result:any)=>{
      console.log(result);
      this.groups = result
    })


    this.api.viewContact(this.contactId)
    .subscribe((result:any)=>{
      console.log(result);
      this.contact = result
    })

  }
  
    editContact(contact:myContact){
        this.api.updateContact(this.contactId,contact)
        .subscribe((result:any)=>{
          alert('Contact was Updated..')
          this.editContactRouter.navigateByUrl('')
        })
    }

}  
