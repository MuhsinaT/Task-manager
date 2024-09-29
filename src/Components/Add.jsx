import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addTodo } from '../Redux/taskSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function Add() {
    const [show, setShow] = useState(false);
    const [add, setAdd] = useState({
        id: '',
        title: '',
        status: ''
    });
    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAdd = () => {
        const { id, title, status } = add;

        if (!id || !title || !status) {
            toast.warning("Enter Valid Inputs");
        } else {
            dispatch(addTodo(add));
            setAdd(add); 
            handleClose(); 
            toast.success("Task Added Successfully!");
        }
    };

    return (
        <>
            <div className="container-fluid">
                <div className='d-flex align-items-center justify-content-center ' >
                    <button className='btn ' style={{backgroundColor:'#E1B995'}} onClick={handleShow} >Add New Tasks...</button>
                </div>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Tasks</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <input
        type='text'
        className='form-control mb-3'
        onChange={(e) => setAdd({ ...add, id: e.target.value })}
        placeholder='id'
    />
    <input
        type='text'
        className='form-control mb-3'
        onChange={(e) => setAdd({ ...add, title: e.target.value })}
        placeholder='Enter Task'
    />
    <select
        className='form-control mb-3'
        onChange={(e) => setAdd({ ...add, status: e.target.value })}
    >
        <option value="">Select Status</option>
        <option value="Completed">Completed</option>
        <option value="Not Completed">Not Completed</option>
    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAdd}>Upload</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Add;
