import { Component } from '@angular/core';
import { SidebarService } from './shared/item-slidebar/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [SidebarService]
})
export class AppComponent {
  constructor(private sidebarService: SidebarService) { }

  onDeactivate(component: any) {
    this.sidebarService.onDeactivateSidebar(component);
  }
}
