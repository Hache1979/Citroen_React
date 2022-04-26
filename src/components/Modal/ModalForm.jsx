import React from 'react'
import "./ModalForm.css"

const ModalForm = (props) => {
    return (
        <div>
            {props.successOrder ? (
                <div className='success-order'>
                    <h3 className="success-order-title">¡GRACIAS POR SU COMPRA CITROËN!</h3>
                    <p className="success-order-paragraph">Su pedido fue enviado con éxito y ha sido registrado bajo la orden:</p>
                    <p className="success-order-order">{props.successOrder}</p>
                    <p className="success-order-paragraph">En breve recibirá un correo con los detalles de su pedido.</p>
                    <button className='success-order-btn'>
                        <a className="success-order-ofertas" href="/Ofertas">VOLVER A OFERTAS</a>
                    </button>
                </div>
            ) : (
                <form className='purchase-form' onSubmit={props.handleSubmit}>
                <h2 className='purchase-form-title'>FORMULARIO DE COMPRA</h2>
                <p className='purchase-form-paragrah'>Finalice su compra Citroën, completando sus datos:</p>
                <fieldset>
                    <label className="modal-label"  htmlFor="name">NOMBRE:</label>
                    <input className="inputs" type="text" name="name" id="name" onChange={props.handleChange} value={props.order.buyer.name}
                    />
                </fieldset>
                <fieldset>
                    <label className="modal-label" htmlFor="lastname">APELLIDO:</label>
                    <input className="inputs" type="text" name="lastname" id="lastname" onChange={props.handleChange} value={props.order.buyer.lastname} />
                </fieldset>
                <fieldset>
                    <label className="modal-label" htmlFor="phone">TÉLEFONO:</label>
                    <input className="inputs" type="number" name="phone" id="phone" onChange={props.handleChange} value={props.order.buyer.phone} />
                </fieldset>
                <fieldset>
                    <label className="modal-label"  htmlFor="email">MAIL:</label>
                    <input className="inputs" type="mail" name="email" id="email" onChange={props.handleChange} value={props.order.buyer.email}
                    />
                </fieldset>
                <button className='purchase-form-button'>ENVIAR</button>
            </form>
            )
            }
        </div>
    )
}
export default ModalForm


