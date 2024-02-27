import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuEstilosService {

  constructor() { }

  seccionExperienciaNavbar(color: string, cursor: string) {
    const menuItem = document.querySelector('#divNavbarId .p-menubar .p-menubar-root-list > li:nth-child(2) .p-menuitem-link .p-menuitem-text');
    if (menuItem) {
      (menuItem as HTMLElement).style.color = color;
      (menuItem as HTMLElement).style.cursor = cursor;
    }
  }

}
