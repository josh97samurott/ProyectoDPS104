package com.example.backendcimo;

import javax.persistence.*;

@Entity
@Table(name = "user")
public class logIn {
    
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String username;
    @Column
    private String password;
    @Column
    private String name;
    @Column
    private String lastname;
    @Column
    private int role;
    @Column
    private String email;
    @Column
    private String phone;
    @Column
    private String nationality;
    @Column
    private String dui_or_passport;
    @Column
    private String creation_date;
    @Column
    private String confirm_email;

    public int getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getName() {
        return name;
    }

    public String getLastname() {
        return lastname;
    }

    public int getRole() {
        return role;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }

    public String getNationality() {
        return nationality;
    }

    public String getDui_or_passport() {
        return dui_or_passport;
    }

    public String getCreation_date() {
        return creation_date;
    }

    public String getConfirm_email() {
        return confirm_email;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public void setRole(int role) {
        this.role = role;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public void setDui_or_passport(String dui_or_passport) {
        this.dui_or_passport = dui_or_passport;
    }

    public void setCreation_date(String creation_date) {
        this.creation_date = creation_date;
    }

    public void setConfirm_email(String confirm_email) {
        this.confirm_email = confirm_email;
    }
    
    
    
}
