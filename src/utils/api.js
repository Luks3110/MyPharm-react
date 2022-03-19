import axios from 'axios'
const url = 'http://' + process.env.REACT_APP_API_URL
const url_heroku = 'http://' + process.env.REACT_APP_API_URL_HEROKU


const userInstance = axios.create({
    baseURL: `${url}/usuarios/auth`,
});

const productInstance = axios.create({
    baseURL: `${url}/produtos`,
})

const categoriesInstance = axios.create({
    baseURL: `${url}/categorias`,
})

const brandsInstance = axios.create({
    baseURL: `${url}/marcas`,
})

export const registerUser = ({ name, email, password, confirmPassword }) => {
    return userInstance
      .post('/cadastro', {name, email, password, confirmPassword})
      .then((user) => {
        alert('Registro realizado com sucesso! Faça Login para continuar')  
        return user.data})
      .catch((error) => Promise.reject(error));
  };
  
  export const loginUser = ({ email, password }) => {
    
    return userInstance
      .post('/login', {email, password}, {withCredentials: true})
      .then((user) => user.data.user)
      .catch((error) => Promise.reject(error));
  };
  
  export const logoutUser = () => {
    return userInstance
      .get('/logout', {withCredentials: true})
      .then((res) => {
        console.log(res)
        return res
      })
      .catch((error) => Promise.reject(error));
  };

export const getProducts = () => {
    return productInstance.get(`/`)
        .then(response => response.data.produtos)
        .catch(err => Promise.reject(err))
}
export const addProduct = (product) => {
    return productInstance.post('/', product)
        .then(response => console.log(response))
        .catch(err => Promise.reject(err))
}

export const getCategories = () => {
    return categoriesInstance.get('/')
        .then(response => response.data.categories)
        .catch(err => Promise.reject(err))
}

export const addCategories = ({name, description}) => {
    return categoriesInstance.post('/',{name, description} )
        .then(response => response.data.categories)
        .catch(err => Promise.reject(err))
}

export const getBrands = () => {
    return brandsInstance.get('/')
        .then(response => response.data.marcas)
        .catch(err => Promise.reject(err))
}

export const addBrands = () => {
    return brandsInstance.get('/')
        .then(response => response.data.marcas)
        .catch(err => Promise.reject(err))
}