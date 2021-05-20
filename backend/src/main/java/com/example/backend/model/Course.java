package com.example.backend.model;

import javax.persistence.*;

@Entity
@Table(name = "courses")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "course_name")
    private String courseName;

    @Column(name = "email")
    private String email; // used as foreign key to check which user the email belongs to

    @Column(name = "instructor_name")
    private String instructorName;

    /**
     * Default Constructor
     */
    public Course () {

    }

    /**
     * Construct Course object
     * @param courseName name of course
     * @param instructorName name of instructor for course
     */
    public Course(String courseName, String instructorName) {
        this.courseName = courseName;
        this.instructorName = instructorName;
    }

    /**
     * Construct course object
     * @param courseName name of course
     * @param instructorName name of instructor for course
     * @param email email of user associated with course
     */
    public Course(String courseName, String instructorName, String email) {
        this.courseName = courseName;
        this.instructorName = instructorName;
        this.email = email;
    }

    /**
     * Get identification number of course
     * @return id of course
     */
    public int getId() {
        return id;
    }

    /**
     * Set identification number of course
     * @param id id of course
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * Get name of course
     * @return name of course
     */
    public String getcourseName() {
        return courseName;
    }

    /**
     * Set name of course
     * @param courseName name of course
     */
    public void setcourseName(String courseName) {
        this.courseName = courseName;
    }

    /**
     * Get name of instructor for course
     * @return name of instructor
     */
    public String getInstructorName() {
        return instructorName;
    }

    /**
     * Set name of instructor for course
     * @param instructorName
     */
    public void setInstructorName(String instructorName) {
        this.instructorName = instructorName;
    }

    /**
     * Get email of user associated with course
     * @return email of user
     */
    public String getEmail() {
        return email;
    }

    /**
     * Set email of user associated with course
     * @param email email of user
     */
    public void setEmail(String email) {
        this.email = email;
    }
}
