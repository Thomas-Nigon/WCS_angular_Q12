import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { nasaAPOD } from './nasa.model';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  http = inject(HttpClient);

  getImageOfTheDay() {
    return this.http.get<nasaAPOD>(
      'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
    );
  }
}
