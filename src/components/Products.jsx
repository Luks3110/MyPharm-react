import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, getProducts } from "../redux/actions/Products.actions";
import AddModal from "./Modals/AddModal";
import UpdateModal from './Modals/UpdateModal';
import {
  faCirclePlus,
  faPenToSquare,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Button } from "../styles/Product.style";
import { productArray } from "../data/formData";


const Products = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [updateId, setUpdateId] = useState("")
  const products = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.isLoading);  

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Container>
      <h1>Produtos</h1>
      {isLoading && <div>Loading...</div>}
      {(openModal === false && updateModal === false) &&
      <>
      <Button onClick={() => dispatch(getProducts())}>
        <FontAwesomeIcon icon={faRotate} />
      </Button>
      <Button onClick={() => setOpenModal(true)}>
        <FontAwesomeIcon icon={faCirclePlus} />
      </Button>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Marca</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>R${product.price}</td>
              <td>{product.categories ? product.categories.name : "Sem categoria"}</td>
              <td>{product.brand ? product.brand.name : "Sem marca"}</td>
              <td key={product._id}>
                <Button onClick={() => {}}>
                  <FontAwesomeIcon icon={faPenToSquare} onClick={() => {
                    setUpdateModal(!updateModal)
                    setUpdateId(product._id)
                    }} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </>}

      {openModal && <AddModal type='product' formArr={productArray} closeModal={setOpenModal} closeUpdateModal={setUpdateModal} title="Adicionar Produto" />}
      {updateModal && <UpdateModal type='product' item={updateId} formArr={productArray} closeModal={setUpdateModal} title="Adicionar Produto" />}
    </Container>
  );
};

export default Products;
