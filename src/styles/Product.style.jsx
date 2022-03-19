import styled from 'styled-components'

export const Button = styled.button`
  background: transparent;
  font-size: 15px;
  font-weight: bold;
  border-radius: 2rem;
  border: 2px solid #e5e5e5;
  color: blackd;
  margin: 0 1em;
  padding: 0.25em 1em;

  &:active{
    transition: all 0.4s ease-in-out;
    background: gray;
  }

  &:hover{
    transition: all 0.4s ease-in-out;
    background: gray;
  }
`
export const Container = styled.div`
    margin-top: 4rem;
    table {
        width: 100%;
        border-spacing: 0 0.5rem;
        th {
            color: white;
            background: black;
            font-weight: bold;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }
        td {
            padding: 1rem 2rem;
            border: 0;
            background: #ffffff;
            color: black;
            border-radius: 0.25rem;
        }
    }
`