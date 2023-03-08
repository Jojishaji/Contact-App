import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
{
  path:'',component:HomePageComponent
},
{
  path:'addContact',component:AddContactComponent
},
{
  path:'viewContact/:id',component:ViewContactComponent
},
{
  path:'editContact/:id',component:EditContactComponent
},
{
  path:'deleteContact',component:DeleteContactComponent
},
{
  path:'**',component:PageNotFoundComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
