package com.example.server.Authentication;

import com.example.server.User.User;
import java.util.*;

public class Authentication {
    //======================================================================================
    // ******************************* CONTROLLER CLASS ************************************
    //======================================================================================

    public boolean verifyUser(String user, String pass){
        User verifyingUser = new User(user, pass);
        // go to db and verify password
        return pass.equals(verifyingUser.getPassword());
    }

    public void showLoginOption() {
        System.out.println("1. Sign Up | 2. Sign In");
        // soon to be replaced by front end view controller via React
    }

    public void showSignUpPage() {
        String email = new String();
        String ps = new String();

        System.out.println("Enter email: ");
        Scanner sc1 = new Scanner(System.in);
        email = sc1.nextLine();
        System.out.println("Enter password: ");
        Scanner sc2 = new Scanner(System.in);
        ps = sc2.nextLine();
    }
}
