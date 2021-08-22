package com.example.cryptokrypto.controller;

import com.example.cryptokrypto.service.WeatherService;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WeatherController {

    private WeatherService wheaterService;

    public WeatherController(final WeatherService wheaterService) {
        this.wheaterService = wheaterService;
    }
}
