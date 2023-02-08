import Container from "@mui/material/Container";
import {Routes, Route} from "react-router-dom";
import { Header } from "./components";
import { useDispatch, useSelector} from "react-redux";
import { Home, FullPost, Registration, AddPost, Login } from "./pages";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";
import React from 'react';
import { Fragment } from "react";



function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth); 
  React.useEffect(() => {
    dispatch(fetchAuthMe());
  },[])
  return (
    <Fragment>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path='/' element ={<Home />} />
          <Route path='posts/:id' element ={<FullPost />} />
          <Route path='posts/:id/edit' element ={<AddPost />} />
          <Route path='/add-post' element ={<AddPost />} />
          <Route path='/register' element ={<Registration />} />
          <Route path='/login' element ={<Login />} />
        </Routes>
      </Container>
    </Fragment>
  );
}

export default App;
