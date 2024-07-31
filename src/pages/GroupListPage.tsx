import React, { memo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { GroupContactsCard } from 'src/components/GroupContactsCard';
import { useAppSelector } from 'src/hooks/hooks';
import { RootState } from 'src/store/store';

export const GroupListPage = memo(() => {

  const groupContactsState = useAppSelector((state: RootState) => state.groupContacts);

  return (
    <Row xxl={4}>
      {groupContactsState.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  );
});
