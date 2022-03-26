package com.monalisa.achadoseperdidos.service;

import com.monalisa.achadoseperdidos.dto.ItemDTO;
import com.monalisa.achadoseperdidos.entity.Item;
import com.monalisa.achadoseperdidos.enums.ItemStatus;

import java.util.List;
import java.util.Optional;

public interface ItemService {
    Item saveItem(ItemDTO dto);
    Optional<Item> deleteItem(Long id);
    Optional<Item> getItem(Long id);
    List<Item> getItems();
    List<Item> getItems(ItemDTO filter);
    Optional<Item> updateItemStatus(Long id, ItemStatus itemStatus);
    Optional<Item> updateItem(Long id, ItemDTO dto);

}