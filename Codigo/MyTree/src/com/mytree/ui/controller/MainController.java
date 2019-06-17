package com.mytree.ui.controller;

import com.mytree.business.logic.BusinessLogicLocator;
import com.mytree.business.model.User;
import com.mytree.ui.model.UserModel;
import com.mytree.utils.Constants;
import java.io.File;
import java.text.DateFormat;
import java.util.Locale;
import javafx.beans.property.SimpleStringProperty;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.fxml.FXML;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.stage.Stage;

public final class MainController extends BaseController {
    
    @FXML
    private ImageView mainPageImage;
    private Stage dialogStage;
    
    public MainController() {
    }
    
    @Override
    protected void onInitialize() {
        setMainPageImage();
    }
    
    @FXML
    private void handleLogin() {
        dialogStage.close();
    }
    
    public void setDialogStage(final Stage dialogStage) {
        this.dialogStage = dialogStage;
    }
    
    private void setMainPageImage() {
        String imagePath = Constants.MAIN_PAGE_IMG;
        mainPageImage.setImage(new Image(imagePath));                
    }
}
