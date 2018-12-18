import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    data: { title: 'List of Users' },
  },
  {
    path: 'edit/:id',
    component: EditUserComponent,
    outlet: 'sidebar'
  },
  {
    path: 'create',
    component: EditUserComponent,
    outlet: 'sidebar'
  },
  {
    path: 'details/:id',
    component: EditUserComponent,
    outlet: 'sidebar'
  },
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/users',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
