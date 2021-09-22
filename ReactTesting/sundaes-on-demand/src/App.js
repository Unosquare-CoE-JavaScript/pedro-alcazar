import './App.css';
import OrderEntry from './pages/entry/OrderEntry';
import { Container } from 'react-bootstrap';
import { OrderDetailsProvider } from './context/Context';


function App() {
  
  return (
    <Container>
      <OrderDetailsProvider>
        {/* Summary page and entry page need provider */}
        <OrderEntry />
      </OrderDetailsProvider>
      {/*confirmation page does not need provider */}
    </Container>
  );
}

export default App;
