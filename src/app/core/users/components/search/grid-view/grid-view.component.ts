import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DataService } from '../../../services/data.service';
import { Subscription } from 'rxjs';
import { User } from '../../../models/user';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit, OnDestroy {

  users: User[];
  usersSub: Subscription;
  dataSource = new MatTableDataSource([]);
  displayedColumns = ['login', 'url', 'details'];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.usersSub = this.dataService.users.subscribe(users => {
      this.users = users;
      this.dataSource = new MatTableDataSource(this.users);
    });
  }

  ngOnDestroy() {
    this.usersSub.unsubscribe();
  }

}
