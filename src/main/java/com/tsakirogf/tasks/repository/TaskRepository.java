package com.tsakirogf.tasks.repository;

import com.tsakirogf.tasks.model.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task,Long> {
}