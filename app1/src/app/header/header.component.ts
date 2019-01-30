import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  /**
   * aqui estou criando a minha propriedade que vai sinalizar para o componente externo
   * no meu caso eu estou sinalizando com o tipo booleano, mas poderia passar uma string, double,
   * ou qualquer objetos.
   * O decorador Output sinalizar que a propriedade será externalizada.
   */

  @Output() public escondeBanner: EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit() {
  }

  /**
   * esse método vai emitir o valor externamente para o componente pai recuperar
   */
  public escondeBaner():void{
    this.escondeBanner.emit(true)
  }
}
