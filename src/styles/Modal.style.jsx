import styled from 'styled-components'

export const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(200, 200, 200);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContainer = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`

export const CreateButton = styled.button``

export const CancelButton = styled.button``

export const Title = styled.div``

export const Body = styled.div`
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  text-align: center;
`

export const Footer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`