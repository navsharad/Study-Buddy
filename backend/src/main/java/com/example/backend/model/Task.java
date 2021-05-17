package com.example.backend.model;

import javax.persistence.*;

@Entity
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "task_name")
    private String taskName;

    @Column(name = "email")
    private String email;

    @Column(name = "course_name")
    private String courseName;

    @Column(name = "due_date")
    private String dueDate;

    public Task() {}

    public Task(String taskName, String email, String courseName, String dueDate) {
        this.taskName = taskName;
        this.email = email;
        this.courseName = courseName;
        this.dueDate = dueDate;
    }

    public Task(String taskName, String courseName, String dueDate) {
        this.taskName = taskName;
        this.courseName = courseName;
        this.dueDate = dueDate;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getDueDate() {
        return dueDate;
    }

    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }
}
