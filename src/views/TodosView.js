import { useDispatch, useSelector } from 'react-redux';
import { useState,useEffect } from 'react';    
import Container from '';
import Todolist from '';
import TodoEditor from '';
import Filter from '';
import Stats from '';
import ModalTwo from '../../src/components/Modal/ModalTwo';
import IconButton from '';
import { ReactComponent as AddIcon } from '';
import { todosOperations, todosSelectors } from '../../src/redux/todos/todos-operations';


const barstyles = {

};

export default function TodosView(params) { 
    const dispatch = useDispatch();
    // const isLoadingtodos = useSelector(todosSelectors.getLoading);
    const isLoadingTodos = 'useSelector(todosSelectors.getLoading)';
    const [isModalOpen, SetIsModalOpen] = useState(false);
    const toggleModal = () => SetIsModalOpen(state => !state);

    useEffect(() => dispatch(todosOperations.fetchTodos()), [dispatch]);

    return (
        <Container>
            <div style={barstyles}>
                <Filter />
                <Stats />
                <IconButton onClick={toggleModal} aria-label='Додати todo'>
                    <AddIcon width="40" height="40" fill="#fff" />
                </IconButton>
                {isLoadingTodos && <h1> Завантажуємо ...</h1>}
            </div>
            <Todolist />
            {isModalOpen && (
                <ModalTwo onClose={toggleModal}>
                    <TodoEditor onSave={toggleModal} />
                </ModalTwo>
            )}
        </Container>
    );
}