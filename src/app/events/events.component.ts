import { Component, OnInit } from '@angular/core';
import { EventsApiService } from './shared/events-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor( private eventsSvc: EventsApiService) { }

  allEvents: Observable<any>;

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.allEvents = this.eventsSvc.getAllEvents();
  }

}
