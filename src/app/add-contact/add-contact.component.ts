import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { myContact } from 'src/model/myContacts';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

groups:any = []
contact:myContact = {}
  constructor(private api:ApiService,private addContactRouter:Router){
    this.contact.groupId = 'Select a group'
  }
  ngOnInit():void{
    this.api.allGroups()
    .subscribe((result:any)=>{
      console.log(result);
      this.groups = result
    })
  }
  

  addContact(contact:any){
    this.api.addContact(contact)
    .subscribe((data:any)=>{
      alert('New contact been added')
      this.addContactRouter.navigateByUrl('')
    })
  }
}
