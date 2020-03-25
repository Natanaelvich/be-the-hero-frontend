import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
*{
    margin : 0;
    padding : 0;
    outline : 0;
    box-sizing : border-box;
}
html,body,#root{
    min-height : 100%;
}
body{
  -webkit-font-smoothing: antialiased !important;
  background : #f5f5f5;
}
body,input,button,textarea{
    font : 400 14px Roboto, sans-serif;
    color : #222;
}
button{
    cursor: pointer; 
}

  form input{
      width : 100%;
      height : 60px;
      color : #333;
      border :1px solid #dcdce6;
      padding : 0 24px;
      border-radius : 8px;
  }

  a {
      display: flex;
      align-items: center;
      margin-top: 40px;
      color: #444;
      font-size: 18px;
      text-decoration: none;
      font-weight: bold;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.7;
      }

      svg {
        margin-right: 8px;
      }
    }
`;
