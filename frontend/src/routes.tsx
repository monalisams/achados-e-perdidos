import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CompleteHistory } from './components/completeHistory';
import { Historys } from './components/historys';
import { Home } from './components/home';
import { Items } from './components/items';
import { ItemsForm } from './components/itemsForm';
import { LoginForm } from './components/loginForm/loginForm';
import PrivateRoute from './components/private/privateRoute';

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<LoginForm/>} />
            <Route path='/items' element={<PrivateRoute><Items/></PrivateRoute>} />
            <Route path='/items/cadastro' element={<PrivateRoute><ItemsForm/></PrivateRoute>} />
            <Route path='/items/edit/:id' element={<PrivateRoute><ItemsForm/></PrivateRoute>} />
            <Route path='/items/historico/:id' element={<PrivateRoute><Historys/></PrivateRoute>} />
            <Route path='/items/historico-completo/:id' element={<PrivateRoute><CompleteHistory/></PrivateRoute>} />
        </Routes>
    </BrowserRouter>
)

export default AppRoutes;