package com.monalisa.achadoseperdidos.repository;

import com.monalisa.achadoseperdidos.entity.Item;
import com.monalisa.achadoseperdidos.entity.Owner;
import com.monalisa.achadoseperdidos.enums.ItemStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OwnerRepository extends JpaRepository<Owner, Long> {
    @Query("select o from Owner o where o.name like CONCAT('%', :name, '%') or o.cpf like CONCAT('%', :cpf, '%')")
    public List<Owner> findAllBy(@Param("name") String name, @Param("cpf") String cpf);
}
