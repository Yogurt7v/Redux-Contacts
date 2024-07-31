import React, { useEffect, useState } from 'react';
import './MainApp.scss';
import { ThemeProvider } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from 'src/components/Layout';
import { ContactListPage, GroupPage, ContactPage, FavoritListPage, GroupListPage } from 'src/pages';
import { ContactDto } from 'src/types/dto/ContactDto';
import { FavoriteContactsDto } from 'src/types/dto/FavoriteContactsDto';
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';
import { DATA_CONTACT, DATA_GROUP_CONTACT } from 'src/__data__';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContactsAction, fetchFavoriteContactsAction, fetchGroupContactsAction } from 'src/actions/actions';
import { Dispatch } from 'redux';


export const MainApp = () => {
  const dispatch = useDispatch<Dispatch<any>>();
  const contactFromStore = useSelector((state: ContactDto[] | []) => state);



  useEffect(() => {
    dispatch(fetchContactsAction());
    dispatch(fetchFavoriteContactsAction())
    dispatch(fetchGroupContactsAction())
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
