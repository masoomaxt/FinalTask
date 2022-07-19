import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, NavLink } from 'react-router-dom';

import Form from './componenets/form';
import Home from './componenets/Home/Home';


import NavBar from './componenets/NavBar/NavBar';
import Bookmarks from './componenets/Bookmarks/Bookmarks';
import AddBookmark from './componenets/AddBookmark/AddBookmark';
import SearchBookmark from './componenets/SearchBookmark/SearchBookmark';
import DeleteBookmark from './componenets/DeleteBookmark/DeleteBookmark';
import UpdateBookmark from './componenets/UpdateBookmark/UpdateBookmark';
import Signup from './componenets/Signup/Signup';
import Signin from './componenets/Signin/Signin';
import ProtectedRoute from './componenets/Services/ProtectedRoutes';
import AuthService from './componenets/Services/auth.services';

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/Bookmarks" element={<Bookmarks />} />
          <Route path="/Bookmark/remove/:id" element={<DeleteBookmark />} />
          <Route path="/Bookmark/edit/:id" element={<UpdateBookmark />} />
          <Route path="/new" element={<AddBookmark />} />
          <Route path="/search" element={<SearchBookmark />} />
        </Route>


        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />


      </Routes>
      {/* <Form /> */}

    </div >
  );
}

export default App;
