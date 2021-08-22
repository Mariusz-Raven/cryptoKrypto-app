package com.example.cryptokrypto.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record WeatherDto(Long id,
                         @JsonProperty("Moje miasto") String myCIty,
                         @JsonProperty("temp_in_cs") Long tempInCelsius) {
}
