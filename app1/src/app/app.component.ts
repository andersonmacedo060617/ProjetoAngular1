import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';

  /**
   * Aqui crio uma propriedade que vai ser utilizada para verificar se o banner vai ser exibido
   * Se você olhar no componente existe uma diretiva *ngIf na chamada do component banner que só é renderizado
   * quando o valor é true. No caso estou setando o valor padrão para true.
   */
  public exibiBanner:boolean = true
  
  /**
   * Esse metodo vai alterar a propriedade para esconder o banner.
   * Se você olhar no template o metodo é invocado quando o headercomponnet emitir o valor
   * No o metodo é chamado e regatado o valor que veio do header
   */
  public ctrlBanner(esconder: boolean):void{
    console.log(esconder)
    this.exibiBanner = !esconder
  }
}
