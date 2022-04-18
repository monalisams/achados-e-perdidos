package com.monalisa.achadoseperdidos.dto;

import com.monalisa.achadoseperdidos.enums.ItemStatus;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
public class ItemFilterDTO {

    private String name;
    private String description;
    private ItemStatus status;
    private int page;
    private int size;

}
