import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError} from "rxjs/operators";
import {Observable, of, Subscription} from "rxjs";
import {Task} from "./task.model";

const httpOptions =
    {
        headers:new HttpHeaders(
            {
                'Content-Type':  'application/json',
                'Authorization': 'my-auth-token'
            }
        )
    }

@Injectable()
export class TaskService {

    constructor(private http: HttpClient) {
    }
    taskList:Task[] = [];

    // Get function
    getTasks():Observable<Task[]> {
        return this.http.get<Task[]>('api/tasks')
            .pipe(catchError(this.handleError<Task[]>('getTasks',[])))
    }

    // Handle error
    private handleError<T> (operation='operation', result?:T)
    {
        return (error:any):Observable<T>=>{
            console.error(error);
            return of(result as T);
        }
    }

    updateTask(newTask:Task) {
        let retval = this.http.put<Task>('/api/tasks/edit_task', JSON.stringify(newTask), httpOptions)
            .pipe(catchError(this
                .handleError<Task>('saveTask',newTask))).subscribe((value) => console.log(value));
        return retval;
    }

    addTask(newTask:Task)
    {
        let retval = this.http.post<Task>('/api/tasks/save_task', JSON.stringify(newTask), httpOptions)
            .pipe(catchError(this
                .handleError<Task>('addTask',newTask))).subscribe((newTask: Task) => {this.addTask});
        return retval;
    }

}
