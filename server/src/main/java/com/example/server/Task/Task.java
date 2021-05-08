package com.example.server.Task;

import java.util.Date;

public class Task {
    private String title;
    private String description;
    private String type;
    private boolean isComplete;
    private boolean isImportant;
    private boolean isPassed;
    private Date dueDate;

    public Task getTasks() {
        //should be replaced with printTask, unless we find use case to call getTasks
        return this;
    }

    public Task(String taskTitle, String taskDescription, String taskType, boolean isComplete, boolean isImportant, boolean isPassed, Date dueDate) {
        this.title = taskTitle;
        this.description = taskDescription;
        this.type = taskType;
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


