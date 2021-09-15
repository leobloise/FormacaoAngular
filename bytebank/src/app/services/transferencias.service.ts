import { Injectable } from '@angular/core';
import { ITransferencia } from '../interfaces/ITransferencia';
import { ITransferencias } from '../interfaces/ITransferencias';
import {HttpClient} from '@angular/common/http';
import { Transferencia, Transferencias } from '../models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciasService {

  private listaDetransferencias: ITransferencias;
  private url: string = "http://localhost:3000/transferencias";

  constructor(private httpClient: HttpClient) {
    this.listaDetransferencias = []
  }

  adicionar(transferencia: ITransferencia): Observable<ITransferencia> {
    return this.httpClient.post<ITransferencia>(this.url, transferencia)
  }

  todas(): Observable<ITransferencias> {
    return this.httpClient.get<ITransferencias>(this.url)
  }

  get transferencias(): ITransferencias {
    return this.listaDetransferencias
  }

}
