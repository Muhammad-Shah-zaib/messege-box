import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { imageData } from '../../shared/interfaces/imagesData';
import { FeedComponent } from '../../shared/component/feed/feed.component';
import { NavBarComponent } from '../../shared/component/nav-bar/nav-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [FeedComponent, NavBarComponent, RouterOutlet],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent implements OnInit {
  private http: HttpClient = inject(HttpClient);
  photos?: imageData;
  constructor() {
    
  }

  ngOnInit() {
  }
}
