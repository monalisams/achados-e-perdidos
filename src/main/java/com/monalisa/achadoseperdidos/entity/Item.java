package com.monalisa.achadoseperdidos.entity;

import com.monalisa.achadoseperdidos.enums.ItemStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "item", indexes = {
        @Index(name = "idx_item_id", columnList = "id")
})
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", length = 255)
    private String name;

    @Column(name = "description", length = 150)
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private ItemStatus status;

    @Column(name = "date_item")
    private LocalDateTime date_item;

    @Column(name = "latitude", length = 25)
    private String latitude;

    @Column(name = "longitude", length = 25)
    private String longitude;

    @Column(name = "name_found", length = 100)
    private String name_found;

    @Column(name = "phone", length = 11)
    private String phone;

    @Column(name = "email", length = 255)
    private String email;

    @ManyToOne
    @JoinColumn(name = "id")
    private Owner owner;

}
