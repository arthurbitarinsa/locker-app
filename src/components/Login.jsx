import React from 'react'

function Login() {
  return (
    <div>
        <div class="login-container">
    <form class="login-form">
        <input type="text" class="login-input" placeholder="Nickname" name="nickname" />
        <input type="text" class="login-input" placeholder="Email" name="email" />
        <input type="password" class="login-input" placeholder="Password" name="password" />
        <button class="login-btn">Login</button>
    </form>
</div>

    </div>
  )
}

export default Login