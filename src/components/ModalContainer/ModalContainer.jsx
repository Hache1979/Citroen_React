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
        else{
            const smallTags = document.getElementsByTagName('small')
            const inputTags = document.getElementsByTagName('input')
            console.log(inputTags)
            if(!validateName(order.buyer.name)){
                smallTags[0].style.display = 'block'
                inputTags[1].style.border = '1px solid red'
            }
            else{
                smallTags[0].style.display = 'none'
                inputTags[1].style.borderColor = '#ced4da'  
            }
            if(!validateName(order.buyer.lastname)){
                smallTags[1].style.display = 'block'
                inputTags[2].style.border = '1px solid red'
            }
            else{
                smallTags[1].style.display = 'none'
                inputTags[2].style.borderColor = '#ced4da'
            }
            if (!phoneValidation(order.buyer.phone)) {
                smallTags[2].style.display = 'block';
                inputTags[3].style.border = '1px solid red';
            }
            else{
                smallTags[2].style.display = 'none';
                inputTags[3].style.border = '#ced4da';
            }
            if (!validateMail(order.buyer.email)) {
                smallTags[3].style.display = 'block';
                inputTags[4].style.border = '1px solid red';
            }
            else{
                smallTags[3].style.display = 'none';
                inputTags[4].style.border = '#ced4da';
            }

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






