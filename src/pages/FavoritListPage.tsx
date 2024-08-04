import React, { memo, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactCard } from 'src/components/ContactCard';
import { ContactDto } from 'src/types/dto/ContactDto';
import { useAppSelector } from 'src/hooks/hooks';
import { RootState } from 'src/store/store';
import { useGetContactsQuery } from 'src/reducers/contactsReducer';

export const FavoritListPage = memo(() => {

  const { data: contactFromStore } = useGetContactsQuery();
  const favoriteContactsFromStore = useAppSelector((state: RootState) => state.favoriteContacts);
  const [contacts, setContacts] = useState<ContactDto[] | undefined>([])

  useEffect(() => {
    let res = contactFromStore?.filter((contact) => favoriteContactsFromStore.includes(contact.id));
    setContacts(res);
  }, [contactFromStore, favoriteContactsFromStore])

  return (
    <Row xxl={4} className="g-4">
      {contacts?.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
})
