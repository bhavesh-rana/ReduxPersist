// import * as React from 'react';
// import {Provider} from 'react-redux';
// import MainNavigation from './src/navigation/mainNavigation';
// import {store, persistor} from './src/redux/store/store';
// import {PersistGate} from 'redux-persist/integration/react';
// import {CounterContext} from './src/hooks/Usercontext';
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// const client = new ApolloClient({
//   uri: 'https://countries.trevorblades.com/graphql',
//   cache: new InMemoryCache()
// });
// const App = () => {
//   return (

//     <Provider store={store}>
//     {/* //   <PersistGate persistor={persistor}> */}

//       <MainNavigation />

//     {/* //   </PersistGate> */}
//      </Provider>

//   );
// };

// export default App;
import {View, Text} from 'react-native';
import React from 'react';
import MainNavigation from './src/navigation/mainNavigation';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import Graphql from './src/screen/Graphql';

// Initialize Apollo Client
const client = new ApolloClient({
  uri : 'https://graphqlzero.almansi.me/api',
  //uri: 'https://countries.trevorblades.com/graphql',
   //uri: 'https://dummyjson.com/users',
 // uri:'https://jsonplaceholder.typicode.com/posts',
  cache: new InMemoryCache(),
});
 
 

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={{flex:1}}>
        <Text style={{}}>My Countries App</Text>
        <MainNavigation />
      </View>
    </ApolloProvider>
  );
}
