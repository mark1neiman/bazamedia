import { useState } from "react"
import "./login.scss"

const Login = () => {

    const [isSignup, setIsSignup] = useState(true)

    const switchSubmit = (e) => {
        e.preventDefault();
        setIsSignup((prevIsSignup) => !prevIsSignup);
    }

    return (
        <div className="login">
            <div className="card">
                <div className="card-left">

                    <h1>
                        BAZA
                        MEDIA
                    </h1>

                </div>
                <div className="card-right">
                    <h1>
                        {isSignup ? 'Nice to see you again!' : 'Hello, new user!'}
                    </h1>

                    <form>
                        {!isSignup && (<input type="text" placeholder="Username" required />)}
                        {!isSignup && (<input type="text" placeholder="Full Name" required />)}
                        <input type="text" placeholder="Email" required />
                        {!isSignup && (<input type="text" placeholder="How you feel today?" required />)}
                        <input type="password" placeholder="Password" required />
                        {!isSignup && (<input type="password" placeholder="Confirm Password" required />)}


                    </form>

                    <button>
                        {isSignup ? 'Sign In' : 'Sign Up'}
                    </button>
                    <p>
                        {isSignup
                            ? "Do not have an account?  "
                            : "Already have an account?  "
                        }
                        <span onClick={switchSubmit}>
                            {isSignup ? 'Sign Up' : 'Sign In'}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login