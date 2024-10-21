import { Component, OnInit } from '@angular/core';
import { CarsService,Car } from '../../services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent  implements OnInit {
  car:Car = {patente:"",year:0,imagenUrl:"",nombre:""}
  constructor(private carsService :CarsService) { }


  ngOnInit() {}
  addCar(){
      this.carsService.addCar(this.car).then(()=>{
        alert("Agregado Correctamente")
        this.car = {patente:"",year:0,imagenUrl:"",nombre:""} 
      }).catch(error=>{alert("error al agregar "+error)})
  }
}
