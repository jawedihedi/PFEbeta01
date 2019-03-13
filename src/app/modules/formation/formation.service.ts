import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Formation } from './formation' ;
@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private formation : Formation ;
  private baseUri:string="http://localhost:8080";
  private headers = new HttpHeaders().set('Content-Type','application/json');
  constructor(private http:HttpClient) { }
 
  createFormation(formation : Formation){
    return this.http.post(this.baseUri+'/create',formation,{headers:this.headers});
  }
  
  readFormations(){
    return this.http.get(this.baseUri+'/read',{headers:this.headers});
  }

  updateFormation(formation : Formation){
    return this.http.put(this.baseUri+'/update',formation,{headers:this.headers});
  }

  deleteFormation(id:String){
    return this.http.delete(this.baseUri+'/delete/'+id, {headers:this.headers});
  }

  setter(formation : Formation){
    this.formation=formation;
  }
  getter(){
    return this.formation;
  }
}
