import styled from "styled-components";

 export const SCLoginPage = styled.div`
   background: url("./public/img/tmb_10372_5140.jpg") center/cover no-repeat;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;

   .login {
     display: flex;
     flex-direction: column;
     align-items: center;
     background: rgba(255, 255, 255, 0.5); 
     width: 500px;
     height: 450px;
     border-radius: 30px;
   }
     h1 {
      color: darkgreen;
      text-align: center;
     }

   .authorisation {
   display:flex;
   flex-direction: column;
   justify-content:center;
   align-items: center;
   margin-top: 15px;
   }

   .registration {
     margin-top: 50px;
     font-size: 20px;
     color: black;
     font-weight: bold;
   }

  button {
    width: 100%;
    margin-bottom: 30px;
  }
 

    a {
    display: inline-block;
    width: 100%;
    text-align: right;
    text-decoration: none;
    color: black;

    &:hover {
      text-decoration: underline;
    }
  } 
`;

// import styled from "styled-components";

// export const SCLoginPage = styled.div `
//   box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
//   border-radius: 20px;
//   background-color: ${(props) => props.theme.colors.elemBgc};
//   margin: 0 auto;
//   width: 80%;
//   max-width: 500px;
//   text-align: center;
//   padding: 40px;

//   h1 {
//     margin-bottom: 50px;
//   }

//   button {
//     width: 100%;
//     margin-bottom: 30px;
//   }

//   a {
//     display: inline-block;
//     width: 100%;
//     text-align: right;
//     text-decoration: none;
//     color: ${(props) => props.theme.colors.Gray};

//     &:hover {
//       text-decoration: underline;
//     }
//   }


// @media (max-width: 530px) {
//   .LoginPage {
//     width: 100%;
//   }
// }

// .registration {
//   margin-top: 30px;
//   padding-top: 20px;
//   border-top: 1px solid ${(props) => props.theme.colors.lightGray};

//   span {
//     display: inline-block;
//     font-size: 16px;
//     margin-bottom: 40px;

//     a {
//       display: inline;
//       color: ${(props) => props.theme.colors.primeColor};
//     }
//   }

//   p {
//     margin-bottom: 30px;
//   }
// }
// .icons-wrapper {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 30px;
// }
// .icon {
//   width: 100%;
//   height: 100%;
// }
// .reg__link {
//   flex: 0 0 58px;
//   transition: 200ms;

//   &:hover {
//     scale: 1.1;
//   }

//   &:active {
//     scale: 0.9;
//     transition: 100ms;
//   }

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// }`