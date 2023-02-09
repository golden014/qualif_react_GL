import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ItemList from './ItemList';
import Favorites from './Favorites'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const client = new ApolloClient({

  uri: 'https://fruits-api.netlify.app/graphql',

  cache: new InMemoryCache(),

});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <ApolloProvider client={client}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/itemList' element={<ItemList />}></Route>
        <Route path='/favorites' element={<Favorites />}></Route>
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
 
);


