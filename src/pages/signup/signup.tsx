import '../signup/signup.css'
import userIcon from '../../assets/user.png'
import lockIcon from '../../assets/lock.png'
import emailIcon from '../../assets/mail.png'
import { Link, useNavigate } from 'react-router-dom'

interface ISignUp {
    setIsLogged: (prop: boolean) => void
}

function SignUp({ setIsLogged }: ISignUp) {

  const navigate = useNavigate();

  const formSubmit = () => {
    setIsLogged(true)
    navigate('/dashboard')
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
                    <input type="text" id="username" placeholder="Nome de usuário"></input>
                </div>
                <div className="input-group">
                    <label htmlFor="email">
                        <img src={emailIcon} alt="Email Icon"></img>
                    </label>
                    <input type="email" id="email" placeholder="Email"></input>
                </div>
                <div className="input-group">
                    <label htmlFor="password">
                        <img src={lockIcon} alt="Password Icon"></img>
                    </label>
                    <input type="password" id="password" placeholder="Senha"></input>
                </div>
                <button type="submit">ENTRAR</button>
                <p>Já possui uma conta? <Link to={'/'}>Login</Link></p>
            </form>
        </div>
    </div>
  )
}

export default SignUp