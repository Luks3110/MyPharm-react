import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCategory, getCategories } from "../redux/actions/Categories.actions";
import AddModal from "./Modals/AddModal";
import UpdateModal from './Modals/UpdateModal';
import {
  faCirclePlus,
  faPenToSquare,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Button } from "../styles/Product.style";
import { categoryArray } from "../data/formData";


const Categories = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [updateId, setUpdateId] = useState("")
  const categories = useSelector((state) => state.categories.categories);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <Container>
      <h1>Categorias</h1>
      {isLoading && <div>Loading...</div>}
      {(openModal === false && updateModal === false) &&
      <>
      <Button onClick={() => dispatch(getCategories())}>
        <FontAwesomeIcon icon={faRotate} />
      </Button>
      <Button onClick={() => setOpenModal(true)}>
        <FontAwesomeIcon icon={faCirclePlus} />
      </Button>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category._id}>
              <td>{category.name}</td>
              <td>{category.description}</td>
              <td key={category._id}>
                <Button onClick={() => {}}>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => {
                  setUpdateModal(true)
                  setUpdateId(category._id)
                  console.log(updateId)
                  }} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </>}
      {openModal && <AddModal type='category' formArr={categoryArray} closeModal={setOpenModal} title="Adicionar Categoria" />}
      {updateModal && <UpdateModal type='product' item={updateId} formArr={categoryArray} closeModal={setUpdateModal} title="Adicionar Produto" />}
    </Container>

  )
}

export default Categories