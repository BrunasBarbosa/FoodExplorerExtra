import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/UserPages/Home';
import { Menu } from '../pages/UserPages/Menu';
import { Details } from '../pages/UserPages/Details';
import { Favorites } from '../pages/UserPages/Favorites';
// import { Cart } from '../pages/UserPages/Cart';
// import { Order } from '../pages/UserPages/Order';

export function UserRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/menu' element={<Menu />}/>
      <Route path='/details/:id' element={<Details />}/>
      <Route path='/favorites' element={<Favorites />}/>
      {/* <Route path='/cart' element={<Cart />}/> */}
      {/* <Route path='/order' element={<Order />}/> */}
    </Routes>
  );
}