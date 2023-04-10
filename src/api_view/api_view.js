import React from 'react';
import ReactDOM from 'react-dom/client';
import RandomPoem from './random_poem';
import { BrowserRouter } from 'react-router-dom';
import './api_view.css';



export default function API() {
    const root = ReactDOM.createRoot(document.getElementById('root'));


    root.render(
        <BrowserRouter>
            <div>
            <div class="bg"></div>
                <div class="content">
                    <h1>Poetry App</h1>
                    <div class="poem">
                    <RandomPoem/>

                    </div>    
                </div>
            </div>
            
        </BrowserRouter>
    );

}

