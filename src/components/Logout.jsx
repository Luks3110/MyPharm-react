import React, { useEffect } from 'react'
import { logoutStart } from '../redux/actions/Auth.actions';
import { useDispatch } from 'react-redux';

const Logout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => dispatch(logoutStart()), 1000);
    }, [])
    
    return (
    <div>Você saiu da página</div>
  )
}

export default Logout