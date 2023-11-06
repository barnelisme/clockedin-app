import { Pipe, PipeTransform } from '@angular/core';
import { user } from './add-user-layout/user';

@Pipe({
  name: 'filterUsers'
})
export class FilterUsersPipe implements PipeTransform {

  transform(users: user[], searchInput: string): user[] {
    if (!searchInput || searchInput === '') {
      return users;
    }

    const lowercaseInput = searchInput.toLowerCase();

    return users.filter((user) => {
      return user.surname.toLowerCase().includes(lowercaseInput) ||
        user.id.toLowerCase().includes(lowercaseInput) ||
        user.position.toLowerCase().includes(lowercaseInput);
    });
  }
}
