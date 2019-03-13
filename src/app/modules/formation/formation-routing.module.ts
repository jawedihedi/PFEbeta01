import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormListComponent } from './form-list/form-list.component';
import { CRUDComponent } from './crud/crud.component';
import { FormItemComponent } from './form-item/form-item.component';

const routes: Routes = [
  {path:'', component: FormListComponent},
  { path: 'list', 
  component: FormListComponent
 },
  { path: 'item/:id',      
  component: FormItemComponent
 },
  {
    path: 'createUpdate',
    component: CRUDComponent 
  }, 
  { path: '**', 
  component: FormListComponent }
];
 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationRoutingModule { }
