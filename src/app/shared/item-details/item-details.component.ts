import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { FormGroup } from '@angular/forms';

export class ItemDetailsComponent implements OnDestroy {

  public id: number;
  protected display: boolean;
  protected user: User;
  private paramsSubscription: Subscription;
  public isFormSaved: boolean;
  protected editForm: FormGroup;
  protected isCreatingNew: boolean;

  constructor(private _route: ActivatedRoute) { }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  protected onComponentInit() {
    this.paramsSubscription = this._route.params.subscribe(params => this.id = params['id']);
  }

  protected _onSubmit() {
    this.isFormSaved = true;
  }

  protected _closeSidebar() {
    this.display = false;
  }
}
