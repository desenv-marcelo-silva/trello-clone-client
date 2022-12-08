import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}
  
  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe({
      next: (user) => {
        console.info(user)
      },
      error: (err) => {
        console.error(err);
        this.authService.setCurrentUser(null);
      }
  });
  }
}