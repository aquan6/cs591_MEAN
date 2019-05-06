import { Injectable } from '@angular/core';
import { Profile } from './profile';
import { PROFILES } from './mock-profiles';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  getProfiles(): Profile[] {
    return PROFILES;
  }

  constructor() { }
}
