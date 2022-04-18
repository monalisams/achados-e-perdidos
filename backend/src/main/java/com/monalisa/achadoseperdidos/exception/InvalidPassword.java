package com.monalisa.achadoseperdidos.exception;

public class InvalidPassword extends RuntimeException {

    public InvalidPassword(){
        super("Senha inválida.");
    }
}
