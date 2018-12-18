import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-row-item',
  templateUrl: './row-item.component.html',
})
export class RowItemComponent {
  @Input() user: User;
  @Output() userDeleted = new EventEmitter<User>();

  constructor(private router: Router) { }

  userDelete() {
    this.userDeleted.emit(this.user);
  }

  routerOutlet(path: string, id: number) {
    this.router.navigate([{ outlets: { sidebar: [path, id] } }]);
  }
}
