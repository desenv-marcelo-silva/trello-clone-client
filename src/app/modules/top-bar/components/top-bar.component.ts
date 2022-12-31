import { Router } from '@angular/router';
import { Component } from "@angular/core";
import { AuthService } from "src/app/auth/services/auth.service";

@Component({
    selector: 'top-bar',
    templateUrl: './top-bar.component.html'
})
export class TopBarComponent {
    constructor(
        private authService: AuthService,
        private router: Router) {}

    logout(): void {
        this.authService.logout();
        this.router.navigateByUrl("/");
    }
}