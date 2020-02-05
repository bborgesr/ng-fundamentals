import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { EventService } from "../shared/event.service";
import { ToastrService } from "../../common/toastr.service";

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
    `
  ]
})
export class EventDetailsComponent {
  event: any;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    const id: number = Number(this.route.snapshot.params["id"]);
    this.event = this.eventService.getEvent(id);
  }

  handleImageClick() {
    this.toastrService.success(this.event.name);
  }
}
