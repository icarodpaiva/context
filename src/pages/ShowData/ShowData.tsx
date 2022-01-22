import { useContext } from 'react'
import { Context } from '../../contexts/Context'

import { Link } from 'react-router-dom'

const ShowData = () => {
  const { state, dispatch } = useContext(Context)

  return (
    <div>
      <h3>Tela ShowData</h3>
      {state.user.name ? (
        <>
          MEU NOME É: {state.user.name} <br />
          EU TENHO: {state.user.age} ANOS
        </>
      ) : (
        'Não há informações'
      )}

      <br />
      <Link to="/">signup</Link>
    </div>
  )
}

export default ShowData
