import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../../services/weather.service";
import {SpringWeatherResponse} from "../../models/weather.data";

@Component({
  selector: 'app-waether',
  templateUrl: './waether.component.html',
  styleUrls: ['./waether.component.css']
})
export class WaetherComponent implements OnInit {
  name: string = ""
  response!: Array<SpringWeatherResponse>

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.name = this.weatherService.myName()
    this.weatherService.readWeatherForecasts()
      .subscribe(value => {
        this.response = value
        console.log(`received value: ${value}`)
      })
    console.log('ngOnInit completed');
  }

}
