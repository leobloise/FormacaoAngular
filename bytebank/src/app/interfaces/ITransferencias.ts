import { ITransferencia } from './ITransferencia';

export interface ITransferencias extends Array<ITransferencia>{
  [key: number]: ITransferencia
}
