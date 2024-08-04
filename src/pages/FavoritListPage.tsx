import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactCard } from 'src/components/ContactCard';
import { ContactDto } from 'src/types/dto/ContactDto';
import { ContactsStore } from 'src/store/contactsStore';
import { FavoriteContactsStore } from 'src/store/favoriteStore';
import { observer } from 'mobx-react-lite';


export const FavoritListPage = observer(() => {

  const [contacts, setContacts] = useState<ContactDto[] | []>([])

  useEffect(() => {

    let res: ContactDto[] = []

    FavoriteContactsStore.favoriteContacts.forEach((id: any) => {
      ContactsStore.contacts.forEach((contact: ContactDto) => {
        if (contact.id === id) {
          res.push(contact)
        }
      })
    })

    setContacts(res);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ContactsStore.contacts, FavoriteContactsStore.favoriteContacts])

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
