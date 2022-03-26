package com.monalisa.achadoseperdidos.service;


import com.monalisa.achadoseperdidos.dto.OwnerDTO;
import com.monalisa.achadoseperdidos.entity.Owner;

import java.util.List;
import java.util.Optional;

public interface OwnerService {
    Owner saveOwner(OwnerDTO dto);
    Optional<Owner> deleteOwner(Long id);
    Optional<Owner> getOwnerId(Long id);
    List<Owner> getOwners();
    List<Owner> getOwners(OwnerDTO filter);
    Optional<Owner> updateOwner(Long id, OwnerDTO dto);
}
