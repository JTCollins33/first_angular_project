import { Injectable, Output } from '@angular/core';
import { User } from '../model/user.type';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userList: User[] = [
    {
      id: 1,
      name: "Joe",
      age: 40
    },
    {
      id: 2,
      name: "Tim",
      age: 41
    },
    {
      id: 3,
      name: "Bob",
      age: 42
    },
    {
      id: 4,
      name: "Sal",
      age: 43
    },
    {
      id: 5,
      name: "Jones",
      age: 42
    },
    {
      id: 6,
      name: "Pope",
      age: 42
    }
  ]

  getUsers() {
    return this.userList;
  }

  deleteUser(userId: number){
    this.userList = this.userList.filter(user => {
      return user.id !== userId
    });
    console.log(this.userList)
  }
}
