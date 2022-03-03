import { FC } from 'react';
import { Link } from 'react-router-dom';

const NotFound: FC = () => (
  <>
    <h2>It looks like you're lost</h2>
    <p>
      <Link to="/">Go to the home page</Link>
    </p>
  </>
);

export default NotFound;
