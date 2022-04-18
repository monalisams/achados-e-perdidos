package com.monalisa.achadoseperdidos.dto;

import com.monalisa.achadoseperdidos.enums.ItemStatus;
import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
public class ItemDTO {

    @NotEmpty(message = "{field.name.mandatory}")
    private String name;

    @NotEmpty(message = "{field.description.mandatory}")
    private String description;

    private String latitude;
    private String longitude;
    private String nameFound;
    private String phone;

    @Email(message = "{field.email.invalid}")
    private String email;

}
