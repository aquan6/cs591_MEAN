import {Component, OnInit, Input, enableProdMode} from '@angular/core';
import { Profile } from '../profile';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})


export class ProfileDetailComponent implements OnInit {
  @Input() profile: Profile;
  @Input() httpClient: HttpClient;

  getNews(city: string): void {
    city = city.trim();
    if ( !city) { return; }

    // todo: put this key in config file
    const url = 'http://localhost:8008/';
    console.log(url);
    console.log(this.httpClient.get(url));
  }

  constructor() { }

  ngOnInit() {
  }

}
