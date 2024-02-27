import { Component, OnInit } from '@angular/core';
import { MenuEstilosService } from '../service/menu-estilos.service';
@Component({
  selector: 'app-galeria-all',
  templateUrl: './galeria-all.component.html',
  styleUrls: ['./galeria-all.component.css']
})
export class GaleriaAllComponent implements OnInit {

  constructor(private menuEstilosService: MenuEstilosService) { }

  ngOnInit() {
    this.menuEstilosService.seccionExperienciaNavbar('gray', 'default');
  }
}
