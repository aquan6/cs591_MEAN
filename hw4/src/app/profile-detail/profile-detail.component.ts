import {Component, OnInit, Input, enableProdMode} from '@angular/core';
import { Profile } from '../profile';
import {HttpClient, HttpEvent} from '@angular/common/http';




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
    const url = 'https://newsapi.org/v2/everything?q=' + city + '&apiKey=' + '70edd79e9171414db7e92ceef59dab1b';

    console.log(url);
    const articles = this.httpClient.get(url);
    console.log(articles);


  }

  constructor() { }

  ngOnInit() {
  }

}
