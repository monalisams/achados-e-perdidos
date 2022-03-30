package com.monalisa.achadoseperdidos.service.impl;

import com.monalisa.achadoseperdidos.dto.UserDTO;
import com.monalisa.achadoseperdidos.entity.User;
import com.monalisa.achadoseperdidos.exception.InvalidPassword;
import com.monalisa.achadoseperdidos.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserDetailsService {

    @Autowired @Lazy
    private PasswordEncoder encoder;

    private final UserRepository userRepository;


    public UserDetails authenticate(User user){
        UserDetails userDetails = loadUserByUsername(user.getLogin());
        boolean identicalPasswords =encoder.matches(user.getPassword(), userDetails.getPassword());
        if(identicalPasswords){
            return userDetails;
        }
        throw new InvalidPassword();
    }

    @Transactional
    public User saveUser(UserDTO dto){
        User user = map(dto);
        userRepository.save(user);
        return user;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
      User user =  userRepository
              .findByLogin(username)
              .orElseThrow(() -> new UsernameNotFoundException("Usuário não existe"));

      String[] roles = new String[]{"ADMIN"};

        return org.springframework.security.core.userdetails.User.builder()
            .username(user.getLogin())
            .password(user.getPassword())
            .roles(roles)
            .build();
    }

    public User map(UserDTO dto){
        return map(new User(), dto);
    }

    public User map(User user, UserDTO dto){
        user.setName(dto.getName());
        user.setLogin(dto.getLogin());
        user.setPassword(dto.getPassword());
        return user;
    }
}
