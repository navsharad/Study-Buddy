package com.example.server.Task;

import java.util.Date;

public class Task {
    //======================================================================================
    // ************************************ MODEL CLASS ************************************
    //======================================================================================
    private String taskTitle;
    private String taskDescription;
    private String taskType;
    private Boolean isComplete;
    private Boolean isImportant;
    private Boolean isPassed;
    private Date dueDate;

    public Task getTasks() {
        //should be replaced with printTask, unless we find use case to call getTasks
        return this;
    }

    public Task(String taskTitle, String taskDescription, String taskType, Boolean isComplete, Boolean isImportant, Boolean isPassed, Date dueDate) {
        this.taskTitle = taskTitle;
        this.taskDescription = taskDescription;
        this.taskType = taskType;
        this.isComplete = isComplete;
        this.isImportant = isImportant;
        this.isPassed = isPassed;
        this.dueDate = dueDate;
    }

    public void markAsImportant() {
        //Each task object has only one taskTitle, so no need to pass taskTitle
        isImportant = true;
    }

    public void markAsComplete() {
        //Each task object has only one taskTitle, so no need to pass taskTitle
        isComplete = true;
    }
}


