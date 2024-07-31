import React, { memo, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactCard } from 'src/components/ContactCard';
import { ContactDto } from 'src/types/dto/ContactDto';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';

export const FavoritListPage = memo(() => {

  const contactFromStore = useSelector((state: RootState) => state.contacts);
  const favoriteContactsFromStore = useSelector((state: RootState) => state.favoriteContacts);
  const [contacts, setContacts] = useState<ContactDto[]>([])

  useEffect(() => {
    // @ts-ignore 
    let res = contactFromStore.filter((contact) => favoriteContactsFromStore.includes(contact.id));
    setContacts(res);
  }, [contactFromStore, favoriteContactsFromStore])


  return (
    <Row xxl={4} className="g-4">
      {contacts.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
})
