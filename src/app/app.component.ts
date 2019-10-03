import { Component, OnInit } from '@angular/core';
import { SocketIOService } from '../services/socket.io.service';
import { CitiesService } from '../services/cities.service';
import { City } from './models/city.model';

/**
 * Componente principal de la aplicacion.
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public cities: City[] = [];
  public showLoader = false;

  constructor(private socketIO: SocketIOService, private citiesService: CitiesService) {

  }

  ngOnInit() {
    this.getCities();
  }


  /**
   * Metodo encargado de obtener las ciudades en el primer request.
   */
  getCities() {
    this.showLoader = true;
    this.citiesService.getCities().subscribe(cities => {
      this.cities = cities;
      this.showLoader = false;
      this.socketIO.initSocket();
      this.listenUpdates();
    }, error => this.showLoader = false);
  }

  /**
   * Metodo encargado de actualizar la informacion de las ciudades.
   */
  listenUpdates() {
    this.socketIO.onConnect().subscribe((data) => this.cities = data);
  }

}
