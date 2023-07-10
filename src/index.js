import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Accueil from "./routes/accueil";
import App from './App';
import SignUp from './routes/signup';
import LogIn from './routes/login';
import ChCat from './routes/ch_cat';
import Question from './routes/question';
import Score from './routes/score';
import Questionnaire from './routes/questionnaire';
import Profile from './routes/profile';
import Historique from './routes/historique';

//mise en place du router qui permet la navigation
const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<Accueil />
      },
      {
        path:"/signup",
        element:<SignUp />
      },
      {
        path:"/login",
        element:<LogIn />
      },
      {
        path:"/profile",
        element:<Profile />
      },
      {
        path:"/questions",
        element:<Questionnaire />,
        children:[
          {
            path:"/questions/",
            element:<ChCat />
          },
          {
            path:"/questions/Anime",
            element:<Question categorie="Anime"/>
          },
          {
            path:"/questions/Manga",
            element:<Question categorie="Manga"/>
          },
          {
            path:"/questions/Philosophie",
            element:<Question categorie="Philosophie"/>
          },
          {
            path:"/questions/Physique Quantique",
            element:<Question categorie="Physique Quantique"/>
          },
          {
            path:"/questions/Jeux video",
            element:<Question categorie="Jeux video"/>
          },
          {
            path:"/questions/Films",
            element:<Question categorie="Films"/>
          },
        ]
      },
      {
        path:"/score",
        element:<Score />
      },
      {
        path:"/historique",
        element:<Historique />
      }
    ]
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
