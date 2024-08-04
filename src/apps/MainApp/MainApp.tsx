import React, { useEffect } from 'react';
import './MainApp.scss';
import { ThemeProvider } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from 'src/components/Layout';
import { ContactListPage, GroupPage, ContactPage, FavoritListPage, GroupListPage } from 'src/pages';
import { ContactsStore } from 'src/store/contactsStore';
import { observer } from 'mobx-react-lite';
import { GroupsStore } from 'src/store/groupStore';
import { FavoriteContactsStore } from 'src/store/favoriteStore';


export const MainApp = observer(() => {

  useEffect(() => {
    ContactsStore.getContacts()
    GroupsStore.getGroups()
    FavoriteContactsStore.getFavorite()
  }, []);



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
});
