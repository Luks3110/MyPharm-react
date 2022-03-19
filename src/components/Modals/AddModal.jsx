import React from 'react'
import { 
    ModalBackground, 
    ModalContainer, 
    Title, 
    Body, 
    Footer,
    CreateButton,
    CancelButton
} from '../../styles/Modal.style'
import { useSelector, useDispatch } from "react-redux";
import { getProducts, addProduct } from "../../redux/actions/Products.actions";
import { addCategory } from "../../redux/actions/Categories.actions";
import { addBrand } from "../../redux/actions/Brands.actions";
import  Form  from '../Form'


const AddModal = ({ type, formArr, closeModal, title }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.isLoading);
    const onSubmitHandler = (form, callback) => {
        if (type === 'product') {
            form.price = Number(form.price)
            form.stock = Number(form.stock)
            dispatch(addProduct(form))
            console.log(form)
        } else if (type === 'category') {
            dispatch(addCategory(form));
            console.log(form)
        } else if (type === 'brand') {
            dispatch(addBrand(form));
        };
        callback();
}

  return (
    <ModalBackground>
        <ModalContainer>
            <Body>
               <Form title={title} formArr={formArr} submitBtn="Enviar" onSubmit={onSubmitHandler} closeModal={closeModal} />
            </Body>
        </ModalContainer>
    </ModalBackground>   
  )
}

export default AddModal