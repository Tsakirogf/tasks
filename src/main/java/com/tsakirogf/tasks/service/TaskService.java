package com.tsakirogf.tasks.service;

import com.tsakirogf.tasks.model.Task;
import org.springframework.http.ResponseEntity;

public interface TaskService
{
    Iterable<Task> getListOfTasks();

    Task saveTask(Task task);

    ResponseEntity<Task> updateTask(Task task);
}

