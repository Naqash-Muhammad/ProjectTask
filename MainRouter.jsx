import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ButtonCard from './ButtonCard';
import HideCard from './hide/HideCard';
import CardB from './Button&Card/CardB';

const MainRouter = () => {
  return (
    <div>
        {/* <BrowserRouter>
                <Routes>
                     <Route>
                          <Route path="/" element={<ButtonCard />}></Route>
                          <Route path="/hideCard" element={<HideCard />}></Route>
                     </Route>
                </Routes>
        </BrowserRouter> */}



        <HashRouter>
              <Routes>
                <Route exact path="/" element={<ButtonCard />}>
                  <Route exact path="/hideCard" element={<HideCard />} />
                  <Route index element={<CardB />} />
                </Route>
              </Routes>
       </HashRouter>

    </div>
  )
}

export default MainRouter;