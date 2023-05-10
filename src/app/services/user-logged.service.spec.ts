import { TestBed } from '@angular/core/testing';
import { UserLoggedService } from './user-logged.service';
import { User } from '../feature_modules/students/models/user';

describe('UserLoggedService', () => {
  let service: UserLoggedService;
  let user: User = {
    id: 1,
    dni: 12345678,
    name: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    password: 'password123',
    isAdmin: false,
    courses: [1, 2, 3],
    role: 'student'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLoggedService);
    window.localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should log in a user', () => {
    service.logIn(user);
    expect(JSON.parse(window.localStorage['loggedUser'])).toEqual(user);
  });

  it('should log out a user', () => {
    service.logIn(user);
    service.logOut();
    expect(window.localStorage['loggedUser']).toBeUndefined();
  });

  it('should get the logged in user', () => {
    window.localStorage.setItem('loggedUser', JSON.stringify(user));
    expect(service.getUser()).toEqual(user);
  });
});
