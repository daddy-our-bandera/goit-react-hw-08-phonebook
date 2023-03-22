import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Section } from 'components/Section/Section.styled';

export default function Contacts() {
  return (
    <div>
      <Section>
        <h1>Phonebook</h1>
        <ContactForm />
      </Section>

      <Section>
        <ContactList />
      </Section>
    </div>
  );
}
