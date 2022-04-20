package com.monalisa.achadoseperdidos.controller;

import com.monalisa.achadoseperdidos.dto.TokenDto;
import com.monalisa.achadoseperdidos.dto.UserDTO;
import com.monalisa.achadoseperdidos.dto.UserLoginDTO;
import com.monalisa.achadoseperdidos.entity.User;
import com.monalisa.achadoseperdidos.exception.InvalidPassword;
import com.monalisa.achadoseperdidos.security.jwt.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import com.monalisa.achadoseperdidos.service.impl.UserServiceImpl;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;

@RestController
@RequestMapping("api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserServiceImpl userServiceImpl;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public String saveUser(@RequestBody @Valid UserDTO user){
        String password = passwordEncoder.encode(user.getPassword());
        user.setPassword(password);
        userServiceImpl.saveUser(user);
        return user.getLogin();
    }

    @PostMapping("auth")
    public TokenDto authenticate(@RequestBody UserLoginDTO userLoginDTO) {
        User user = User.builder()
                    .login(userLoginDTO.getLogin())
                    .password(userLoginDTO.getPassword())
                    .build();
        userServiceImpl.authenticate(user);
        String token = jwtService.generateToken(user);
        return new TokenDto(user.getLogin(), token);
    }

}
