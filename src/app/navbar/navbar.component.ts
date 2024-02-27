import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  nombrePromotora: string = "MIRIAM APELLIDO1 APELLIDO2";
  mensajeWhatsApp = encodeURIComponent('*Hola,* estoy interesado en obtener información totalmente personalizada gratis para viajar y trabajar en InCruises.');
  enlaceWhatsApp = `https://wa.me/+34693746959?text=${this.mensajeWhatsApp}`;
  enlaceInstagram = `https://www.instagram.com/`;
  enlaceTiktok = `https://www.tiktok.com/`;
  ngOnInit() {
    this.items = [
      {
        label: 'EXPERIENCIAS',
        icon: 'pi pi-camera',
        command: (event) => {
          const section = document.getElementById('section-experience');
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }
      },
      {
        label: 'GALERÍA',
        icon: 'pi pi-image',
      },
      {
        label: 'CONTACTO',
        icon: 'pi pi-phone',
        command: () => {
          window.open(this.enlaceWhatsApp, '_blank');
        }
      }
    ];
  }

}
