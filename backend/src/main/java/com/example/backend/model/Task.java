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

    /**
     * Default constructor for Task
     */
    public Task() {}

    /**
     * Create Task object
     * @param taskName name of task
     * @param email email of User
     * @param courseName name of task course
     * @param dueDate due date for task
     */
    public Task(String taskName, String email, String courseName, String dueDate) {
        this.taskName = taskName;
        this.email = email;
        this.courseName = courseName;
        this.dueDate = dueDate;
    }

    /**
     * Create Task Object
     * @param taskName name of task
     * @param courseName name of task course
     * @param dueDate due date for task
     */
    public Task(String taskName, String courseName, String dueDate) {
        this.taskName = taskName;
        this.courseName = courseName;
        this.dueDate = dueDate;
    }

    /**
     * Get Task id
     * @return identification number of task
     */
    public Integer getId() {
        return id;
    }

    /**
     * Set Task id
     * @param id identification number of task
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * Get Task name
     * @return name of task
     */
    public String getTaskName() {
        return taskName;
    }

    /**
     * Set Task name
     * @param taskName name of task
     */
    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    /**
     * Get user's email stored in Task
     * @return email of user associated with task
     */
    public String getEmail() {
        return email;
    }

    /**
     * Set user's email stored in Task
     * @param email email of user associated with task
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * Get name of the course associated with task
     * @return course name
     */
    public String getCourseName() {
        return courseName;
    }

    /**
     * Set name of the course associated with task
     * @param courseName course name
     */
    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    /**
     * Get due date of task
     * @return due date of task
     */
    public String getDueDate() {
        return dueDate;
    }

    /**
     * Set due date of task
     * @param dueDate due date of task
     */
    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }
}
