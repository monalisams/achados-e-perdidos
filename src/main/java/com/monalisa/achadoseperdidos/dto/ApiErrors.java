package com.monalisa.achadoseperdidos.dto;

import lombok.Getter;

import java.util.Arrays;
import java.util.List;

public class ApiErrors {
    @Getter
    private final List<String> errors;

    public ApiErrors(List<String> errors) {
        this.errors = errors;
    }

}
