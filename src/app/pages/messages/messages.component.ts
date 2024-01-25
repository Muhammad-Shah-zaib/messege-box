import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { filter as filter$, take, tap as tap$, map as map$, switchMap, mergeMap, exhaustMap } from 'rxjs';
import { imageData, image } from '../../shared/interfaces/imagesData';
import { fromFetch } from 'rxjs/fetch';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [],
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
