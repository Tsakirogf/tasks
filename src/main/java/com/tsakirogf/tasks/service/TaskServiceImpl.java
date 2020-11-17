package com.tsakirogf.tasks.service;

import com.tsakirogf.tasks.model.Task;
import com.tsakirogf.tasks.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository)
    {
        this.taskRepository = taskRepository;
    }

    @Override
    public Iterable<Task> getListOfTasks()
    {
        return this.taskRepository.findAll();
    }

    @Override
    public Task saveTask(Task task) {
        return this.taskRepository.save(task);
    }

    @Override
    public ResponseEntity<Task> updateTask(Task task) {
        if(this.taskRepository.findById(task.getId()).isPresent())
        {
            return new ResponseEntity(this.taskRepository.save(task), HttpStatus.OK);
        }
        else
        {
            return new ResponseEntity<Task>(task, HttpStatus.BAD_REQUEST);
        }
    }
}
