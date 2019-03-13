import { Component, OnInit } from '@angular/core';
import {FormationService} from '../formation.service';
import {Formation} from '../formation';
import{Router} from '@angular/router';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit {
   private formation : Formation;
  constructor(private formationService : FormationService ,private router: Router) { }

  ngOnInit() {
    this.formation=this.formationService.getter();
  }

  
  createOrUpdate(){
    if(this.formation._idFormation==undefined){
    this.formationService.createFormation(this.formation).subscribe(
      data =>{
        console.log(data);
        this.router.navigate(['/']);
      },
      error =>{
        console.log(error);
      }
    )}
    else{
      this.formationService.updateFormation(this.formation).subscribe(
        data =>{
          console.log(data);
          this.router.navigate(['/']);
        },
        error =>{
          console.log(error);
        }
      )
    }

  }

}
