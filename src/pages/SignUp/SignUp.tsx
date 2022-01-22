import React, { useContext, useState } from 'react'
import { Context } from '../../contexts/Context'

import { Link } from 'react-router-dom'

const SignUp = () => {
  const { state, dispatch } = useContext(Context)

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'CHANGE_NAME',
      payload: {
        name: e.target.value
      }
    })
  }

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'CHANGE_AGE',
      payload: {
        age: parseInt(e.target.value)
      }
    })
  }

  return (
    <div>
      <h3>Tela SignUp</h3>
      <h5>Tema atual: {state.theme.status}</h5>
      <input
        type="text"
        placeholder="Digite um nome"
        value={state.user.name}
        onChange={handleNameChange}
      />
      <input
        type="text"
        placeholder="Digite uma idade"
        value={state.user.age}
        onChange={handleAgeChange}
      />
      <br />
      <Link to="/exibir">showddata</Link>
    </div>
  )
}

export default SignUp
