import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBrands } from "../redux/actions/Brands.actions";
import AddModal from "./Modals/AddModal";
import UpdateModal from './Modals/UpdateModal';
import {
  faCirclePlus,
  faPenToSquare,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Button } from "../styles/Product.style";
import { brandArray } from "../data/formData";


const Brands = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const brands = useSelector((state) => state.brands.brands);
  const isLoading = useSelector((state) => state.isLoading);
  useEffect(() => {
    dispatch(getBrands());
  }, []);

  return (
    <Container>
      <h1>Categorias</h1>
      {isLoading && <div>Loading...</div>}
      {(openModal === false && updateModal === false) &&
      <>
      <Button onClick={() => dispatch(getBrands())}>
        <FontAwesomeIcon icon={faRotate} />
      </Button>
      <Button onClick={() => setOpenModal(true)}>
        <FontAwesomeIcon icon={faCirclePlus} />
      </Button>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand) => (
            <tr key={brand._id}>
              <td key={brand._id}>{brand.name}</td>
              <td key={brand._id}>
                <Button onClick={() => {}}>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => setUpdateModal(!updateModal)} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </>
      }
      {openModal && <AddModal type='brand' formArr={brandArray} closeModal={setOpenModal} title="Adicionar Marca"/>}
      {updateModal && <UpdateModal type='product' formArr={brandArray} closeModal={setUpdateModal} title="Adicionar Produto" />}
    </Container>

  )
}

export default Brands