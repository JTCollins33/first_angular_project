import { Component, inject, OnInit, signal } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../model/user.type';
import { FormsModule } from '@angular/forms';
import { FilterUsersPipe } from '../pipes/filter-users.pipe';

@Component({
  selector: 'app-page1',
  imports: [FormsModule, FilterUsersPipe],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component {
  userService = inject(UserServiceService);
  userList=signal<Array<User>>([]);

  searchUsersNormal="";
  searchUsersNg="";
  searchUsers=signal('');

  ngOnInit(): void {
    this.userList.set(this.userService.getUsers());
  }

  normalChange(e: any){
    console.log("normal change: "+e.target.value);
  }

  nGChange(value: any){
    console.log("ng change: "+value);
  }

}
