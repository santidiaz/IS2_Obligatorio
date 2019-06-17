/*
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/
package com.mytree.business.model;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.Objects;

public final class User {
    
    private static final int HASH = 7;
    private static final int HASH_RANDOM = 83;
    
    private int id;
    private String username;
    private String firstName;
    private String secondName;
    private String firstSurname;
    private String secondSurname;
    private String picturePath;
    private String firstCountry;
    private String secondCountry;
    private Date birthday;
    private Date deathday;
    private Collection<UserRelationship> parents;
    private Collection<UserRelationship> children;
    private Collection<UserRelationship> spouses;
    
    public User() {
        this.id = -1;
        this.username = "";
        this.firstName = "";
        this.secondName = "";
        this.firstSurname = "";
        this.secondSurname = "";
        this.firstCountry = "";
        this.secondCountry = "";
        this.birthday = new Date();
        this.parents = new ArrayList<>();
        this.children = new ArrayList<>();
        this.spouses = new ArrayList<>();
    }
    
    public int getId() {
        return id;
    }
    public void setId(final int id) {
        this.id = id;
    }
    
    public String getUsername() {
        return username;
    }    
    public void setUsername(final String username) {
        this.username = username;
    }
    
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(final String firstName) {
        this.firstName = firstName;
    }
    
    public String getSecondName() {
        return secondName;
    }
    public void setSecondName(final String secondName) {
        this.secondName = secondName;
    }
    
    public String getFirstSurname() {
        return firstSurname;
    }
    public void setFirstSurname(final String firstSurname) {
        this.firstSurname = firstSurname;
    }
    
    public String getSecondSurname() {
        return secondSurname;
    }
    public void setSecondSurname(final String secondSurname) {
        this.secondSurname = secondSurname;
    }
    
    public String getPicturePath() {
        return picturePath;
    }
    public void setPicturePath(final String picturePath) {
        this.picturePath = picturePath;
    }
    
    public String getFirstCountry() {
        return this.firstCountry;
    }
    public void setFirstCountry(final String country) {
        this.firstCountry = country;
    }
    
    public String getSecondCountry() {
        return this.secondCountry;
    }
    public void setSecondCountry(final String country) {
        this.secondCountry = country;
    }
    
    public Date getBirthday() {
        return (Date) birthday.clone();
    }
    public void setBirthday(final Date birthday) {
        this.birthday = (Date) birthday.clone();
    }

    public Date getDeathday() {
        if (this.deathday != null) {
            return (Date) deathday.clone();
        } else {
            return null;
        }        
    }
    public void setDeathday(final Date deathday) {
        this.deathday = (Date) deathday.clone();
    }

    public int getAge() {
        int age = 0;
        if(this.birthday != null) {
            if(this.deathday == null) {
                 age = calculateAge(new Date());
            } else {
                age = calculateAge(this.deathday);
            }
        }
        return age;
    }
    
    private int calculateAge(Date currentDate) {
        return Math.abs(currentDate.getYear() - birthday.getYear());
    }
    
    public Collection<UserRelationship> getParents() {
        return parents;
    }
    public void setParents(final Collection<UserRelationship> parents) {
        this.parents = parents;
    }
    
    public Collection<UserRelationship> getChildren() {
        return children;
    }
    public void setChildren(final Collection<UserRelationship> children) {
        this.children = children;
    }
    
    public Collection<UserRelationship> getSpouses() {
        return spouses;
    }
    public void setSpouses(final Collection<UserRelationship> spouses) {
        this.spouses = spouses;
    }
    
    public String getFullName() {
        String result = firstName + " " + firstSurname;
        if (result.trim().isEmpty()) {
            result = username;
        }
        return result;
    }
    
    @Override
    public String toString() {
        StringBuilder resultBuilder = new StringBuilder();
        if (!firstSurname.trim().isEmpty()) {
            resultBuilder.append(firstSurname);
        }
        if (!secondSurname.trim().isEmpty()) {
            resultBuilder.append(" ");
            resultBuilder.append(secondSurname);
        }
        if (!firstName.trim().isEmpty()) {
            resultBuilder.append(", ");
            resultBuilder.append(firstName);
        }
        
        String result = resultBuilder.toString();
        if (result.isEmpty()) {
            result = username;
        }
        return result;
    }
    
    @Override
    public boolean equals(final Object other) {
        if (other == null || !(other instanceof User)) {
            return false;
        }
        
        User otherUser = (User) other;
        return id == otherUser.getId();
    }
    
    @Override
    public int hashCode() {
        int hash = HASH;
        hash = HASH_RANDOM * hash + this.id;
        hash = HASH_RANDOM * hash + Objects.hashCode(this.username);
        return hash;
    }
    
}
