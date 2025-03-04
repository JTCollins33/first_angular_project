import { Injectable, WritableSignal } from '@angular/core';
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

  deleteUser(userId: number, userListSignal: WritableSignal<User[]>){
    userListSignal.update(users => users.filter(user => user.id !== userId))
  }

  addUser(userId: number, userName: string, userAge: number, userListSignal: WritableSignal<User[]>){
    const newUser = {
      id: userId,
      name: userName,
      age: userAge
    }
    userListSignal.update(users => [...users, newUser])
  }
}
