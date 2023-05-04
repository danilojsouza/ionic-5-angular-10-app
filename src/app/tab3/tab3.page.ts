import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor() {}

  redirecionarWhatsappComMensagem() {
    window.open(
      'https://api.whatsapp.com/send?phone=555194904309&text=Olá vim através do seu App. Gostaria de receber doações.',
      '_blank'
    );
  }
}
