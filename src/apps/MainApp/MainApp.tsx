import React, { useEffect } from 'react';
import './MainApp.scss';
import { ThemeProvider } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from 'src/components/Layout';
import { ContactListPage, GroupPage, ContactPage, FavoritListPage, GroupListPage } from 'src/pages';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store/store';
// import { getGroupContactsAsync } from 'src/reducers/groupReducer';
import { getFavoriteContactsAsync } from 'src/reducers/favoriteReducer';


export const MainApp = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // dispatch(getGroupContactsAsync())
    dispatch(getFavoriteContactsAsync())
  }, [dispatch]);

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
              <ContactListPage />
            } />
            <Route path="contact">
              <Route index element={
                <ContactListPage />
              } />
              <Route path=":contactId" element={
                <ContactPage />
              } />
            </Route>
            <Route path="groups">
              <Route index element={
                <GroupListPage />
              } />
              <Route path=":groupId" element={
                <GroupPage />
              } />
            </Route>
            <Route path="favorit" element={
              <FavoritListPage />
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
