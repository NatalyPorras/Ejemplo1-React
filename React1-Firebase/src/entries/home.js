import React from 'react'; // para crear compomentes
import ReactDOM from 'react-dom'; // renderiza 


const gatos = {
    nombre :'' ,
    email :'',
    contraseña: ''
   }

   const handleInput =(e) => {
   if(e.target.type="name"){
       gatos.name=e.target.value
   }else if(e.target.type="email"){
            gatos.email=e.target.value
        }else if(e.target.type="password"){
            gatos.contraseña=e.target.value
    }
        }


    const handlerClick = (e) => {

if(e.target.type=='button'){
    e.target.name= <h2>Bienvenidos</h2>

}
    }

   const saludo = (
    <div>
     <form name="chaange">
         <input type="text" onChange={handleInput} />
         <input type="email" onChange={handleInput} />
         <input type="password" onChange={handleInput} />
         <button type="button" onChange = {handlerClick}>click</button>
     </form>
    </div>    
    );

const app = document.getElementById('root');

ReactDOM.render(saludo, app);