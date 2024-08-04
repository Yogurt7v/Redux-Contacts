import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactCard } from 'src/components/ContactCard';
import { FilterForm, FilterFormValues } from 'src/components/FilterForm';
import { ContactDto } from 'src/types/dto/ContactDto';
import { useGetContactsQuery } from 'src/reducers/contactsReducer';
import { useGetGroupContactsQuery } from 'src/reducers/groupReducer';


export const ContactListPage = () => {
  const { data: contatsApi, isLoading } = useGetContactsQuery()
  const { data: groupContactsState } = useGetGroupContactsQuery()
  const [contacts, setContacts] = useState<ContactDto[] | undefined>(contatsApi)

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts: ContactDto[] | undefined = contatsApi;

    if (fv.name) {
      const fvName = fv.name.toLowerCase();
      findContacts = findContacts?.filter(({ name }) => (
        name.toLowerCase().indexOf(fvName) > -1
      ))
    }

    if (fv.groupId) {
      const groupContacts = groupContactsState?.find(({ id }) => id === fv.groupId);

      if (groupContacts) {
        findContacts = findContacts?.filter(({ id }) => (
          groupContacts.contactIds.includes(id)
        ))
      }
    }
    setContacts(findContacts)
  }

  useEffect(() => {
    setContacts(contatsApi)
  }, [contatsApi])

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm groupContactsList={groupContactsState} initialValues={{}} onSubmit={onSubmit} />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {isLoading ? <p>Loading ...</p> :
            (contacts?.map((contact) => (
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
