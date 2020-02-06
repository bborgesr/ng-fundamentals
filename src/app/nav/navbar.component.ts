import { Component } from "@angular/core";
import { AuthService } from "../user/auth.service";
import { ISession, EventService } from "../events";
import { Router } from "@angular/router";

@Component({
  selector: "nav-bar",
  templateUrl: "./navbar.component.html",
  styles: [
    `
      .nav.navbar-nav {
        font-size: 15px;
      }
      #searchForm {
        margin-right: 100px;
      }
      @media (max-width: 1200px) {
        #searchForm {
          display: none;
        }
      }
      li > a.active {
        color: #f97924;
      }
    `
  ]
})
export class NavBarComponent {
  searchTerm: string = "";
  foundSessions: ISession[];

  constructor(
    public auth: AuthService,
    private eventService: EventService,
    private router: Router
  ) {}

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    });
  }

  // onSessionClick(eventId) {
  //   // this.router.navigateByUrl("/events/" + eventId);
  //   this.router.navigateByUrl("/events/" + eventId);
  //   // .then(() => this.router.navigate(["/events/" + eventId]));
  //   // .then(() => this.router.navigate(["/events/" + eventId]));
  // }
}
