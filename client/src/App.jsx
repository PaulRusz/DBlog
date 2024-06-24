import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const Client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={Client}>
        <div className='flex-column justify-center align-center min-100-vh bg-primary'>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;