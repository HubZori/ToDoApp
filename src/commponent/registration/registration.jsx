import './Registration.css'

const Registration = (props) => {
    return <div className="registration-wrapper">
        <h1>Sing up</h1>
        <form>
            <label>
                <p>Username</p>
                <input type="text" />
            </label>
            <label>
                <p>Email address</p>
                <input type="email" placeholder="Enter email" />
            </label>

            <label>
                <p>Password</p>
                <input type="password" placeholder="Password" />
            </label>
            <label>
                <p>confirm Password</p>
                <input type="password" placeholder="Confirm Password" />
            </label>
            <div className='button'>
                <button type="submit" >Register</button>
            </div>
        </form>
    </div>
}




export default Registration