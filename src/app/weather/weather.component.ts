import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { DataTransferService } from '../data-transfer.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']

})
export class WeatherComponent {
      data: any;

  city: string = '';
  weather$?: Observable<any>;
  errorMsg: string = '';

  private apiKey = 'your_openweathermap_api_key'; 

  constructor(private http: HttpClient, private registerData: DataTransferService) {}

  ngOnInit(): void {
    this.registerData.currentData.subscribe(res => {
      this.data = res;
    });
  }

  getWeather() {
    if (!this.city) return;
    this.errorMsg = '';
    const url = `http://api.weatherapi.com/v1`;

    this.weather$ = this.http.get(url).pipe(
      catchError((error) => {
        this.errorMsg = 'City not found or API error';
        return of(null);
      })
    );
  }
}
