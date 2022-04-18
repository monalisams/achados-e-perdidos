package com.monalisa.achadoseperdidos.controller;

import com.monalisa.achadoseperdidos.dto.ItemDTO;
import com.monalisa.achadoseperdidos.dto.ItemFilterDTO;
import com.monalisa.achadoseperdidos.dto.UpdateItemStatusDTO;
import com.monalisa.achadoseperdidos.entity.Item;
import com.monalisa.achadoseperdidos.enums.ItemStatus;
import com.monalisa.achadoseperdidos.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/item")
@RequiredArgsConstructor
public class ItemController {

    private final ItemService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Item saveItem(@RequestBody @Valid ItemDTO itemDTO) {
        return service.saveItem(itemDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteItem(@PathVariable Long id){
        service
        .deleteItem(id)
        .orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Item não encontrado."));
    }

    @PatchMapping("/{id}")
    public void updateItemStatus(@PathVariable Long id, @RequestBody @Valid UpdateItemStatusDTO updateItemStatusDTO){
        String newStatus = updateItemStatusDTO.getNewStatus();
        service.updateItemStatus(id, ItemStatus.valueOf(newStatus));
    }

    @PutMapping("/{id}")
    public Item updateItem(@PathVariable  Long id, @RequestBody @Valid ItemDTO itemDTO){
        return  service
                .updateItem(id, itemDTO)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Item não encontrado."));
    }


    @GetMapping("/{id}")
    public Item getItem(@PathVariable Long id){
        return  service
                .getItem(id)
                .orElseThrow(() ->
                        new ResponseStatusException(HttpStatus.NOT_FOUND, "Item não encontrado."));
    }

    @GetMapping("/all")
    public List<Item> getItems(){
        return service
                .getItems();
    }

    @GetMapping
    public Page<Item> getItems(ItemFilterDTO filter){
        return service
                .getItems(filter);
    }



}