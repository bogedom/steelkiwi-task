import { Component, OnInit } from '@angular/core';
import { ApiGithubService } from '../../services/api-github.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User;

  constructor(
    private apiGithub: ApiGithubService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['username']) {
        this.apiGithub.getUser(params['username']).subscribe(user => {
          this.user = user;
        });
      }
    }, error => console.log(error));
  }

}
