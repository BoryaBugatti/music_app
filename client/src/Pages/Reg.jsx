import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Reg = () =>{
    const [useremail, setuseremail] = useState('');
    const [username, setusername] = useState('');
    const [userpassword, setuserpassowrd] = useState('');
    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
            <form className="flex flex-col w-full max-w-md p-8 bg-white shadow-lg rounded-xl gap-y-6" id="form">
                <h2 className="text-2xl font-bold text-center text-gray-800">Регистрация</h2>
                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Логин(e-mail)</label>
                    <input type="email" id="email" value={useremail} onChange={e => setuseremail(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition duration-200" placeholder="Введите email" required/>
                </div>
                <div className="space-y-2">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Имя пользователя</label>
                    <input type="text" id="username" value={username} onChange={e => setusername(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition duration-200" placeholder="Введите имя пользователя" required/>
                </div>
                <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Пароль</label>
                    <input type="password" id="password" value={userpassword} onChange={e => setuserpassowrd(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition duration-200"placeholder="Введите пароль" required/>
                </div>
                <button type="submit" className="w-full py-3 px-4 bg-sky-500 text-white font-medium rounded-lg hover:bg-purple-600 transition duration-300" onClick={Reg}>Регистрация</button>
            </form>
        </div>
    );

    async function Reg(){
        const form = document.getElementById('form');
        form.addEventListener('submit', (event)=>{
            event.preventDefault();
        });
        const user_data = {
            "user_name": username,
            "user_email": useremail,
            "user_password": userpassword
        }
        try{
            const response = await axios.post("http://localhost:8080/api/reg", user_data);
            alert(response.data);
        }
        catch(e){
            alert(e);
        }
    }
}

export default Reg;