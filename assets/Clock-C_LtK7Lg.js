import{r as i,j as a}from"./index-DJlkvXLM.js";function o(){const[c,t]=i.useState();let e=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return i.useEffect(()=>{t(e)},[]),setInterval(()=>{e=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),t(e)}),a.jsx("div",{className:"card-element-clock p-3 d-flex flex-column text-white text-end",children:a.jsx("span",{className:"clock",children:c})})}export{o as default};
