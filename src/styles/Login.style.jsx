import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #D7DCE8;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  align-items: center;
  p.cadastro{
    font-weight: bold;
    font-size: 0.8rem;
  }
  @media (max-width: 550px){
    h1.title{
      font-size: 1rem;
    }
    p.cadastro{
      font-size: 0.5rem;
    }
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 1rem ;
  padding: 2rem;
  height: 75vh;
  width: auto;
  box-sizing: border-box;
  @media (max-width: 400px){
    padding: 0.5rem;
    align-items: center;
    flex-direction: column;
  }
`

export const LeftSide = styled.div`
  flex-direction: start;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30vw;
  padding: 5rem;
  background-color: #FEFEFE;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  @media (max-width: 499px){
    border-radius: 2rem;
    
  }
`

export const RightSide = styled.div`
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 35vw;
  
  background: linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%);
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  @media (max-width: 650px) {
    width: 25vw;
  }
`

export const Field = styled.div`
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
  flex-direction: start;
  align-items: center;
`

export const Input = styled.input`
  position: relative;
  width: 25vw;
  height: 1rem;
  padding: 0.3rem;
  border-top: none;
  border-right: none;
  border-left: none;
  font-weight: bold;
  :focus{
    outline:0;
  }
  @media (max-width: 400px) {
    
  }
`

export const Button = styled.button`
  width: 12rem;
  border-radius: 2rem;
  padding: 0.5rem;
  background-color: #565CEA;
  color: white;
  font-weight: bold;
  border: 1px; 
  @media (max-width: 400px) {
    width: 7rem;
  }
`