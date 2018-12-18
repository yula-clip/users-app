import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SidebarModule} from 'primeng/sidebar';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RowItemComponent } from './shared/row-item/row-item.component';
import { UserService } from './service/user.service';
import { SidebarService } from './shared/item-slidebar/sidebar.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RowItemComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [UserService, SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
