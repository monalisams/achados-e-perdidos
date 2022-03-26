package com.monalisa.achadoseperdidos.dto;

import com.monalisa.achadoseperdidos.enums.ItemStatus;
import lombok.*;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
public class ItemDTO {

    private Long id;
    private String name;
    private String description;
    private ItemStatus status;
    private LocalDate dateItem;
    private String latitude;
    private String longitude;
    private String nameFound;
    private String phone;
    private String email;

}
