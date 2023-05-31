import { Routes, Route } from 'react-router-dom';
import { HomeAdm } from '../pages/AdmPages/HomeAdm';
import { MenuAdm } from '../pages/AdmPages/MenuAdm';
import { DetailsAdm } from '../pages/AdmPages/DetailsAdm';
import { New } from '../pages/AdmPages/New';
import { Update } from '../pages/AdmPages/Update';

export function AdmRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomeAdm />}/>
      <Route path='/menu' element={<MenuAdm />}/>
      <Route path='/details/:id' element={<DetailsAdm />}/>
      <Route path='/new' element={<New />}/>
      <Route path='/dish/:id' element={<Update />}/>
    </Routes>
  );
}