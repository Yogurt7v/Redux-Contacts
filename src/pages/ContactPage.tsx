import React, { useEffect, useState, memo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ContactDto } from 'src/types/dto/ContactDto';
import { ContactCard } from 'src/components/ContactCard';
import { Empty } from 'src/components/Empty';
import { RootState } from 'src/store/store';
import { useAppSelector } from 'src/hooks/hooks';


export const ContactPage = memo(() => {
  const contactFromStore = useAppSelector((state: RootState) => state.contacts);
  const contactsState = useState<ContactDto[]>(contactFromStore)
  const { contactId } = useParams<{ contactId: string }>();
  const [contact, setContact] = useState<ContactDto>();

  useEffect(() => {
    setContact(() => contactsState[0].find(({ id }) => id === contactId));
  }, [contactId]);

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  );
});
