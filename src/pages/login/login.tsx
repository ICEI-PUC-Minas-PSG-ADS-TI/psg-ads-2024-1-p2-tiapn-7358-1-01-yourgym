import './login.css';
import userIcon from '../../assets/user.png';
import lockIcon from '../../assets/lock.png';
import { Link, useNavigate } from 'react-router-dom';

interface ILogin {
    setIsLogged: (prop: boolean) => void
}

function Login({ setIsLogged }: ILogin) {
    const navigate = useNavigate();

    const formSubmit = () => {
        setIsLogged(true)
        navigate('/dashboard')
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
                        <input type="text" id="username" placeholder="Nome de usuário" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">
                            <img src={lockIcon} alt="Password Icon" />
                        </label>
                        <input type="password" id="password" placeholder="Senha" />
                    </div>
                    <button type="submit">ENTRAR</button>
                    <p>Ainda não possui uma conta? <Link to={'/signup'}>Cadastre-se</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Login;