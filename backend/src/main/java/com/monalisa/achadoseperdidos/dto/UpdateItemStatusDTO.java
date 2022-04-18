package com.monalisa.achadoseperdidos.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

@Getter
@Setter
public class UpdateItemStatusDTO {
    @NotEmpty(message = "{field.status.mandatory}")
    private String newStatus;
}
