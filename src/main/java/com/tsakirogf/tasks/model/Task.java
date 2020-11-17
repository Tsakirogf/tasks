package com.tsakirogf.tasks.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
public class Task {

    public Task()
    {

    }

    public Task(String name, String dueDate, Boolean completed)
    {
        this.name = name;
        this.dueDate = dueDate;
        this.completed = completed;
    }

    @Id
    @GeneratedValue
    @JsonProperty("id")
    private Long id;
    @JsonProperty("name")
    private String name;
    @JsonProperty("dueDate")
    @JsonFormat(pattern = "MM/dd/yyyy")
    private String dueDate;
    @JsonProperty("completed")
    private Boolean completed;
}
