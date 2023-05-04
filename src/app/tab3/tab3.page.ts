import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
    });
  }

  submit() {
    const nome = this.form.get('nome').value;
    const endereco = this.form.get('endereco').value;
    const mensagem = `Olá, me chamo ${nome}, moro no endereço ${endereco}. Estou precisando de doações, poderia me ajudar?`;
    this.redirecionarWhatsappComMensagem(mensagem);
  }

  redirecionarWhatsappComMensagem(mensagem: string = 'Olá!') {
    window.open(
      `https://api.whatsapp.com/send?phone=555194904309&text=${mensagem}`,
      '_blank'
    );
  }
}
