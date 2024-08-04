import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactCard } from 'src/components/ContactCard';
import { FilterForm, FilterFormValues } from 'src/components/FilterForm';
import { ContactDto } from 'src/types/dto/ContactDto';
import { ContactsStore } from 'src/store/contactsStore';
import { GroupsStore } from 'src/store/groupStore';
import { observer } from 'mobx-react-lite';


export const ContactListPage = observer(() => {

  const [contacts, setContacts] = useState<ContactDto[] | undefined>(ContactsStore.contacts);

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts: ContactDto[] | undefined = ContactsStore.contacts;

    if (fv.name) {
      const fvName = fv.name.toLowerCase();
      findContacts = findContacts?.filter(({ name }) => (
        name.toLowerCase().indexOf(fvName) > -1
      ))
    }

    if (fv.groupId) {
      const groupContacts = GroupsStore.groups.find(({ id }) => id === fv.groupId);

      if (groupContacts) {
        findContacts = findContacts?.filter(({ id }) => (
          groupContacts.contactIds.includes(id)
        ))
      }
    }
    setContacts(findContacts)
  }

  useEffect(() => {
    setContacts(ContactsStore.contacts)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ContactsStore.contacts])

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm groupContactsList={GroupsStore.groups} initialValues={{}} onSubmit={onSubmit} />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {ContactsStore.contacts.length === 0 ? <p>Loading ...</p> :
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
})
