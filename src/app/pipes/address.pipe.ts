import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/address.interface';

@Pipe({
  name: 'address',
})
export class AddressPipe implements PipeTransform {
  transform(address: IAddress): string {
    const INVALID_ADRESS =
      !address ||
      !address.rua ||
      !address.cidade ||
      !address.estado ||
      (address.numero === address.numero) === undefined;

    if (INVALID_ADRESS) {
      return 'Endereço indisponível ou inválido!';
    }

    return `${address.rua}, ${address.numero}, ${address.cidade} - ${address.estado}`;
  }
}
