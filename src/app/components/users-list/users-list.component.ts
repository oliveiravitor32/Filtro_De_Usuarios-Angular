import { Component, EventEmitter, Input, Output } from '@angular/core';

import { UsersList } from '../../data/users-list';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  displayedColumns = ['name', 'date', 'status'];

  @Input({ required: true }) usersList: IUser[] = [];

  @Output('userSelected') userSelectedEmmit = new EventEmitter<IUser>();

  onUserSelected(user: IUser): void {
    this.userSelectedEmmit.emit(user);
  }
}
