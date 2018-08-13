import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const API_URL = 'https://api.github.com';

@Injectable({
  providedIn: 'root'
})
export class ApiGithubService {

  constructor(
    private http: HttpClient
  ) { }

  searchUsers(query: string, per_page?: number) {
    return this.http.get(API_URL + '/search/users', {
      params: {
        per_page: per_page ? per_page + '' : '10',
        q: query
      }
    });
  }

  getUser(username: string): Observable<User> {
    return this.http.get<User>(API_URL + '/users/' + username);
  }
}
