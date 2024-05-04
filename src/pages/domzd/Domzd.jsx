import {useEffect, useState} from 'react';
import MainPage from "../mainPage/MainPage";
import ErrorPage from "../errorPage/ErrorPage";



function Domzd () {


    const [user, setUser] = useState({
        name: '',
        lastname: ''
    });

    function getName () {
        const name = document.getElementById('name').value;
        const lastname = document.getElementById('lastname').value;
        setUser({name, lastname})
    }


    if(user.name === '' || user.lastname === '') {
        return <div>
            <h1>Dz</h1>
            <input type="text" id="name" placeholder="name"/>
            <input type="text" id="lastname" placeholder="lastname"/>
            <button id="btn" onClick={getName}>Проверить</button>
        </div>
    }

    else if(user.name.toLocaleLowerCase() === 'john' && user.lastname.toLocaleLowerCase() === 'johns'){
        return <MainPage name={user.name} lastname={user.lastname}/>
    }


    return (
      <ErrorPage name={user.name} lastname={user.lastname}/>
    );
}

export default Domzd;