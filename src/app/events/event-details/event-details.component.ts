import { Component, Inject } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { EventService } from "../shared/event.service";
import { TOASTR_TOKEN } from "../../common/toastr.service";
import { IEvent, ISession } from "../shared/index";

@Component({
  templateUrl: "./event-details.component.html",
  styles: [
    `
      .container {
        padding: 0 20px;
      }
      .event-image {
        height: 100px;
      }
      a {
        cursor: pointer;
      }
      .btn {
        margin: 10px;
      }
    `
  ]
})
export class EventDetailsComponent {
  event: IEvent;
  addMode: boolean = false;
  filterBy: string = "all";
  sortBy: string = "votes";

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    @Inject(TOASTR_TOKEN) private toastr: any
  ) {}

  ngOnInit() {
    // This was why the modal links weren't updating!
    // We need to navigate to the same component, but with a different id
    //
    // const id: number = Number(this.route.snapshot.params["id"]);
    // this.event = this.eventService.getEvent(id);
    this.route.params.forEach((params: Params) => {
      const id: number = Number(params["id"]);
      this.event = this.eventService.getEvent(id);
      this.addMode = false;
    });
  }

  handleImageClick() {
    this.toastr.success(this.event.name);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(
      null,
      this.event.sessions.map(s => s.id)
    );
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
