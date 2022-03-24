package com.monalisa.achadoseperdidos.repository;

import com.monalisa.achadoseperdidos.entity.Owner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Owners extends JpaRepository<Owner, Integer> {
}
