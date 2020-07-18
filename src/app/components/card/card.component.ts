import { Component, OnInit } from '@angular/core';
import { SpeakersService, Speaker } from "./../../services/speakers/speakers.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  speakers:Speaker[] = []
  constructor(private _servicio:SpeakersService) { 
    this.speakers = _servicio.getSpeakers();
  }

  ngOnInit(): void {
  }

  goToSpeaker(idx:number){
    console.log(idx);
  }

}
