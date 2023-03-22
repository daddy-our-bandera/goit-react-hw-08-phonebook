import React from 'react';

import { Form } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    getValues,
  } = useForm({ mode: 'onChange' });
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const onSubmit = data => {
    const newName = getValues('name');
    const newNumber = getValues('number');

    if (
      contacts.items.some(
        ({ name }) => name.toLowerCase() === newName.toLowerCase()
      ) ||
      contacts.items.some(
        ({ number }) => number.toLowerCase() === newNumber.toLowerCase()
      )
    ) {
      alert(`<${newName}> or <${newNumber}> is already in contacts`);
      return;
    }

    dispatch(addContact(data));
    reset();
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="">
        Name:
        <input
          {...register('name', {
            required: 'this field is required!',
            minLength: {
              value: 3,
              message: 'length must be at least 3 characters!',
            },
          })}
          type="name"
        />
      </label>
      <div>{errors?.name && <p>{errors.name.message || 'Error!'}</p>}</div>
      <label htmlFor="">
        Number:
        <input
          {...register('number', {
            required: 'this field is required!',
            minLength: {
              min: 3,
              message: 'length must be at least 3 characters!',
            },
          })}
          type="tel"
        />
      </label>

      <input type="submit" disabled={!isValid} />
    </Form>
  );
  // const dispatch = useDispatch();
  // const contacts = useSelector(getContacts);
  // const [inputValues, setInputValues] = useState({
  //   name: '',
  //   number: '',
  // });
  // const handleOnChange = event => {
  //   const { name, value } = event.target;
  //   setInputValues({ ...inputValues, [name]: value });
  // };
  // const handleSubmit = evt => {
  //   evt.preventDefault();
  //   const newName = evt.target.name.value;
  //   const newNumber = evt.target.number.value;
  //   if (
  //     contacts.items.some(
  //       ({ name }) => name.toLowerCase() === newName.toLowerCase()
  //     ) ||
  //     contacts.items.some(
  //       ({ number }) => number.toLowerCase() === newNumber.toLowerCase()
  //     )
  //   ) {
  //     alert(`<${newName}> or <${newNumber}> is already in contacts`);
  //     return;
  //   }
  //   dispatch(addContact(inputValues));
  //   setInputValues({ name: '', number: '' });
  // };
  // return (
  //   <Form onSubmit={handleSubmit}>
  //     <label>
  //       <input
  //         type="text"
  //         name="name"
  //         placeholder="name"
  //         value={inputValues.name}
  //         onChange={handleOnChange}
  //         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  //         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  //         required
  //       />
  //     </label>
  //     <label>
  //       <input
  //         type="tel"
  //         name="number"
  //         placeholder="number"
  //         value={inputValues.number}
  //         onChange={handleOnChange}
  //         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  //         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  //         required
  //       />
  //     </label>
  //     <button type="submit">add contact</button>
  //   </Form>
  // );
};

export default ContactForm;
