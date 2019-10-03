import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as socketIo from 'socket.io-client';
import { environment } from 'src/environments/environment';

/**
 * Servicio que instancia la comunicacion con el servidor
 * mediante websockets.
 */

@Injectable()
export class SocketIOService {

  private socket;

  private UPDATE_EVENT = 'update';

  constructor() { }

  /**
   * Metodo encargado de iniciar la coneccion websocket.
   */
  public initSocket(): void {
    this.socket = socketIo(environment.api);
  }

  /**
   * Metodo encargado de escuchar los eventos emitidos por el servidor.
   */
  public onConnect(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on(this.UPDATE_EVENT, (data: any) => observer.next(data));
    });
  }

}
