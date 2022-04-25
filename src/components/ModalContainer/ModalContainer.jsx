import React, { useState } from 'react'
import { CartContext } from "../../context/CartContext";
import { useContext } from 'react';
import ModalForm from '../Modal/ModalForm';
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
    const { TotalPrice, cartArray } = useContext(CartContext);

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
        console.log(order)
        const orderFirebase = collection(ddbb, 'Ordenes');
        const orderDoc = await addDoc(orderFirebase, order);
        console.log(`Nº de Orden generada: ${orderDoc.id}`)
        setSuccessOrder(orderDoc.id);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(order && order.buyer.name && order.buyer.lastname && order.buyer.email && order.buyer.phone) {pushOrder()}
        else{
            alert('Por favor, complete todos los campos')
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






