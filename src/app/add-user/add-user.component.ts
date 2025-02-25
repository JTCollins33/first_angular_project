import { Component, inject, Input, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-add-user',
  imports: [FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  @Input() openModal = true;
  // openModal = input(true);
  userService = inject(UserServiceService);
  newUserName = "";
  newUserAge = 0;
  newUserId = 0;

  addNewUser(){
    if(this.newUserAge!==0 && this.newUserId!==0 && this.newUserName!==""){
      this.userService.addUser(this.newUserId, this.newUserName, this.newUserAge);

      this.newUserAge=0;
      this.newUserName="";
      this.newUserId=0;
      this.openModal = !this.openModal;
    } else{
      window.alert("Please enter valid values for all the fields")
    }
  }
}
