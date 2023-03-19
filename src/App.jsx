import Container from 'components/Shared/Container';
import Navbar from 'components/Navbar/Navbar';

import UserRoutes from 'components/UserRoutes/UserRoutes';

const App = () => {
  return (
    <Container>
      <Navbar />
      <UserRoutes />
    </Container>
  );
};
export default App;
