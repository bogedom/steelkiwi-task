import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserComponent } from './components/user/user.component';
import { MaterialModule } from '../../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiGithubService } from './services/api-github.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { CardViewComponent } from './components/search/card-view/card-view.component';
import { TabsComponent } from './components/search/tabs/tabs.component';
import { GridViewComponent } from './components/search/grid-view/grid-view.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    UsersComponent,
    SearchComponent,
    UserComponent,
    TabsComponent,
    GridViewComponent,
    CardViewComponent
  ],
  providers: [ApiGithubService]
})
export class UsersModule { }
