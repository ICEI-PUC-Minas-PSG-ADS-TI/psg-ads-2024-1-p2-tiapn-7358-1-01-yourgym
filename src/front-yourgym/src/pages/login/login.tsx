import './login.css';
import userIcon from '../../assets/user.png';
import lockIcon from '../../assets/lock.png';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../api';
import Swal from 'sweetalert2';
import { useState } from 'react';

interface ILogin {
    setIsLogged: (prop: boolean) => void
    setUserData: (prev: object) => void
}

function Login({ setIsLogged, setUserData }: ILogin) {
    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [senha, setSenha] = useState("")

    const formSubmit = async (e: any) => {
    e.preventDefault(); 
    const getUser = await api.get(`/getuser?name=${name}&senha=${senha}`)

    if(getUser.data.data.length === 0){
        Swal.fire({
            title: "Dados Incorretos",
            text: "Insira uma senha ou email diferente e tente novamente",
            icon: "error"
          });
    } else {
        Swal.fire({
            title: "Usuario Válido",
            text: "",
            icon: "success"
        }).then((result) => {
            setUserData({ name, senha, email: getUser.data.data[0].email})
            setIsLogged(true)
            navigate('/dashboard')
        })
    }
    }
    
    return (
        <div className="container">
            <div className="form-container">
                <h2>LOGIN</h2>
                <form onSubmit={formSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">
                            <img src={userIcon} alt="User Icon" />
                        </label>
                        <input type="text" id="username" placeholder="Nome de usuário" onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">
                            <img src={lockIcon} alt="Password Icon" />
                        </label>
                        <input type="password" id="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)}/>
                    </div>
                    <button type="submit">ENTRAR</button>
                    <p>Ainda não possui uma conta? <Link to={'/signup'}>Cadastre-se</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Login;