import { observer } from 'mobx-react-lite';
import { Col, Row } from 'react-bootstrap';
import { GroupContactsCard } from 'src/components/GroupContactsCard';
import { GroupsStore } from 'src/store/groupStore';

export const GroupListPage = observer(() => {

  return (
    <Row xxl={4}>
      {GroupsStore.groups.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  );
});
