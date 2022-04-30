import React, { useState } from 'react'
import { CartContext } from "../../context/CartContext";
import { useContext } from 'react';
import ModalForm from '../ModalForm/ModalForm';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ddbb from '../../Fiberbase';
import { addDoc, collection } from 'firebase/firestore';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid grey',
    boxShadow: 24,
    p: 4,
    borderRadius: '0.5rem',
};

const ModalContainer = (props) => {
    const { TotalPrice, cartArray, validateMail, phoneValidation, validateName } = useContext(CartContext);

    const [order, setOrder] = useState(
        {
            buyer: {
                name: '',
                lastname: '',
                email: '',
                phone: '',
            },
            items: cartArray.map(car => {
                return {
                    id: car.item.id,
                    name: car.item.nombre,
                    price: car.item.precio,
                }
            }),
            total: TotalPrice() * 1.21,
        });

    const [successOrder, setSuccessOrder] = useState();


    const handleChange = (e) => {
        setOrder({
            ...order,
            buyer: {
                ...order.buyer,
                [e.target.name]: e.target.value
            }
        });
    }

    const pushOrder = async () => {
        const orderFirebase = collection(ddbb, 'Ordenes');
        const orderDoc = await addDoc(orderFirebase, order);
        setSuccessOrder(orderDoc.id);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateMail(order.buyer.email) && phoneValidation(order.buyer.phone) && validateName(order.buyer.name) && validateName(order.buyer.lastname)) {
            pushOrder();
        }
    }

    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <ModalForm order={order} handleChange={handleChange} handleSubmit={handleSubmit} successOrder={successOrder} />
                </Box>
            </Modal>
        </div>
    );
}

export default ModalContainer






