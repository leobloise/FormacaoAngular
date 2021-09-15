import { Component } from '@angular/core';
import { ITransferencia } from './interfaces/ITransferencia';
import { ITransferencias } from './interfaces/ITransferencias';
import { TransferenciasService } from './services/transferencias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'bytebank';
  transferencias: ITransferencias = [];

  constructor(private service: TransferenciasService) {}

  transferir($event: ITransferencia) {
    this.service.adicionar($event);
  }

}
