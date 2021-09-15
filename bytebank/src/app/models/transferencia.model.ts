export interface Transferencia {
  id: string;
  valor: number;
  destino: string;
  data: Date;
}

export interface Transferencias {
  transferencias: Transferencia[];
}
