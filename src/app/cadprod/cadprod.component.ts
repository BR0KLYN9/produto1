// produto1/src/app/cadprod/cadprod.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadprod',
  templateUrl: './cadprod.component.html',
  styleUrls: ['./cadprod.component.css']
})
export class CadprodComponent {
  produto: any = {};

  salvarProduto() {
    console.log(this.produto);
    // Aqui você pode adicionar a lógica para salvar o produto
  }
}
