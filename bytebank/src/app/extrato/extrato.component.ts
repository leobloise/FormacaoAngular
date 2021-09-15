import { ITransferencias } from './../interfaces/ITransferencias';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { TransferenciasService } from '../services/transferencias.service';
import { Transferencia } from '../models/transferencia.model';
import { ITransferencia } from '../interfaces/ITransferencia';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})

export class ExtratoComponent implements OnInit {

  transferencias: ITransferencias;

  constructor(private service: TransferenciasService) {
    this.transferencias = [];
  }

  ngOnInit(): void {
    this.service.todas().subscribe((transferencias: ITransferencias) => {
      this.transferencias = transferencias;
    })
  }

}
