import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Post from './components/posts/Post';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const ANAKIN_IMAGE = "https://static.wikia.nocookie.net/swfanon/images/d/dc/EGTFEAnakinSkywalker.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

root.render(
  <StrictMode>
    <Post
      author={
        {
          name: "Anakin Skywalker",
          photo: ANAKIN_IMAGE,
          nickname: "@dart_vader"
        }
      }
      content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
      image={RAY_IMAGE}
      date={"26 февр."}
    />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
