package com.monalisa.achadoseperdidos.entity;

import com.monalisa.achadoseperdidos.enums.ItemStatus;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "item")
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
    private LocalDate dateItem;

    @Column(name = "latitude", length = 25)
    private String latitude;

    @Column(name = "longitude", length = 25)
    private String longitude;

    @Column(name = "name_found", length = 100)
    private String nameFound;

    @Column(name = "phone", length = 11)
    private String phone;

    @Column(name = "email", length = 255)
    private String email;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private Owner owner;

    //gerado na mão p/ evitar que propriedades mapeadas disparem requisições do BD
    @Override
    public String toString() {
        return "Item{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", status=" + status +
                ", date_item=" + dateItem +
                ", latitude='" + latitude + '\'' +
                ", longitude='" + longitude + '\'' +
                ", name_found='" + nameFound + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
