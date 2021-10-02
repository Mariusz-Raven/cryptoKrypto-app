import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../../services/weather.service";

@Component({
  selector: 'app-waether',
  templateUrl: './waether.component.html',
  styleUrls: ['./waether.component.css']
})
export class WaetherComponent implements OnInit {
  name: string = ""

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.name = this.weatherService.myName()
  }

}
