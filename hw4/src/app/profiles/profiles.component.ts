import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { PROFILES } from '../mock-profiles';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  profile: Profile = {
    name: 'Andy Quan',
    city: 'Boston',
  };

  profiles = PROFILES;

  constructor() { }

  ngOnInit() {
  // this is where initialization logic goes
  }



}
