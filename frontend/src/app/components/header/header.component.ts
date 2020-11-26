import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { HomeLoginComponent, RegisterComponent } from 'app/views/home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
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
  
  viewBookings() {
    this.router.navigate(['/my-bookings']);
  }


}
