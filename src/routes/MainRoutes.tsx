import { useRoutes } from 'react-router-dom'
import ShowData from '../pages/ShowData/ShowData'
import SignUp from '../pages/SignUp/SignUp'

export const MainRoutes = () => {
  return useRoutes([
    {
      path: '/',
      element: <SignUp />
    },
    {
      path: '/exibir',
      element: <ShowData />
    }
  ])
}
