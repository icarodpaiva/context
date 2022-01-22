import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { MainRoutes } from './routes/MainRoutes'
import { useContext } from 'react'
import { Context } from './contexts/Context'

const App = () => {
  const { state, dispatch } = useContext(Context)

  const handleSwitchTheme = () => {
    if (state.theme.status === 'light') {
      dispatch({
        type: 'CHANGE_STATUS',
        payload: {
          status: 'dark'
        }
      })
    } else {
      dispatch({
        type: 'CHANGE_STATUS',
        payload: {
          status: 'light'
        }
      })
    }
  }

  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: state.theme.status === 'light' ? '#fff' : '#000',
          color: state.theme.status === 'light' ? '#000' : '#fff'
        }}
      >
        <h1>Título da Página</h1>
        Tema: {state.theme.status}
        <hr />
        <button onClick={handleSwitchTheme}>Switch Theme</button>
        <hr />
        <MainRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App
