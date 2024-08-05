import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ContactDto } from 'src/types/dto/ContactDto';
import { ContactCard } from 'src/components/ContactCard';
import { Empty } from 'src/components/Empty';
import { ContactsStore } from 'src/store/contactsStore';
import { observer } from 'mobx-react-lite';


export const ContactPage = observer(() => {
  const { contactId } = useParams<{ contactId: string }>();
  const [contact, setContact] = useState<ContactDto>();
  const contactsState = ContactsStore.contacts

  useEffect(() => {
    setContact(() => ContactsStore.contacts.find(({ id }) => id === contactId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contactId, contactsState]);


  if (!contact) return <p>Loading ...</p>

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  );
});
