import { Injectable } from '@angular/core';
import { User } from '../model/user.type';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  getUsers() {
    return [
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
      }
    ]
  }
}
