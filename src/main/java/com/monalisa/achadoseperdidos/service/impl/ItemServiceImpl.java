package com.monalisa.achadoseperdidos.service.impl;

import com.monalisa.achadoseperdidos.dto.ItemDTO;
import com.monalisa.achadoseperdidos.entity.Item;
import com.monalisa.achadoseperdidos.enums.ItemStatus;
import com.monalisa.achadoseperdidos.repository.ItemRepository;
import com.monalisa.achadoseperdidos.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService {

    public final ItemRepository itemRepository;

    @Override
    @Transactional
    public Item saveItem(ItemDTO dto) {
        Item item = map(dto);
        item.setStatus(ItemStatus.LOST);
        itemRepository.save(item);
        return item;

    }

    @Override
    public Optional<Item> deleteItem(Long id) {
        return itemRepository
                .findById(id)
                .map(item -> {
                    itemRepository.delete(item);
                    return item;
                });
    }

    @Override
    @Transactional
    public Optional<Item> updateItemStatus(Long id, ItemStatus itemStatus) {
        return itemRepository
                .findById(id)
                .map(item -> {
                    item.setStatus(itemStatus);
                    return itemRepository.save(item);
                });
    }

    @Override
    public Optional<Item> updateItem(Long id, ItemDTO itemDTO) {
        return itemRepository
                .findById(id)
                .map(item -> {
                    itemRepository.save(map(item, itemDTO));
                    return item;
                });
    }

    @Override
    public Optional<Item> getItem(Long id) {
        return itemRepository.findById(id);
    }

    @Override
    public List<Item> getItems() {
        return itemRepository.findAll();
    }


    @Override
    public List<Item> getItems(ItemDTO filter) {
        return itemRepository.findAllBy(filter.getName(), filter.getDescription(), filter.getStatus());
    }

    public Item map(ItemDTO dto){
        return map(new Item(), dto);
    }

    public Item map(Item item, ItemDTO dto){
        item.setName(dto.getName());
        item.setDescription(dto.getDescription());
        item.setStatus(dto.getStatus());
        item.setDateItem(dto.getDateItem());
        item.setLatitude(dto.getLatitude());
        item.setLongitude(dto.getLongitude());
        item.setNameFound(dto.getNameFound());
        item.setPhone(dto.getPhone());
        item.setEmail(dto.getEmail());
        return item;
    }


}
