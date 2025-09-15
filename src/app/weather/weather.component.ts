import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
})
export class WeatherComponent {
  city: string = '';
  weather$?: Observable<any>;
  errorMsg: string = '';

  private apiKey = 'your_openweathermap_api_key'; // register and get free key

  constructor(private http: HttpClient) {}

  getWeather() {
    if (!this.city) return;
    this.errorMsg = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`;

    this.weather$ = this.http.get(url).pipe(
      catchError((error) => {
        this.errorMsg = 'City not found or API error';
        return of(null);
      })
    );
  }
}
