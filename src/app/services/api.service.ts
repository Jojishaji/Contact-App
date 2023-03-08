import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { myContact } from 'src/model/myContacts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  

  constructor(private http:HttpClient) { }
  allContacts(){
  return this.http.get('http://localhost:3000/contacts') //http req to get all contacts
  }

  addContact(contact:any){
    return this.http.post('http://localhost:3000/contacts',contact) // api to add new contact
  }

  viewContact(contactId:string){
    return this.http.get('http://localhost:3000/contacts/'+contactId) // api to get particular contact
  }

  viewConactGroupName(groupId:string){
    return this.http.get('http://localhost:3000/groups/'+groupId)//api call for getting particular contact gp info
  }

  allGroups(){
    return this.http.get('http://localhost:3000/groups')//api call to get all gps
  }

 deleteContact(contactId:any){
    return this.http.delete('http://localhost:3000/contacts/'+contactId)//api to delete contact

  }
  updateContact(contactId:string,contactBody:any){
    return this.http.put('http://localhost:3000/contacts/'+contactId,contactBody)
  }
}
