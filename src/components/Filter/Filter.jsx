import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';

import { filterChange } from 'redux/contacts/filterSlice';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { Input, LoaderBox, SubTitleBox } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector(getContacts) || [];
  const filter = useSelector(getFilter);

  const handleFilter = event => {
    dispatch(filterChange(event.currentTarget.value));
  };
  return (
    <div>
      <SubTitleBox>
        <LoaderBox> {isLoading && <Loader></Loader>}</LoaderBox>

        <h2>Contacts</h2>
      </SubTitleBox>
      {items.length ? (
        <Input
          autoComplete="off"
          name="name"
          type="text"
          placeholder="find contacts by name"
          value={filter}
          onChange={handleFilter}
        ></Input>
      ) : (
        <h1>No contacts added</h1>
      )}
    </div>
  );
};
