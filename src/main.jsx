import { createRoot } from 'react-dom/client';
import './styles/resets.css';

import { BrowserRouter, Route, Routes } from 'react-router';
import { UsersPage } from './pages/UsersPage/UsersPage';
import { HomePage } from './pages/HomePage/HomePage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { MainLayout } from './layouts/MainLayout';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='users' element={<UsersPage />} />
        <Route path='contacts' element={<ContactsPage />}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
