import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const handleRegisterClick = (e) => {
        e.preventDefault();
        navigate('/home');
    };
    return (
        <div>
            <form className='login'>
                <h1>Registration!</h1>
                <p>Please Register</p>
                <input type='text' placeholder='User Name' />
                <input type='password' placeholder='Password' />
                <input
                    type='submit'
                    value='Sign Up'
                    onClick={handleRegisterClick}
                />
                <div className='links'>
                    <a href='#'></a>
                    <Link to='/'>Login</Link>
                </div>
            </form>
        </div>
    );
};

export default Register;
