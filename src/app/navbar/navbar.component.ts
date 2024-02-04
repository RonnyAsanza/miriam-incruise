import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  nombrePromotora: string = "GLENDY ELIZABETH ZAMBRANO BERMEO";

  ngOnInit() {
    this.items = [
      {
        label: 'NOSOTROS',
        icon: 'pi pi-fw pi-user',
      },
      {
        label: 'CRUCEROS',
        icon: 'pi pi-directions',
      },
      {
        label: 'COLABORAN',
        icon: 'pi pi-desktop',
      },
      {
        label: 'EXPERIENCIAS',
        icon: 'pi pi-camera',
      },
      {
        label: 'CONTACTO',
        icon: 'pi pi-phone',
      }
    ];
  }

}
