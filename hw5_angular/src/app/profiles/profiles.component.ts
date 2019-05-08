import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { PROFILES } from '../mock-profiles';
import { ProfileService } from '../profile.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  profiles: Profile[];
  selectedProfile: Profile;

  onSelect(profile: Profile): void {
    this.selectedProfile = profile;
  }

  getProfiles(): void {
    this.profiles = this.profileService.getProfiles();
    console.log('getting Profile');
  }

  add(name: string, city: string): void {
    name = name.trim();
    city = city.trim();
    if (!name || !city) { return; }
    const newProfile = new Profile(name, city);
    this.profiles.push(newProfile);
  }

  constructor(private profileService: ProfileService) { }


  ngOnInit() {
  // this is where initialization logic goes
    this.getProfiles();
  }



}
