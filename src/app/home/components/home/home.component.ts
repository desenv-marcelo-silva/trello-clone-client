import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

import { AuthService } from "src/app/auth/services/auth.service";

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
    isLoggedInSubscription: Subscription | undefined; 

    constructor(
        private authService: AuthService,
        private router: Router) {}

    ngOnDestroy(): void {
        this.isLoggedInSubscription?.unsubscribe();
    }

    ngOnInit(): void {
        this.isLoggedInSubscription = this.authService.isLoggedIn$.subscribe((loggedIn) => {
            if (loggedIn) {
                this.router.navigateByUrl('/boards');
            }
        })
    }
}