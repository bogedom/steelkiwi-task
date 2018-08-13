import { Component, OnInit } from '@angular/core';
import { ApiGithubService } from '../../services/api-github.service';
import { User } from '../../models/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  value = '';
  users: User[];
  total_count: number;

  constructor(
    private apiGithub: ApiGithubService,
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  onSearch() {
    this.apiGithub.searchUsers(this.value).subscribe(data => {
      this.total_count = data['total_count'];
      this.users = data['items'];
      this.dataService.changeUsers(this.users);
      console.log(this.users);
    });
  }

  onClear() {
    this.value = '';
    this.users = [];
    this.dataService.changeUsers(this.users);
  }

}
