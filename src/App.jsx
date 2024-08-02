import React from 'react'
import ImageItem from './components/ImageItem'
import ImageList from './components/ImageList'
import SearchField from './components/SearchField'
import ImageContextProvider from './contexts/ImageContextProvider'

const App = () => {
  return (
    <ImageContextProvider>
      <div>
        <SearchField />
        <ImageList />
      </div>
    </ImageContextProvider>
  );
}

export default App