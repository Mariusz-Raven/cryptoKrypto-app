package com.example.cryptokrypto;

import java.util.Optional;

public class OptionalExample {

    public static void main(String[] args) {
        System.out.println("Number of letters first example: " + (getNick() != null ? getNick().length() : -1));
//        if (getNickOptional().isPresent()) {
//           getNickOptional().get();
//        }
        getNickOptional()
                .map(s -> s.length())
                .ifPresent(integer -> System.out.println("Number of letters: " + integer));
    }
    static String getNick() {
        return null;
    }
    static Optional<String> getNickOptional() {
        return Optional.empty();
    }
    //
    static String getNick2() {
        return null;
    }
}
