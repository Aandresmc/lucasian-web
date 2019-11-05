import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  services = [
    {
      title: 'Servicio 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
      image: 'assets/imgL1.PNG',
      arrow: 'assets/flecha.PNG'
    },
    {
      title: 'Servicio 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
      image: 'assets/imgL2.PNG',
      arrow: 'assets/lapso.PNG'
    }, {
      title: 'Servicio 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
      image: 'assets/imgL3.PNG',
      arrow: 'assets/flecha.PNG'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
