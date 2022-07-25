import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  isSidebarCollapsed = false;
  screenWith = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWith = data.screenWidth;
    this.isSidebarCollapsed = data.collapsed;
  }
}

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
