package com.monalisa.achadoseperdidos.controller;

import com.monalisa.achadoseperdidos.dto.OwnerDTO;
import com.monalisa.achadoseperdidos.entity.Owner;
import com.monalisa.achadoseperdidos.service.OwnerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/owner")
@RequiredArgsConstructor
public class OwnerController {
    private final OwnerService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Owner saveOwner(@RequestBody @Valid OwnerDTO ownerDTO) {
        return service
                .saveOwner(ownerDTO)
                .orElseThrow(() ->
                        new ResponseStatusException(HttpStatus.NOT_FOUND, "Item não encontrado."));
    }

    @DeleteMapping("/id")
    public void deleteOwner(@PathVariable Long id){
        service
        .deleteOwner(id)
        .orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Owner não encontrado."));
    }

    @PutMapping("/{id}")
    public Owner updateOwner(@PathVariable Long id, @RequestBody @Valid OwnerDTO ownerDTO){
        return service
                .updateOwner(id, ownerDTO)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Owner não encontrado."));

    }

    @GetMapping("/{id}")
    public Owner getOwner(@PathVariable Long id){
        return service
                .getOwnerId(id)
                .orElseThrow(() ->
                        new ResponseStatusException(HttpStatus.NOT_FOUND, "Owner não encontrado."));
    }

    @GetMapping("/all")
    public List<Owner> getOwners(){
        return service
                .getOwners();
    }

    @GetMapping
    public List<Owner> getOwner(OwnerDTO filter){
        return service
                .getOwners(filter);
    }
}
