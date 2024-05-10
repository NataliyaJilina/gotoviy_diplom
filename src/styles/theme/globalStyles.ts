 import { createGlobalStyle } from "styled-components";

 export const GlobalStyles = createGlobalStyle`
 @import url(https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900);

 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 body {
   min-width: 530px;
   margin: 0;
   font-family: "Inter";
   background-color: var(--bgc);
   color: var(--text-color);
 }

 button,
 input {
   border: 1px solid transparent;
   outline: 0;
   font-family: inherit;
 }

 a {
   text-decoration: none;
   color: inherit;
  
   &:hover {
     text-decoration: underline;
   }

   &:visited {
     color: var(--text-color);
   }
 }

 ._no-select {
   -webkit-touch-callout: none; 
   -webkit-user-select: none; 
   -khtml-user-select: none; 
   -moz-user-select: none; 
   -ms-user-select: none; 
   user-select: none; 
 }

 button {
   cursor: pointer;
   padding: 12px 15px;
   font-size: inherit;
   border-radius: 10px;
   background-color: var(--prime-color);
   color: white;
   transition: 200ms;

   &:disabled {
     background-color: var(--disabled-bgc);
   }

   &.primary {
     background-color: var(--prime-color);
     color: white;
   }

   &.secondary {
     background-color: var(--light-gray);
     color: var(--placeholder-color);
   }

   &:disabled:hover {
     cursor: default;
     opacity: 0.5;
   }

   &:hover {
     translate: 0 -5px;
     box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);
   }

   &:active {
     transition: 100ms;
     translate: 0 0;
     box-shadow: none;
   }
 }

 input {
   padding: 12px 15px;
   background-color: var(--bgc);
   border-radius: 10px;
   border: 1px solid transparent;

   transition: 200ms;

   &:is(:hover, :focus) {
     border-color: var(--prime-color);
   }
 }

 @media (max-width: 730px) {
   input, button {
     padding: 10px 12px;
   }
 }
 `