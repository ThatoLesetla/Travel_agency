import { ClientService } from './../../services/client.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PackageService } from '../../services/package.service';
import { Component, OnInit } from '@angular/core';
import { Package } from '../../models/package';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  packages: Package[] = [];

  constructor(
    private packageService: PackageService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.packageService.findAll().subscribe(data => {
      this.packages = data;
    })
  }

  login() {
    const dialogRef = this.dialog.open(HomeLoginComponent, {
      width: '500px'
    })
  }

  register() {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '500px'
    })
  }
  
  book() {
    const dialogRef = this.dialog.open(BookingComponent, {
      width: '500px'
    })
  }

}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html'
})
export class BookingComponent {

  constructor(
    public dialogRef: MatDialogRef<BookingComponent>
  ) {}

  bookingForm = new FormGroup({
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    adults: new FormControl('', Validators.required),
    children: new FormControl('', Validators.required),
    rooms: new FormControl('', Validators.required)
  });

  onSubmit() {
    
  }

  get children() {
    return this.bookingForm.get('children');
  }

  get adults() {
    return this.bookingForm.get('adults');
  }
  get startDate() {
    return this.bookingForm.get('startDate');
  }

  get endDate() {
    return this.bookingForm.get('endDate');
  }
}

@Component({
  selector: 'app-booking',
  templateUrl: './login.component.html'
})
export class HomeLoginComponent {

  isLogin = false;
  
  constructor(
    public dialogRef: MatDialogRef<BookingComponent>,
    private router: Router,
    private clientService: ClientService
  ) {}

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    this.clientService.authenticateUser(this.loginForm.value).subscribe(data => {
      
      if (data == null) {
        this.isLogin = true;
      } else {
        
        if (data.userType == 'admin') {
          this.router.navigate(['/dashboard']);
        } 
        this.dialogRef.close();
      }
    })
  }
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  
  constructor(
    public dialogRef: MatDialogRef<BookingComponent>,
    private router: Router,
    private clientService: ClientService
  ) {}

  clientProfile = new FormGroup({
    'name': new FormControl('', [Validators.required,  Validators.pattern('^$|^[A-Za-z0-9]+')]),
    'surname': new FormControl('', [Validators.required,  Validators.pattern('^$|^[A-Za-z0-9]+')]),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'phone': new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
    'address': new FormControl('', Validators.required),
    'city': new FormControl('', Validators.required),
    'postalCode': new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)])
  });

  get name() {
    return this.clientProfile.get('name');
  }

  get surname() {
    return this.clientProfile.get('surname');
  }

  get email() {
    return this.clientProfile.get('email');
  }

  get phone() {
    return this.clientProfile.get('phone');
  }

  get address() {
    return this.clientProfile.get('address');
  }

  get city() {
    return this.clientProfile.get('city');
  }

  get postalCode() {
    return this.clientProfile.get('postalCode');
  }
  onSubmit() {
    this.clientService.create(this.clientProfile.value).subscribe(data => {
      alert('Registration successful');
      localStorage.setItem('user', this.clientProfile.value);
      this.dialogRef.close();
    });
  }
}

