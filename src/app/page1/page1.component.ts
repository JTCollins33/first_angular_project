import { Component, inject, signal } from '@angular/core';
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

  searchUsersNormal="";
  searchUsersNg="";
  searchUsers=signal('');

  addNewUserFlag=false;

  runPrint(){
    console.log("page 1")
  }

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
    this.ngOnInit();
  }

  toggleAddNewUserFlag(){
    this.addNewUserFlag = !this.addNewUserFlag;
  }

}
