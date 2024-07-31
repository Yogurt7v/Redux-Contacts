import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactCard } from 'src/components/ContactCard';
import { FilterForm, FilterFormValues } from 'src/components/FilterForm';
import { ContactDto } from 'src/types/dto/ContactDto';
import { useAppSelector } from 'src/hooks/hooks';
import { RootState } from 'src/store/store';


export const ContactListPage = () => {
  const contactFromStore = useAppSelector((state: RootState) => state.contacts);
  const groupContactsState = useAppSelector((state: RootState) => state.groupContacts);
  const [contacts, setContacts] = useState<ContactDto[]>(contactFromStore)



  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts: ContactDto[] = contactFromStore;

    if (fv.name) {
      const fvName = fv.name.toLowerCase();
      findContacts = findContacts.filter(({ name }) => (
        name.toLowerCase().indexOf(fvName) > -1
      ))
    }

    if (fv.groupId) {
      const groupContacts = groupContactsState.find(({ id }) => id === fv.groupId);

      if (groupContacts) {
        findContacts = findContacts.filter(({ id }) => (
          groupContacts.contactIds.includes(id)
        ))
      }
    }
    setContacts(findContacts)
  }

  useEffect(() => {
    setContacts(contactFromStore)
  }, [contactFromStore])

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm groupContactsList={groupContactsState} initialValues={{}} onSubmit={onSubmit} />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {(contacts.length === 0) ? <p>Loading ...</p> :
            (contacts.map((contact) => (
              <Col key={contact.id}>
                <ContactCard contact={contact} withLink />
              </Col>
            ))
            )}
        </Row>
      </Col>
    </Row>
  );
}
