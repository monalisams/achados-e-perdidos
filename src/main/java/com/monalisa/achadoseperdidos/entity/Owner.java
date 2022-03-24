package com.monalisa.achadoseperdidos.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.br.CPF;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="owner")
public class Owner {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", length = 255)
    private String name;

    @Column(name = "cpf", length = 11)
    @CPF
    private String cpf;

    @Column(name = "birth_date")
    private Date birth_date;

    @Column(name = "phone", length = 11)
    private String phone;

    @Column(name = "email", length = 255)
    private String email;

    @Column(name = "identification_data")
    private LocalDateTime identification_data;

}
