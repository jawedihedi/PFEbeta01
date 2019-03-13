import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { FormationRoutingModule } from './formation-routing.module';
import { CRUDComponent } from './crud/crud.component';
import { FormItemComponent } from './form-item/form-item.component';
import { FormListComponent } from './form-list/form-list.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'; 
import { FormationService } from './formation.service';

@NgModule({
  declarations: [CRUDComponent, FormItemComponent, FormListComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FormationRoutingModule
  ],
  providers: [
    FormationService
  ],
  exports: [
    FormListComponent,
    CRUDComponent
  ] 
})
export class FormationModule { }
