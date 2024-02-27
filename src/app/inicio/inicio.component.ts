import { Component, OnInit } from '@angular/core';
import { MenuEstilosService } from '../service/menu-estilos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  constructor(private menuEstilosService: MenuEstilosService) { }

  ngOnInit() {
    this.menuEstilosService.seccionExperienciaNavbar('#495057', 'pointer');
  }
}
