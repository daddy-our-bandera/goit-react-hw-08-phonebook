import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import { Btn, Form, FormBox, UserBox } from './ContactForm.styled';

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
      toast.error(`${newName}  or <${newNumber}> is already in contacts`, {
        theme: 'colored',
      });
      return;
    }
    dispatch(addContact(data));
    reset();
  };
  return (
    <FormBox>
      <h2>Phonebook</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <UserBox>
          <input
            placeholder="Phone:"
            {...register('name', {
              required: 'this field is required!',
            })}
            type="name"
          />
          <label htmlFor="">
            {errors?.name && <p>{errors.name.message || 'Error!'}</p>}
          </label>
        </UserBox>
        <UserBox>
          <input
            placeholder="Number:"
            {...register('number', {
              required: 'this field is required!',
              minLength: {
                min: 3,
                message: 'length must be at least 3 characters!',
              },
            })}
            type="tel"
          />
          <label htmlFor="">
            {errors?.number && <p>{errors.number.message || 'Error!'}</p>}
          </label>
        </UserBox>
        <Btn type="submit" disabled={!isValid}>
          add contact
        </Btn>
      </Form>
    </FormBox>
  );
};

export default ContactForm;
