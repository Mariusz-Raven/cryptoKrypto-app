package com.example.cryptokrypto.controller;

import com.example.cryptokrypto.dto.WeatherDto;
import com.example.cryptokrypto.service.WeatherService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@Slf4j
public class WeatherController {

    private WeatherService wheaterService;

    public WeatherController(final WeatherService wheaterService) {
        this.wheaterService = wheaterService;
    }

    @GetMapping("/weathers")
    public List<WeatherDto> getAll() {
        log.info("getAll");
        return wheaterService.getAllWeathers();
    }

    @GetMapping("/weathers/{id}")
    public ResponseEntity<WeatherDto> getWeatherById(@PathVariable("id") Long id) {
        log.info("getWeatherById: [{}]", id);
        var result = wheaterService.findWeatherById(id);
        if (result.isPresent()) {
            return new ResponseEntity<>(result.get(), HttpStatus.OK);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
