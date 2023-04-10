import React from 'react';
import ReactDOM from 'react-dom/client';
import GroceryList from './list_content';
import { BrowserRouter } from 'react-router-dom';
import './list_view.css';



export default function LIST() {
    const root = ReactDOM.createRoot(document.getElementById('root'));


    root.render(
        <BrowserRouter>
            <div>
                <div class="bg"></div>
                <div class="content">
                    <h3>Here is a Sample Grocery List !</h3>
                    <GroceryList />


                </div>
            </div>

        </BrowserRouter>
    );

}

