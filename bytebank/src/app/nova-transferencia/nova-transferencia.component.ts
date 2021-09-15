import { Component, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { ITransferencia } from "../interfaces/ITransferencia";
import { TransferenciasService } from "../services/transferencias.service";

@Component({
    selector: "app-nova-transferencia",
    templateUrl: "./nova-transferencia.component.html",
    styleUrls: ["./nova-transferencia.component.scss"]
})


export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<ITransferencia>();

  valor: number = 12;
  destino: string = "2222-3";

  constructor(private service: TransferenciasService, private router: Router) {}

  transferir() {

    const transferencia: ITransferencia = {
      valor: this.valor,
      destino: this.destino,
      data: new Date()
    }

    this.service.adicionar(transferencia).subscribe(resultado => {
      this.limparCampos();
      this.aoTransferir.emit(transferencia)
      this.router.navigateByUrl('extrato')
    }, error => {
      console.error(error)
    });

  }

  limparCampos() {
    this.valor = 0;
    this.destino = '0';
  }

}
