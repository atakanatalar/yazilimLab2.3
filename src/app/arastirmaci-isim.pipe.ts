import { Pipe, PipeTransform } from '@angular/core';
import { GetUser } from './models/getUser';

@Pipe({
  name: 'arastirmaciIsim'
})
export class ArastirmaciIsimPipe implements PipeTransform {

  transform(value: GetUser[], filterText: string): GetUser[] {
    filterText = filterText ? filterText.toLocaleLowerCase(): "";
    return filterText ? value.filter((c:GetUser) => (c.arastirmaci.isim.toLocaleLowerCase() + " " + c.arastirmaci.soyisim.toLocaleLowerCase()).includes(filterText)
    || (c.yayinlar.forEach(x => x.baslik.toLocaleLowerCase().includes(filterText)))) : value;
  }

}
