import { Component, OnInit, Inject, forwardRef } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "./auth.service";

@Component({
  templateUrl: "./profile.component.html"
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(
    @Inject(forwardRef(() => AuthService)) private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    let firstName = new FormControl(this.authService.currentUser.firstName);
    let lastName = new FormControl(this.authService.currentUser.lastName);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    });
  }

  cancel() {
    this.router.navigate(["events"]);
  }

  saveProfile(formValues) {
    this.authService.updateCurrentUser(
      formValues.firstName,
      formValues.lastName
    );
    this.router.navigate(["events"]);
  }
}
