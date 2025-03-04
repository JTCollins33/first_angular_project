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
  userList=signal<Array<User>>([], {equal: this.areUserArraysEqual});

  areUserArraysEqual(arr1: User[], arr2: User[]){
    if(arr1.length !== arr2.length){
      return false
    }
    for(let i = 0; i < arr1.length; i++){
      if(arr1[i].id !== arr2[i].id || arr1[i].age !== arr2[i].age || arr1[i].name !== arr2[i].name){
        return false
      }
    }
    return true;
  }

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
    this.userService.deleteUser(userId, this.userList)
  }

  toggleAddNewUserFlag(){
    this.addNewUserFlag.set(true);
  }
}
