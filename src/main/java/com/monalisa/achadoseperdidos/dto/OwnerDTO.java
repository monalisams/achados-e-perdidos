package com.monalisa.achadoseperdidos.dto;

import lombok.*;
import org.hibernate.validator.constraints.br.CPF;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
public class OwnerDTO {

    @NotEmpty(message = "{field.name.mandatory}")
    private String name;

    @NotEmpty(message = "{field.cpf.mandatory}")
    @CPF(message = "{field.cpf.invalid}")
    private String cpf;

    @NotNull(message = "{field.birth.mandatory}")
    private LocalDate birthDate;

    @NotEmpty(message = "{field.phone.mandatory}")
    private String phone;

    @Email(message = "{field.email.invalid}")
    @NotEmpty(message = "{field.email.mandatory}")
    private String email;

    @NotNull(message = "{field.id.mandatory}")
    private Long itemId;
}
