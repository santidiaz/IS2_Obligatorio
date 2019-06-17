/*
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/
package com.mytree.business.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.junit.Test;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotSame;

public final class UserTest {
    
    public UserTest() {
    }
    
    @Test
    public void testIdPropertyCase() {
        int expected = 1;
        User instance = new User();
        instance.setId(expected);
        assertEquals(expected, instance.getId());
    }
    
    @Test
    public void testUsernamePropertyCase() {
        String expected = "expected";
        User instance = new User();
        instance.setUsername(expected);
        assertEquals(expected, instance.getUsername());
    }
    
    @Test
    public void testFirstNamePropertyCase() {
        String expected = "expected";
        User instance = new User();
        instance.setFirstName(expected);
        assertEquals(expected, instance.getFirstName());
    }
    
    @Test
    public void testSecondNamePropertyCase() {
        String expected = "expected";
        User instance = new User();
        instance.setSecondName(expected);
        assertEquals(expected, instance.getSecondName());
    }
    
    @Test
    public void testFirstSurnamePropertyCase() {
        String expected = "expected";
        User instance = new User();
        instance.setFirstSurname(expected);
        assertEquals(expected, instance.getFirstSurname());
    }
    
    @Test
    public void testSecondSurnamePropertyCase() {
        String expected = "expected";
        User instance = new User();
        instance.setSecondSurname(expected);
        assertEquals(expected, instance.getSecondSurname());
    }
    
    @Test
    public void testFirstCountryPropertyCase() {
        String expected = "Uruguay";
        User instance = new User();
        instance.setFirstCountry(expected);
        assertEquals(expected, instance.getFirstCountry());
    }
    
    @Test
    public void testSecondCountryPropertyCase() {
        String expected = "Brasil";
        User instance = new User();
        instance.setSecondCountry(expected);
        assertEquals(expected, instance.getSecondCountry());
    }
    
    @Test
    public void testPicturePathPropertyCase() {
        String expected = "expected";
        User instance = new User();
        instance.setPicturePath(expected);
        assertEquals(expected, instance.getPicturePath());
    }
    
    @Test
    public void testBirthdayPropertyCase() {
        Date expected = new Date();
        User instance = new User();
        instance.setBirthday(expected);
        assertEquals(expected, instance.getBirthday());
        assertNotSame(expected, instance.getBirthday());
    }
    
    @Test
    public void testDeathdayPropertyCase() {
        Date expected = new Date();
        User instance = new User();
        instance.setDeathday(expected);
        assertEquals(expected, instance.getDeathday());
        assertNotSame(expected, instance.getDeathday());
    }
    
    @Test
    public void testGetAgeCase() {
        int expectedAge = 28;
        User instance = new User();
        instance.setBirthday(new Date(1991, 5, 20));

        assertEquals(expectedAge, instance.getAge());
    }
    
    @Test
    public void testGetAgeForDeathPersonCase() {
        int expectedAge = 73;
        User instance = new User();
        instance.setBirthday(new Date(1937, 7, 15));
        instance.setDeathday(new Date(2010, 7, 15));

        assertEquals(expectedAge, instance.getAge());
    }
    
    @Test
    public void testSpousesPropertyCase() {
        List<UserRelationship> expected = new ArrayList<>();
        User instance = new User();
        instance.setSpouses(expected);
        assertEquals(expected, instance.getSpouses());
    }
    
    @Test
    public void testParentsPropertyCase() {
        List<UserRelationship> expected = new ArrayList<>();
        User instance = new User();
        instance.setParents(expected);
        assertEquals(expected, instance.getParents());
    }
    
    @Test
    public void testChildenPropertyCase() {
        List<UserRelationship> expected = new ArrayList<>();
        User instance = new User();
        instance.setChildren(expected);
        assertEquals(expected, instance.getChildren());
    }
    
    @Test
    public void testGetFullNameCase() {
        String fakeFirstName = "fakeFirstName";
        String fakeFirstSurname = "fakeFirstSurname";
        String expectedFullName = fakeFirstName + " " + fakeFirstSurname;
        User instance = new User();
        instance.setFirstName(fakeFirstName);
        instance.setFirstSurname(fakeFirstSurname);
        assertEquals(expectedFullName, instance.getFullName());
    }
    
    @Test
    public void testGetFullNameOnlyUsernameCase() {
        String expected = "expected";
        User instance = new User();
        instance.setUsername(expected);
        assertEquals(expected, instance.getFullName());
    }
    
    @Test
    public void testToStringCase() {
        String fakeFirstName = "fakeFirstName";
        String fakeFirstSurname = "fakeFirstSurname";
        String fakeSecondSurname = "fakeSecondSurname";
        String expectedToString = fakeFirstSurname + " "
                + fakeSecondSurname + ", " + fakeFirstName;
        User instance = new User();
        instance.setFirstName(fakeFirstName);
        instance.setFirstSurname(fakeFirstSurname);
        instance.setSecondSurname(fakeSecondSurname);
        assertEquals(expectedToString, instance.toString());
    }
    
    @Test
    public void testGetToStringOnlyUsernameCase() {
        String expected = "expected";
        User instance = new User();
        instance.setUsername(expected);
        assertEquals(expected, instance.toString());
    }
    
    @Test
    public void testEqualsSuccessCase() {
        User other = new User();
        other.setId(2);
        User instance = new User();
        instance.setId(2);
        testEquals(instance, other, true);
    }
    
    @Test
    public void testEqualsNullCase() {
        Object other = null;
        User instance = new User();
        testEquals(instance, other, false);
    }
    
    @Test
    public void testEqualsDiferentsTypesCase() {
        Object other = new Object();
        User instance = new User();
        testEquals(instance, other, false);
    }
    
    @Test
    public void testEqualsDiferentsIdsCase() {
        User other = new User();
        other.setId(1);
        User instance = new User();
        instance.setId(2);
        testEquals(instance, other, false);
    }
    
    // Private
    private void testEquals(final User instance,
            final Object other, final boolean expResult) {
        boolean result = instance.equals(other);
        assertEquals(expResult, result);
    }
}
