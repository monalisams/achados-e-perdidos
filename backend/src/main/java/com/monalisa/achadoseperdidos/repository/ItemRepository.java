package com.monalisa.achadoseperdidos.repository;

import com.monalisa.achadoseperdidos.entity.Item;
import com.monalisa.achadoseperdidos.enums.ItemStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ItemRepository extends JpaRepository<Item, Long> {

    @Query("select i from Item i where (:name is null or i.name like CONCAT('%', :name, '%')) and ( :description is null or i.description like CONCAT('%', :description, '%')) and (:status is null or i.status = :status) ")
    Page<Item> findAllBy(@Param("name") String name, @Param("description") String description, @Param("status") ItemStatus status, Pageable pageable);
}
