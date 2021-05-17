import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/v1/courses";

class ClassService {

    getClasses() {
        return axios.get(USER_API_BASE_URL);
    }

    createClass(course) {
        return axios.post(USER_API_BASE_URL, course);
    }

    deleteClass(classId) {
        return axios.delete(USER_API_BASE_URL + '/' + classId)
    }

}

export default new ClassService();