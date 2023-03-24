import { Section } from 'components/Section/Section.styled';
import phonebook from 'images/contactBookIcon.jpg';
import { Link } from 'react-router-dom';
import { HomeBox } from './HomePage.styled';
export default function HomePage() {
  return (
    <Section>
      <HomeBox>
        <h2>
          <b>
            Please {<Link to="login">login</Link>} or
            {<Link to="register"> register</Link>} to watch your contacts
          </b>
        </h2>
        <img
          width="300"
          height="300"
          src={phonebook}
          alt="phonebook"
          loading="lazy"
        />
      </HomeBox>
    </Section>
  );
}
