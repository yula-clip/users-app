import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { SidebarService } from '../shared/item-slidebar/sidebar.service';
import { SubscriptionLike as ISubscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass'],
  providers: [UserService]
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[];
  private closeSidebarSubscription: ISubscription;

  constructor(
    private userService: UserService,
    private sidebarService: SidebarService,
    private router: Router) {
  }

  ngOnInit() {
    this.closeSidebarSubscription = this.sidebarService.closeSourceSubject$.subscribe( () => {
      this.loadUsers();
    });
    this.loadUsers();
  }

  ngOnDestroy() {
    if (this.closeSidebarSubscription) {
      this.closeSidebarSubscription.unsubscribe();
    }
  }

  private loadUsers() {
    this.userService.getUsers()
      .subscribe((data: User[]) => {
        this.users = data;
      });
  }

  deleteUser(user: User) {
    const index = this.users.indexOf(user);
    this.userService.deleteUser(user.id).subscribe(() => {
      this.users.splice(index, 1);
    });
  }

  routerAdd(path: string) {
    this.router.navigate([{ outlets: { sidebar: path } }]);
  }
}
