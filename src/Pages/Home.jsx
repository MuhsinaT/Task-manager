import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodoThunk, deleteTodo, editTodo } from '../Redux/taskSlice';
import { Spinner } from 'react-bootstrap';
import Add from '../Components/Add';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Home() {
    const [edit, setEdit] = useState({ id: '', title: '', status: '' });
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (data) => {
        setShow(true);
        setEdit({
            id: data.id,
            title: data.title,
            status: data.completed ? 'Completed' : 'Not Completed', // Set the initial status correctly
        });
    }

    const { todos, error, loading } = useSelector((state) => state.taskReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodoThunk());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
        toast.success("Task Deleted Successfully");
    }

    const handleEdit = () => {
        dispatch(editTodo({
            id: edit.id,
            title: edit.title,
            status: edit.status // Here, status should be correctly determined
        }));
        toast.success('Todo Edited Successfully!!');
        handleClose();
    };

    return (
        <>
        <div id='home'>

            <h1 className='mt-3' style={{textAlign:'center',fontSize:'1.7rem'}}>Task Manager</h1>
            <Add />

            <div className='container border shadow border-2 table-responsive mt-4'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tasks</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="4" className="text-center">
                                    <Spinner animation='border' role='status'></Spinner>
                                    <span>Loading...</span>
                                </td>
                            </tr>
                        ) : error ? (
                            <tr>
                                <td colSpan="4" className="text-center">
                                    <h3>{error}</h3>
                                </td>
                            </tr>
                        ) : (
                            Array.isArray(todos) && todos.length > 0 ? (
                                todos.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.completed ? 'Completed' : 'Not Completed'}</td>
                                        <td>
                                            <button className='btn' onClick={() => { handleShow(item) }}>
                                            <i className="fa-solid fa-pen-to-square" style={{color: "#255cbb",}} />
                                            </button>
                                            <button className='btn' onClick={() => { handleDelete(item.id) }}>
                                        
<i className="fa-solid fa-trash" style={{color: "#a50d33",}} />                                            
</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center">No tasks available.</td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <input 
        type='text' 
        value={edit.id} 
        className='form-control mb-3' 
        onChange={(e) => { setEdit({ ...edit, id: e.target.value }) }} 
        readOnly
    />
    <input 
        type='text' 
        value={edit.title} 
        className='form-control mb-3' 
        onChange={(e) => { setEdit({ ...edit, title: e.target.value }) }} 
    />
    <select 
        className='form-control mb-3' 
        value={edit.status} 
        onChange={(e) => { setEdit({ ...edit, status: e.target.value }) }}>
        <option value="Completed">Completed</option>
        <option value="Not Completed">Not Completed</option>
    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleEdit}>Update</Button>
                </Modal.Footer>
            </Modal>
            </div>

        </>
    );
}

export default Home;
