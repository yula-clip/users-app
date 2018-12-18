import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ItemDetailsComponent } from '../../shared/item-details/item-details.component';
import { User } from '../../models/user.model';

@Component({
  templateUrl: './edit-user.component.html',
})
export class EditUserComponent extends ItemDetailsComponent implements OnInit {
  public isOpenDetails: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private formBuilderService: FormBuilder) {
    super(route);
  }

  ngOnInit() {
    this.onComponentInit();
    this.isOpenDetails = this.route.snapshot.url[0].path === 'details';
    this.editForm = this.buildFormGroup(this.isOpenDetails);

    if (!this.id) {
      this.isCreatingNew = true;
      this.display = true;
      return;
    }
    this.userService.getUser(this.id)
      .subscribe(user => {
        this.user = user.data;
        this.editForm.reset(user);
        this.display = true;
      });
  }

  private buildFormGroup(disable: boolean): FormGroup {
    return this.formBuilderService.group({
      id: [null],
      first_name: [{ value: null, disabled: disable }, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(40)
      ]],
      last_name: [{ value: null, disabled: disable }, [
        Validators.required
      ]]
    });
  }

  hideSlideBar() {
    this.router.navigate([{ outlets: { sidebar: null } }]);
  }

  cancel() {
    this.display = false;
  }

  onSubmit() {
    this._onSubmit();
    const user: User = Object.assign({}, this.editForm.value);
    this.saveItem(user);
  }

  saveItem(user: User) {
    if (this.isCreatingNew) {
      this.userService.createUser(user).subscribe(() => {
        this._closeSidebar();
      });
    } else {
      this.userService.updateUser(user).subscribe(() => {
        this._closeSidebar();
      });
    }
  }

}
