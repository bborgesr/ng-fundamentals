import { Component, Input } from "@angular/core";

@Component({
  selector: "event-thumbnail",
  templateUrl: "./event-thumbnail.component.html",
  styles: [
    `
      .yellow {
        color: #907409 !important;
      }
      .green {
        color: #003300 !important;
      }
      .bold {
        font-weight: bold;
      }
      .thumbnail {
        min-height: 210px;
      }
      .pad-left {
        margin-left: 10px;
      }
      .well div {
        color: #bbb;
      }
    `
  ]
})
export class EventThumbnailComponent {
  @Input() event: any;

  getStartTimeClass(): any {
    const isEarlyStart = this.event && this.event.time === "8:00 am";
    return { green: isEarlyStart, bold: isEarlyStart };
  }

  getStartTimeStyle(): any {
    if (this.event && this.event.time === "8:00 am")
      return { "text-decoration": "underline", "font-size": "large" };
    return {};
  }
}
