import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getFilteredContacts } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Item } from 'components/ContactListItem/ContactListItem';
import { Filter } from 'components/Filter/Filter';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
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
