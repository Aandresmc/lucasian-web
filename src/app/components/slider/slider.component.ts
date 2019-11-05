import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  users: Array<Object>

  constructor(private ClientsService: ClientsService) { }

  async ngOnInit() {
    
    this.users = <Array<Object>>await this.ClientsService.getUsers()
      .catch(error => console.log('hubo un error obteniendo los clientes', error));

  }

}
