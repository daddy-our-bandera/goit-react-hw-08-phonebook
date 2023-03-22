import phonebook from 'images/contactBookIcon.jpg';
export default function HomePage() {
  return (
    <div>
      <p>
        <b>Please login to watch your contacts</b>
      </p>
      <img
        width="360"
        height="360"
        src={phonebook}
        alt="phonebook"
        loading="lazy"
      />
    </div>
  );
}
