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

    @Query("select i from Item i where (:search is null or i.name like CONCAT('%', :search, '%') or i.description like CONCAT('%', :search, '%'))  and (:status is null or i.status = :status) ")
    Page<Item> findAllBy(@Param("search") String search,  @Param("status") ItemStatus status, Pageable pageable);
}
