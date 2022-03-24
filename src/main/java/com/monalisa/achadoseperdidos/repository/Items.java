package com.monalisa.achadoseperdidos.repository;

import com.monalisa.achadoseperdidos.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Items extends JpaRepository<Item, Integer> {

}
