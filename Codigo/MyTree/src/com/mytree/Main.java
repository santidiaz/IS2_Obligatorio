/*
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/
package com.mytree;

import com.mytree.assembler.Assembler;
import com.mytree.business.logic.AttachmentBusinessLogic;
import com.mytree.business.logic.BusinessLogicLocator;
import com.mytree.business.logic.UserBusinessLogic;
import com.mytree.business.logic.UserRelationshipBusinessLogic;
import com.mytree.business.model.Attachment;
import com.mytree.business.model.User;
import com.mytree.business.model.UserRelationship;
import com.mytree.ui.controller.AttachmentDialogController;
import com.mytree.ui.controller.AttachmentsController;
import com.mytree.ui.controller.MainController;
import com.mytree.ui.controller.RootLayoutController;
import com.mytree.ui.controller.TextualTreeController;
import com.mytree.ui.controller.TreeController;
import com.mytree.ui.controller.UserDetailsDialogController;
import com.mytree.ui.controller.UserEditDialogController;
import com.mytree.ui.controller.UserRelationshipDialogController;
import com.mytree.ui.controller.UsersController;
import com.mytree.ui.model.UserModel;
import com.mytree.utils.Constants;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.util.Collection;
import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.layout.AnchorPane;
import javafx.scene.layout.BorderPane;
import javafx.stage.Modality;
import javafx.stage.Stage;

public final class Main
        extends Application
        implements NavigationManager {
    
    private Stage primaryStage;
    private BorderPane rootLayout;
    
    public static void main(final String[] args) {
        Assembler.getInstance().assemble();
        launch(args);
    }
    
    @Override
    public void start(final Stage primaryStage) {
        this.primaryStage = primaryStage;
        primaryStage.setTitle(Constants.APP_TITLE);
        
        showMainPage();
        initRootLayout();
        showTree();
    }
    
    public void showMainPage() {
        try {
            FXMLLoader loader = resourceLoader("ui/view/Main.fxml");
            AnchorPane page = (AnchorPane) loader.load();
            
            // Create the dialog Stage.
            Stage dialogStage = new Stage();
            dialogStage.initModality(Modality.APPLICATION_MODAL);
            dialogStage.initOwner(primaryStage);
            dialogStage.setResizable(false);
            dialogStage.setScene(new Scene(page));
            
            // Set the user into the controller.
            MainController controller = loader.getController();
            controller.setNavigationManager(this);
            controller.setDialogStage(dialogStage);
            
            // Show the dialog and wait until the user closes it
            dialogStage.showAndWait();
            
        } catch (IOException e) {
            // TODO: Present an error message
        }
    }
    
    public void initRootLayout() {
        try {
            FXMLLoader loader = resourceLoader("ui/view/RootLayout.fxml");
            rootLayout = (BorderPane) loader.load();
            
            RootLayoutController controller = loader.getController();
            controller.setNavigationManager(this);
            
            // Show the scene containing the root layout.
            Scene scene = new Scene(rootLayout);
            primaryStage.setScene(scene);
            primaryStage.setMaximized(false);
            primaryStage.setResizable(true);
            primaryStage.show();
            
        } catch (IOException e) {
            // TODO: Present an error message
        }
    }
    
    @Override
    public void showUsers() {
        try {
            FXMLLoader loader = resourceLoader("ui/view/Users.fxml");
            AnchorPane users = (AnchorPane) loader.load();
            
            // Set users into the center of root layout.
            rootLayout.setCenter(users);
            
            // Give the controller access to the main app.
            UsersController controller = loader.getController();
            controller.setNavigationManager(this);
            
        } catch (IOException e) {
            // TODO: Present an error message
        }
    }
    
    @Override
    public void showTree() {
        try {
            FXMLLoader loader = resourceLoader("ui/view/Tree.fxml");
            BorderPane tree = (BorderPane) loader.load();
            
            // Set users into the center of root layout.
            rootLayout.setCenter(tree);
            
            // Give the controller access to the main app.
            TreeController controller = loader.getController();
            controller.setNavigationManager(this);
            
        } catch (IOException e) {
            // TODO: Present an error message
        }
    }
    
    @Override
    public void showTextualTree() {
        try {
            FXMLLoader loader = resourceLoader("ui/view/TextualTree.fxml");
            BorderPane tree = (BorderPane) loader.load();
            
            // Set users into the center of root layout.
            rootLayout.setCenter(tree);
            
            // Give the controller access to the main app.
            TextualTreeController controller = loader.getController();
            controller.setNavigationManager(this);
            
        } catch (IOException e) {
            // TODO: Present an error message
        }
    }
    
    @Override
    public void showAttachments() {
        try {
            FXMLLoader loader = resourceLoader("ui/view/Attachments.fxml");
            AnchorPane tree = (AnchorPane) loader.load();
            
            // Set users into the center of root layout.
            rootLayout.setCenter(tree);
            
            // Give the controller access to the main app.
            AttachmentsController controller = loader.getController();
            controller.setNavigationManager(this);
            
        } catch (IOException e) {
            // TODO: Present an error message
        }
    }
    
    @Override
    public void showUserEditDialog(final UserModel userModel, final boolean allowCancel) {
        try {
            FXMLLoader loader = resourceLoader("ui/view/UserEditDialog.fxml");
            AnchorPane page = (AnchorPane) loader.load();
            
            // Create the dialog Stage.
            String title = userModel.isNew() ? Constants.NEW_USER : Constants.EDIT_USER;
            Stage dialogStage = new Stage();
            dialogStage.setTitle(title);
            dialogStage.initModality(Modality.APPLICATION_MODAL);
            dialogStage.initOwner(primaryStage);
            dialogStage.setResizable(false);
            dialogStage.setScene(new Scene(page));
            
            // Set the user into the controller.
            UserEditDialogController controller = loader.getController();
            controller.setNavigationManager(this);
            controller.setDialogStage(dialogStage);
            controller.setUser(userModel);
            controller.allowCancel(allowCancel);
            
            // Show the dialog and wait until the user closes it
            dialogStage.showAndWait();
            
        } catch (IOException e) {
            // TODO: Present an error message
        }
    }
    
    @Override
    public void showUserRelationshipDialog() {
        try {
            FXMLLoader loader = resourceLoader("ui/view/UserRelationshipDialog.fxml");
            AnchorPane page = (AnchorPane) loader.load();
            
            // Create the dialog Stage.
            String title = Constants.NEW_USER_RELATIONSHIP;
            Stage dialogStage = new Stage();
            dialogStage.setTitle(title);
            dialogStage.initModality(Modality.APPLICATION_MODAL);
            dialogStage.initOwner(primaryStage);
            dialogStage.setResizable(false);
            dialogStage.setScene(new Scene(page));
            
            // Set the user into the controller.
            UserRelationshipDialogController controller = loader.getController();
            controller.setNavigationManager(this);
            controller.setDialogStage(dialogStage);
            
            // Show the dialog and wait until the user closes it
            dialogStage.showAndWait();
            
        } catch (IOException e) {
            // TODO: Present an error message
        }
    }
    
    @Override
    public void showAttachmentDialog() {
        try {
            FXMLLoader loader = resourceLoader("ui/view/AttachmentDialog.fxml");
            AnchorPane page = (AnchorPane) loader.load();
            
            // Create the dialog Stage.
            String title = Constants.NEW_ATTACHMENT;
            Stage dialogStage = new Stage();
            dialogStage.setTitle(title);
            dialogStage.initModality(Modality.APPLICATION_MODAL);
            dialogStage.initOwner(primaryStage);
            dialogStage.setResizable(false);
            dialogStage.setScene(new Scene(page));
            
            // Set the user into the controller.
            AttachmentDialogController controller = loader.getController();
            controller.setNavigationManager(this);
            controller.setDialogStage(dialogStage);
            
            // Show the dialog and wait until the user closes it
            dialogStage.showAndWait();
            
        } catch (IOException e) {
            // TODO: Present an error message
        }
    }
    
    @Override
    public void showUserDetails(final int userId) {
        try {
            FXMLLoader loader = resourceLoader("ui/view/UserDetailsDialog.fxml");
            AnchorPane page = (AnchorPane) loader.load();
            
            // Create the dialog Stage.
            String title = Constants.USER_DETAILS;
            Stage dialogStage = new Stage();
            dialogStage.setTitle(title);
            dialogStage.initModality(Modality.APPLICATION_MODAL);
            dialogStage.initOwner(primaryStage);
            dialogStage.setResizable(false);
            dialogStage.setScene(new Scene(page));
            
            UserDetailsDialogController controller = loader.getController();
            controller.setNavigationManager(this);
            controller.setUserId(userId);
            controller.setDialogStage(dialogStage);
            
            // Show the dialog and wait until the user closes it
            dialogStage.showAndWait();
            
        } catch (IOException e) {
            // TODO: Present an error message
        }
    }
    
    @Override
    public void showUserAttachmentsDialog(final int userId) {
        try {
            FXMLLoader loader = resourceLoader("ui/view/Attachments.fxml");
            AnchorPane attachments = (AnchorPane) loader.load();
            
            // Create the dialog Stage.
            String title = Constants.ATTACHMENTS;
            Stage dialogStage = new Stage();
            dialogStage.setTitle(title);
            dialogStage.initModality(Modality.APPLICATION_MODAL);
            dialogStage.initOwner(primaryStage);
            dialogStage.setResizable(false);
            dialogStage.setScene(new Scene(attachments));
            
            // Give the controller access to the main app.
            AttachmentsController controller = loader.getController();
            controller.setNavigationManager(this);
            controller.setUserId(userId);
            
            dialogStage.showAndWait();
            
        } catch (IOException e) {
            // TODO: Present an error message
        }
    }
    
    @Override
    public void showAlert(final AlertType alertType, final String title,
            final String header, final String content) {
        Alert alert = new Alert(alertType);
        alert.setTitle(title);
        alert.setHeaderText(header);
        alert.setContentText(content);
        alert.showAndWait();
    }
    
    @Override
    public void openDocument(final String path) {
        File document = new File(path);
        if (document.exists() && !document.isDirectory()) {
            getHostServices().showDocument(path);
        } else {
            showAlert(AlertType.ERROR, Constants.APP_TITLE, Constants.DOCUMENT_ERROR, Constants.DOCUMENT_NOT_FOUND);
        }
    }
    
    private FXMLLoader resourceLoader(final String path) throws IOException {
        FXMLLoader loader = new FXMLLoader();
        loader.setLocation(Main.class.getResource(path));
        return loader;
    }
    
    @Override
    public void stop(){        
        BusinessLogicLocator locator = BusinessLogicLocator.getInstance();
        AttachmentBusinessLogic attachmentLogic = locator.getAttachmentBusinessLogic();
        UserBusinessLogic userLogic = locator.getUserBusinessLogic();
        UserRelationshipBusinessLogic relationshipsLogic = locator.getUserRelationshipBusinessLogic();
        
        Collection<User> users = userLogic.getUsers(false);
        Collection<Attachment> attachments = attachmentLogic.getAttachments();
        UserRelationship[][] relationships = relationshipsLogic.getRealationshipsMatrix();
        
        saveUsers(users);
        saveAttachments(attachments);
        saveRelationships(relationships);
        
    }
    
    private void saveUsers(Collection<User> users) {
        try {
            File archivoGuardados = new File("resources/datasources/users.txt");
            if (archivoGuardados.exists() && !archivoGuardados.isDirectory()) {
                FileOutputStream fg = new FileOutputStream(archivoGuardados);
                BufferedOutputStream bg = new BufferedOutputStream(fg);
                ObjectOutputStream sg = new ObjectOutputStream(bg);
                sg.writeObject(users);
                sg.close();
            } else {// Si no existe creo un nuevo archivo y guardo en este
                archivoGuardados.getParentFile().mkdirs();
                archivoGuardados.createNewFile();
                
                FileOutputStream fg = new FileOutputStream(archivoGuardados);
                BufferedOutputStream bg = new BufferedOutputStream(fg);
                ObjectOutputStream sg = new ObjectOutputStream(bg);
                sg.writeObject(users);
                sg.close();
            }
        } catch (FileNotFoundException e) {
            System.out.println("File not found");
        } catch (IOException e) {
            System.out.println("Error initializing stream");
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
    
    private void saveAttachments(Collection<Attachment> attachments) {
        try {
            File archivoGuardados = new File("resources/datasources/attachments.txt");
            if (archivoGuardados.exists() && !archivoGuardados.isDirectory()) {
                FileOutputStream fg = new FileOutputStream(archivoGuardados);
                BufferedOutputStream bg = new BufferedOutputStream(fg);
                ObjectOutputStream sg = new ObjectOutputStream(bg);
                sg.writeObject(attachments);
                sg.close();
            } else {
                archivoGuardados.getParentFile().mkdirs();
                archivoGuardados.createNewFile();
                
                FileOutputStream fg = new FileOutputStream(archivoGuardados);
                BufferedOutputStream bg = new BufferedOutputStream(fg);
                ObjectOutputStream sg = new ObjectOutputStream(bg);
                sg.writeObject(attachments);
                sg.close();
            }
        } catch (FileNotFoundException e) {
            System.out.println("File not found");
        } catch (IOException e) {
            System.out.println("Error initializing stream");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
    private void saveRelationships(UserRelationship[][] relationships) {
        try {
            File archivoGuardados = new File("resources/datasources/relationships.txt");
            if (archivoGuardados.exists() && !archivoGuardados.isDirectory()) {
                FileOutputStream fg = new FileOutputStream(archivoGuardados);
                BufferedOutputStream bg = new BufferedOutputStream(fg);
                ObjectOutputStream sg = new ObjectOutputStream(bg);
                sg.writeObject(relationships);
                sg.close();
            } else {
                archivoGuardados.getParentFile().mkdirs();
                archivoGuardados.createNewFile();
                
                FileOutputStream fg = new FileOutputStream(archivoGuardados);
                BufferedOutputStream bg = new BufferedOutputStream(fg);
                ObjectOutputStream sg = new ObjectOutputStream(bg);
                sg.writeObject(relationships);
                sg.close();
            }
        } catch (FileNotFoundException e) {
            System.out.println("File not found");
        } catch (IOException e) {
            System.out.println("Error initializing stream");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
