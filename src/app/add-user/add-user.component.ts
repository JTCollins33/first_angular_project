import { Component, inject, Input, input, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../model/user.type';


@Component({
  selector: 'app-add-user',
  imports: [FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  @Input() openModal!: WritableSignal<boolean>;
  @Input() userList!: WritableSignal<User[]>;
  userService = inject(UserServiceService);
  newUserName = "";
  newUserAge = 0;
  newUserId = 0;

  addNewUser(){
    if(this.newUserAge!==0 && this.newUserId!==0 && this.newUserName!==""){
      this.userService.addUser(this.newUserId, this.newUserName, this.newUserAge, this.userList);

      this.newUserAge=0;
      this.newUserName="";
      this.newUserId=0;
      this.openModal.set(!this.openModal());
    } else{
      window.alert("Please enter valid values for all the fields")
    }
  }

  closeAddUserModal(){
    this.openModal.set(false)
  }
}
