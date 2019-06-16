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
        birthdayField.setValue(LocalDate.from(
                Instant.ofEpochMilli(userModel.getBirthday().getValue().getTime()).atZone(ZoneId.systemDefault())));
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
        user.setFirstName(firstNameField.getText());
        user.setSecondName(secondNameField.getText());
        user.setFirstSurname(firstSurnameField.getText());
        user.setSecondSurname(secondSurnameField.getText());
        user.setPicturePath(picturePathLabel.getText());
        user.setFirstCountry(firstCountryField.getText());
        user.setSecondCountry(secondCountryField.getText());
        user.setBirthday(Date.from(Instant.from(birthdayField.getValue().atStartOfDay(ZoneId.systemDefault()))));

        // Make validations
        //if (validateUser(user)) {
            BusinessLogicLocator.getInstance().getUserBusinessLogic().save(user);
            dialogStage.close();
        //}
    }

    @FXML
    private void handleCancel() {
        dialogStage.close();
    }

    @FXML
    private void handleSelectPicture() {
        File file = fileChooser.showOpenDialog(dialogStage);
        picturePathLabel.setText(file.getAbsolutePath());
    }

    private boolean validateUser(final User user) {

        // Validate fields
        StringBuilder resultBuilder = new StringBuilder();
        if (user.getUsername().trim().isEmpty()) {
            resultBuilder.append(Constants.USERNAME_REQUIRED);
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
