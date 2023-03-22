import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/selectors';
import { useEffect } from 'react';

import { fetchContacts } from 'redux/contacts/operations';
import { Item } from 'components/ContactListItem/ContactListItem';
import { Filter } from 'components/Filter/Filter';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  // const { error } = useSelector(getContacts);
  const filteredContacts = useSelector(getFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <>
        <Filter />
        <List>
          {filteredContacts.map(({ id, name, number }) => (
            <Item key={id} id={id} name={name} number={number} />
          ))}
        </List>
      </>
    </div>
  );
};
