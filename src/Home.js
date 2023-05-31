import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import Description from './Component/Description/Description';

const Home = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/movie/:id' element={<Description/>}/>
        </Routes>
    </div>
  );
};

export default Home;