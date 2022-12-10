import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLoginClick = (e) => {
        e.preventDefault();
        navigate('/home');
    };

    return (
        <div>
            <form className='login'>
                <h2>Welcome, User!</h2>
                <p>Please log in</p>
                <input type='text' placeholder='User Name' />
                <input type='password' placeholder='Password' />
                <input
                    type='submit'
                    value='Log In'
                    onClick={handleLoginClick}
                />
                <div className='links'>
                    <a href='#'></a>
                    <Link to='/register'>Register</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
