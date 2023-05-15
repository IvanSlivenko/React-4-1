import axios from "axios";
import {
    addTodoRequest,
    addTodoSuccess,
    addTodoError,
    deleteTodoRequest,
    deleteTodoSuccess,
    deleteTodoError,
    toggleCompletedRequest,
    toggleCompletedSuccess,
    toggleCompletedError,
    fetchTodosRequest,
    fetchTodosSuccess,
    fetchTodosError,
} from '../../../src/redux/todos/todos-actions';

const fetchTodos = () => async dispatch => {
    dispatch(fetchTodosRequest());
    try {
        const { data } = await axios.get('/tasks');
        
        dispatch(fetchTodosSuccess(data));
    } catch (error) { 
        dispatch(fetchTodosError(error.message));
    }
};


const addTodo = description => dispatch => {
    const todo = {
        description,
        completed: false,
    };
    
    dispatch(addTodoRequest());

    axios
        .post('/tasrs', todo)
        .then(({ data }) => dispatch(addTodoSuccess(data)))
        .catch(error => dispatch(addTodoError(error.message)));
};

const deleteTodo = todoId => dispatch => {
    dispatch(deleteTodoRequest());

    axios
        .delete(`/tasrs/${todoId}`)
        .then(() => dispatch(deleteTodoSuccess(todoId)))
        .catch(error => dispatch(deleteTodoError(error.message)));
};

const toggleCompleted = ({id, comleted }) => dispatch => {
    
    const update = { comleted };

    dispatch(toggleCompletedRequest());

    axios
        .patch(`/tasrs/${id}`,update)
        .then(({data }) => dispatch(toggleCompletedSuccess(data)))
        .catch(error => dispatch(toggleCompletedError(error.message)));
};

const todosOperations = {

    fetchTodos,
    addTodo,
    deleteTodo,
    toggleCompleted,
}

export default todosOperations;






































































// const todosOperations = {
//     fetchTodos,
//     addTodo,
//     deleteTodo,
//     toggleCompleted,
// };

// export default todosOperations;