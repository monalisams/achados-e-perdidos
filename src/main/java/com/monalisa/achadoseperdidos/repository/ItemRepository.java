package com.monalisa.achadoseperdidos.repository;

import com.monalisa.achadoseperdidos.entity.Item;
import com.monalisa.achadoseperdidos.enums.ItemStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ItemRepository extends JpaRepository<Item, Long> {

    @Query("select i from Item i where i.name like CONCAT('%', :name, '%') or i.description like CONCAT('%', :description, '%') or i.status = :status ")
    public List<Item> findAllBy(@Param("name") String name, @Param("description") String description, @Param("status") ItemStatus status);
}
