package com.monalisa.achadoseperdidos.entity;

import lombok.*;
import org.hibernate.validator.constraints.br.CPF;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import java.time.LocalDate;


@Getter
@Setter
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
    private String cpf;

    @Column(name = "birth_date")
    private LocalDate birthDate;

    @Column(name = "phone", length = 11)

    private String phone;

    @Column(name = "email", length = 255)
    private String email;

    @Column(name = "identification_date")
    private LocalDate identificationDate;

    @Override
    public String toString() {
        return "Owner{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", cpf='" + cpf + '\'' +
                ", birthDate=" + birthDate +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", identification_data=" + identificationDate +
                '}';
    }
}
