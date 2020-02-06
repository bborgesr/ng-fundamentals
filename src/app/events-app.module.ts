import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventService,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from "./events/index";
import { EventsAppComponent } from "./events-app.component";
import { NavBarComponent } from "./nav/navbar.component";
import { Error404Component } from "./errors/404.component";
import { CollapsibleWellComponent } from "./common/collapsible-well.component";
import { SimpleModalComponent } from "./common/simple-modal.component";

import { AuthService } from "./user/auth.service";
import { TOASTR_TOKEN } from "./common/toastr.service";
import { JQ_TOKEN } from "./common/jQuery.service";
import { ModalTriggerDirective } from "./common/modal-trigger.directive";

import { appRoutes } from "./routes";

import toastr from "toastr";
import jQuery from "jquery";

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    EventRouteActivator,
    {
      provide: "canDeactivateCreateEvent",
      useValue: checkDirtyState
    },
    EventListResolver,
    AuthService,
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}
export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      "You have not saved this event. Do you really want to cancel"
    );
  }
  return true;
}
