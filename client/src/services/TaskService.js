import axios from 'axios';

const USER_API_TASK_URL = "http://localhost:8080/api/v1/tasks";

class TaskService {

    getTasks() {
        return axios.get(USER_API_TASK_URL);
    }

    createTask(task) {
        return axios.post(USER_API_TASK_URL, task);
    }

    deleteTask(taskId) {
        return axios.delete(USER_API_TASK_URL + '/' + taskId);
    }

}

export default new TaskService();