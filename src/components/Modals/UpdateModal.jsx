import React from 'react'
import { 
    ModalBackground, 
    ModalContainer, 
    Body, 
} from '../../styles/Modal.style'
import { useSelector, useDispatch } from "react-redux";
import { updateProduct } from "../../redux/actions/Products.actions";
import { updateCategory } from "../../redux/actions/Categories.actions";
import { updateBrand } from "../../redux/actions/Brands.actions";
import  Form  from '../Form'


const AddModal = ({ type, formArr, closeModal, item }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.isLoading);
    const onSubmitHandler = (form, callback) => {
        if (type === 'product') {
            form.price = Number(form.price)
            form.stock = Number(form.stock)
            dispatch(updateProduct(item, form))
            console.log(form)
        } else if (type === 'category') {
            dispatch(updateCategory(item, form));
            console.log(form)
        } else if (type === 'brand') {
            dispatch(updateBrand(item, form));
        };
        callback();
}

  return (
    <ModalBackground>
        <ModalContainer>
            <Body>
               <Form title="Atualizar" formArr={formArr} submitBtn="Enviar" onSubmit={onSubmitHandler} closeModal={closeModal} />
            </Body>
        </ModalContainer>
    </ModalBackground>   
  )
}

export default AddModal