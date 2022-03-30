package com.monalisa.achadoseperdidos.dto;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDTO {

    @NotEmpty(message = "{field.name.mandatory}")
    private String name;

    @NotEmpty(message = "{field.login.mandatory}")
    private String login;

    @NotEmpty(message = "{field.password.mandatory}")
    private String password;


}
