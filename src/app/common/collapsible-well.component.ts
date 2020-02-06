import { Component, Input } from "@angular/core";

@Component({
  selector: "collapsible-well",
  template: `
    <div (click)="toggleContent()" class="well pointable">
      <h4><ng-content select=".title[well-title]"></ng-content></h4>
      <ng-content select=".body[well-body]" *ngIf="visible"></ng-content>
    </div>
  `
})
export class CollapsibleWellComponent {
  visible: boolean = true;

  toggleContent() {
    this.visible = !this.visible;
  }
}
