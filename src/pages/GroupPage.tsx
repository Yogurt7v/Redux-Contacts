import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ContactDto } from 'src/types/dto/ContactDto';
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';
import { GroupContactsCard } from 'src/components/GroupContactsCard';
import { Empty } from 'src/components/Empty';
import { ContactCard } from 'src/components/ContactCard';
import { observer } from 'mobx-react-lite';
import { ContactsStore } from 'src/store/contactsStore';
import { GroupsStore } from 'src/store/groupStore';

export const GroupPage = observer(() => {

  const { groupId } = useParams<{ groupId: string }>();
  const [contacts, setContacts] = useState<ContactDto[] | undefined>([]);
  const [groupContacts, setGroupContacts] = useState<GroupContactsDto>();

  useEffect(() => {
    const findGroup = GroupsStore.groups.find(({ id }) => id === groupId);
    setGroupContacts(findGroup);
    setContacts(() => {
      if (findGroup) {
        return ContactsStore.contacts.filter(({ id }) => findGroup.contactIds.includes(id))
      }
      return [];
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupId]);

  return (
    <Row className="g-4">
      {groupContacts ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                <GroupContactsCard groupContacts={groupContacts} />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className="g-4">
              {contacts?.map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))}
            </Row>
          </Col>
        </>
      ) : <Empty />}
    </Row>
  );
});
