/*
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/
package com.mytree.ui.controller;

import com.mytree.business.logic.BusinessLogicLocator;
import com.mytree.business.model.User;
import com.mytree.ui.model.UserModel;
import com.mytree.utils.Constants;
import java.io.File;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import javafx.fxml.FXML;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.Button;
import javafx.scene.control.DatePicker;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.stage.FileChooser;
import javafx.stage.Stage;

public final class UserEditDialogController
        extends BaseController {
    
    @FXML
    private Label picturePathLabel;
    @FXML
    private TextField usernameField;
    @FXML
    private TextField firstNameField;
    @FXML
    private TextField secondNameField;
    @FXML
    private TextField firstSurnameField;
    @FXML
    private TextField secondSurnameField;
    @FXML
    private TextField firstCountryField;
    @FXML
    private TextField secondCountryField;
    @FXML
    private DatePicker birthdayField;
    @FXML
    private DatePicker deathdayField;
    @FXML
    private Label ageLabel;
    @FXML
    private Button cancelButton;
    
    private Stage dialogStage;
    private FileChooser fileChooser;
    private UserModel userModel;
    
    public UserEditDialogController() {
    }
    
    public void setDialogStage(final Stage dialogStage) {
        this.dialogStage = dialogStage;
    }
    
    public void setUser(final UserModel userModel) {
        this.userModel = userModel;
        usernameField.setText(userModel.getUsername().getValue());
        firstNameField.setText(userModel.getFirstName().getValue());
        secondNameField.setText(userModel.getSecondName().getValue());
        firstSurnameField.setText(userModel.getFirstSurname().getValue());
        secondSurnameField.setText(userModel.getSecondSurname().getValue());
        picturePathLabel.setText(userModel.getPicturePath().getValue());
        firstCountryField.setText(userModel.getFirstCountry().getValue());
        secondCountryField.setText(userModel.getSecondCountry().getValue());
        ageLabel.setText(userModel.getAge().getValue());
        birthdayField.setValue(LocalDate.from(
                Instant.ofEpochMilli(userModel.getBirthday().getValue().getTime()).atZone(ZoneId.systemDefault())));
        
        if (userModel.getDeathday().getValue() != null) {
            deathdayField.setValue(LocalDate.from(
                    Instant.ofEpochMilli(userModel.getDeathday().getValue().getTime()).atZone(ZoneId.systemDefault())));
        }
    }
    
    public void allowCancel(final boolean allow) {
        cancelButton.setDisable(!allow);
    }
    
    @Override
    protected void onInitialize() {
        fileChooser = new FileChooser();
        FileChooser.ExtensionFilter extFilterJPG = new FileChooser.ExtensionFilter("JPG files (*.jpg)", "*.JPG");
        FileChooser.ExtensionFilter extFilterPNG = new FileChooser.ExtensionFilter("PNG files (*.png)", "*.PNG");
        fileChooser.getExtensionFilters().addAll(extFilterJPG, extFilterPNG);
    }
    
    @FXML
    private void handleSave() {
        User user = new User();
        user.setId(userModel.getId().getValue());
        user.setUsername(usernameField.getText());
        user.setFirstName(firstNameField.getText());
        user.setSecondName(secondNameField.getText());
        user.setFirstSurname(firstSurnameField.getText());
        user.setSecondSurname(secondSurnameField.getText());
        user.setPicturePath(picturePathLabel.getText());
        user.setFirstCountry(firstCountryField.getText());
        user.setSecondCountry(secondCountryField.getText());
        
        // Make validations
        if (validateUser(user)) {
            BusinessLogicLocator.getInstance().getUserBusinessLogic().save(user);
            dialogStage.close();
        }
    }
    
    @FXML
    private void handleCancel() {
        dialogStage.close();
    }
    
    @FXML
    private void handleSelectPicture() {
        File file = fileChooser.showOpenDialog(dialogStage);
        if(file != null) {
            picturePathLabel.setText(file.getAbsolutePath());
        }
    }
    
    private boolean validateUser(final User user) {
        // Validate fields
        StringBuilder resultBuilder = new StringBuilder();
        
        if (user.getUsername().trim().isEmpty()) {
            resultBuilder.append(Constants.USERNAME_REQUIRED + "\n");
        }
        
        if (user.getFirstName().trim().isEmpty()) {
            resultBuilder.append(Constants.FIRSTNAME_REQUIRED + "\n");
        }
        
        if (user.getFirstSurname().trim().isEmpty()) {
            resultBuilder.append(Constants.FIRST_SURNAME_REQUIRED + "\n");
        }
        
        if (user.getSecondSurname().trim().isEmpty()) {
            resultBuilder.append(Constants.SECOND_SURNAME_REQUIRED + "\n");
        }
        
        boolean birthday_valid = false;
        if(birthdayField.getValue() != null) {
            Date date = Date.from(Instant.from(birthdayField.getValue().atStartOfDay(ZoneId.systemDefault())));
            if(date.after(new Date())) {
                resultBuilder.append(Constants.BIRTHDAY_CANT_BE_FUTURE + "\n");
            } else {
                birthday_valid = true;
                user.setBirthday(date);
            }
        } else {
            resultBuilder.append(Constants.BIRTHDAY_REQUIRED + "\n");
        }
        
        if(deathdayField.getValue() != null && birthday_valid) {
            Date date = Date.from(Instant.from(deathdayField.getValue().atStartOfDay(ZoneId.systemDefault())));
            if(date.before(user.getBirthday())) {
                resultBuilder.append(Constants.DETHDATE_BEFORE_BIRTHDAY + "\n");
            } else {
                user.setDeathday(date);
            }
        }
        
        if (user.getFirstCountry().trim().isEmpty()) {
            resultBuilder.append(Constants.FIRST_COUNTRY_REQUIRED + "\n");
        }
        
        // Present error
        String result = resultBuilder.toString();
        boolean isValidUser = result.isEmpty();
        if (!isValidUser) {
            getNavigationManager().showAlert(AlertType.ERROR, Constants.USER_ERROR, Constants.ADD_USER_ERROR, result);
        }
        return isValidUser;
    }
    
}
