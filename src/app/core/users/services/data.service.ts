import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private users_ = new Subject<User[]>();
  users = this.users_.asObservable();

  constructor() { }

  changeUsers(users: User[]) {
    this.users_.next(users);
  }

}
