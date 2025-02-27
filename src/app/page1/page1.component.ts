import { Component, computed, inject, signal } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../model/user.type';
import { FormsModule } from '@angular/forms';
import { FilterUsersPipe } from '../pipes/filter-users.pipe';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-page1',
  imports: [FormsModule, FilterUsersPipe, AddUserComponent],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component {
  userService = inject(UserServiceService);
  userList=signal<Array<User>>([]);

  // this gets recalculated every time the userList changes
  userListLength = computed(()=>{
    return this.userList().length;
  });

  searchUsersNormal=signal("");
  searchUsersNg=signal("");
  searchUsers=signal('');

  addNewUserFlag=signal(false);

  ngOnInit(): void {
    this.userList.set(this.userService.getUsers());
  }

  normalChange(e: any){
    console.log("normal change: "+e.target.value);
  }

  nGChange(value: any){
    console.log("ng change: "+value);
  }

  deleteUser(userId: number){
    this.userService.deleteUser(userId);
  }

  toggleAddNewUserFlag(){
    this.addNewUserFlag.set(true);
  }

}
