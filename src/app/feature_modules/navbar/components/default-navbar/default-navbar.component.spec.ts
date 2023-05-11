import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DefaultNavbarComponent } from './default-navbar.component';
import { User } from 'src/app//feature_modules//students/models/user';
import { DatosService } from 'src/app/services/datos.service';
import { UserLoggedService } from 'src/app/services/user-logged.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('DefaultNavbarComponent', () => {
  let component: DefaultNavbarComponent;
  let fixture: ComponentFixture<DefaultNavbarComponent>;
  let datosService: DatosService;
  let userLoggedService: UserLoggedService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultNavbarComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [
        DatosService,
        UserLoggedService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultNavbarComponent);
    component = fixture.componentInstance;
    datosService = TestBed.inject(DatosService);
    userLoggedService = TestBed.inject(UserLoggedService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set loggedUser property', () => {
    const user: User = {
      "id": 81,
      "dni": 10000081,
      "name": "admin",
      "lastName": "admin",
      "email": "admin@admin",
      "password": "admin",
      "isAdmin": true,
      "role": "admin",
      "courses": [1]
    };
    spyOn(userLoggedService, 'getUser').and.returnValue(user);
    component.ngOnInit();
    expect(component.loggedUser).toEqual(user);
  });

  it('should set welcomeMessage property for admin user', () => {
    const user: User = {
      "id": 81,
      "dni": 10000081,
      "name": "admin",
      "lastName": "admin",
      "email": "admin@admin",
      "password": "admin",
      "isAdmin": true,
      "role": "admin",
      "courses": [1]
    };
    spyOn(userLoggedService, 'getUser').and.returnValue(user);
    component.ngOnInit();
    expect(component.welcomeMessage).toEqual('Bienvenido al área administrador, aqui podrás agregar, modificar, o eliminar tanto cursos, como alumnos, y visualizar sus datos!');
  });

  it('should set welcomeMessage property for regular user', () => {
    const user: User = {
      "id": 1,
      "dni": 10000001,
      "name": "Pedro",
      "lastName": "Martínez",
      "email": "pedro.martinez@example.com",
      "password": "password1",
      "isAdmin": false,
      "role": "student",
      "courses": [1]
    };
    spyOn(userLoggedService, 'getUser').and.returnValue(user);
    component.ngOnInit();
    expect(component.welcomeMessage).toEqual('¡Aqui podrás visualizar tus cursos!');
  });

  it('should set grillaSize property', () => {
    const size = 10;
    component.onGrillaSize(size);
    expect(component.grillaSize).toEqual(size);
  });
});

