import React from "react";
import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Page from "./components/Page";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Page />} >
        <Route index element={<Page />}/>
    </Route>
));

function App() {
    return (
        <RouterProvider router={router} />
    );
}


export default App;
