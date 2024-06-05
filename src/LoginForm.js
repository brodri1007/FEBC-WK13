function LoginForm() {
    return (
        <div className="LoginForm" >
            <form>
                <div> <h3>Log In</h3>
                    <label>
                        User Name: <input name="username" />
                    </label>
                    </div>
                    <label>
                        Password: <input name="password" />
                    </label>
                    <div>
                        <button type="button">Submit</button>
                    </div>
            </form>
        </div>
    )
}
export default LoginForm;