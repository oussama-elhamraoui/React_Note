import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import NotePage from './pages/NotePage';
import FavoritePage from './pages/FavoritePage';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<NotePage/>}/>
        <Route path='/favorite' element={<FavoritePage/>}/>
      </Route>
      )
  );

  return <RouterProvider router={router}/>;
}

export default App
