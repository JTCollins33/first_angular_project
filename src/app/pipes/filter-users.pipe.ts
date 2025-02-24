import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user.type';

@Pipe({
  name: 'filterUsers'
})
export class FilterUsersPipe implements PipeTransform {

  transform(users: User[], searchUser: string): User[] {
    if(!searchUser){
      return users;
    }
    const text = searchUser.toLocaleLowerCase();
    return users.filter(user => {
      return user.name.toLocaleLowerCase().includes(text);
    })
  }

}
