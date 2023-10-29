import React from 'react'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import CartWidget from './componentes/CartWidget/CartWidget';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const App = () => {
    return (
        <>
            <div className='app'>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                            <Route path='/' element={<ItemListContainer />} />
                            <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
                            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
                    </Routes>
                        
                </BrowserRouter>
            </div>
        </>
    )
}
export default App;
