import React from 'react';
import Box from '@material-ui/core/Box';
import SearchInput from './components/SearchInput';
import Table from './components/Table';
import { ContextProvider } from './context';

const App = () => {
  return (
    <ContextProvider>
      <Box>
        <SearchInput />
        <Table />
      </Box>
    </ContextProvider>
  );
}

export default App;
