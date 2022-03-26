package com.monalisa.achadoseperdidos.service.impl;

import com.monalisa.achadoseperdidos.dto.OwnerDTO;
import com.monalisa.achadoseperdidos.entity.Owner;
import com.monalisa.achadoseperdidos.repository.OwnerRepository;
import com.monalisa.achadoseperdidos.service.OwnerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OwnerServiceImpl implements OwnerService {

    public final OwnerRepository ownerRepository;

    @Override
    @Transactional
    public Owner saveOwner(OwnerDTO dto) {
        Owner owner = map(dto);
        ownerRepository.save(owner);
        return owner;
    }

    @Override
    public Optional<Owner> deleteOwner(Long id) {
        return ownerRepository
                .findById(id)
                .map(owner -> {
                    ownerRepository.delete(owner);
                    return owner;
                });
    }

    @Override
    @Transactional
    public Optional<Owner> updateOwner(Long id, OwnerDTO dto) {
        return ownerRepository
                .findById(id)
                .map( owner -> {
                     ownerRepository.save(map(owner, dto));
                     return owner;
        });
    }

    @Override
    public Optional<Owner> getOwnerId(Long id) {
        return ownerRepository.findById(id);
    }

    @Override
    public List<Owner> getOwners() {
        return ownerRepository.findAll();
    }

    @Override
    public List<Owner> getOwners(OwnerDTO filter) {
        return ownerRepository.findAllBy(filter.getName(), filter.getCpf());
    }

    public Owner map(OwnerDTO dto){
        return map(new Owner(), dto);
    }

    public Owner map(Owner owner, OwnerDTO dto){
        owner.setName(dto.getName());
        owner.setCpf(dto.getCpf());
        owner.setBirthDate(dto.getBirthDate());
        owner.setPhone(dto.getPhone());
        owner.setEmail(dto.getEmail());
        owner.setIdentificationDate(dto.getIdentificationDate());
        return owner;
    }
}
