import '../signup/signup.css'
import userIcon from '../../assets/user.png'
import lockIcon from '../../assets/lock.png'
import emailIcon from '../../assets/mail.png'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../api'
import { useEffect, useState } from 'react'
import { create } from 'domain'
import Swal from 'sweetalert2'

interface ISignUp {
    setIsLogged: (prop: boolean) => void
    setUserData: (prev: object) => void
}


function SignUp({ setIsLogged, setUserData }: ISignUp) {
  const navigate = useNavigate();

  const [name, setName] = useState("")
  const [senha, setSenha] = useState("")
  const [email, setEmail] = useState("")


  const formSubmit = async (e: any) => {
    e.preventDefault();

    const createdUser = await api.post("/user", { name, email, senha })
    console.log(createdUser.data);

    if(createdUser.data.error){
        Swal.fire({
            title: "Erro ao criar usuario",
            text: "Insira novos dados e tente novamente",
            icon: "error"
          });
    } else {
        Swal.fire({
            title: "Usuario cadastrado com sucesso",
            text: "",
            icon: "success"
        }).then((result) => {
            setUserData({ name, email })
            setIsLogged(true)
            navigate('/dashboard')
        })
    }

  }


  return (
    <div className="container">
        <div className="form-container">
            <h2>CADASTRO</h2>
            <form onSubmit={formSubmit}>
                <div className="input-group">
                    <label htmlFor="username">
                        <img src={userIcon} alt="User Icon"></img>
                    </label>
                    <input type="text" id="username" placeholder="Nome de usuário" onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className="input-group">
                    <label htmlFor="email">
                        <img src={emailIcon} alt="Email Icon"></img>
                    </label>
                    <input type="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="input-group">
                    <label htmlFor="password">
                        <img src={lockIcon} alt="Password Icon"></img>
                    </label>
                    <input type="password" id="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)}></input>
                </div>
                <button type="submit">ENTRAR</button>
                <p>Já possui uma conta? <Link to={'/'}>Login</Link></p>
            </form>
        </div>
    </div>
  )
}

export default SignUp