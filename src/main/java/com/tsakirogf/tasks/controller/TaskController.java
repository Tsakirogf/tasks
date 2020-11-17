package com.tsakirogf.tasks.controller;

import com.tsakirogf.tasks.model.Task;
import com.tsakirogf.tasks.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tasks")
public class TaskController
{
    @Autowired
    private TaskService taskService;

    public TaskController(TaskService taskService)
    {
        this.taskService = taskService;
    }

    @GetMapping(value = {"", "/"})
    public Iterable<Task> getListOfTask()
    {
        return taskService.getListOfTasks();
    }

    @PostMapping(value = "/save_task")
    public Task saveTask(@RequestBody Task task)
    {
        return taskService.saveTask(task);
    }

    @PutMapping(value = "/edit_task")
    public ResponseEntity<Task> updateTask(@RequestBody Task task)
    {
        return taskService.updateTask(task);
    }
}
