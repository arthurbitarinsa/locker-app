import React from 'react'

function Create() {
  return (
    <div class="registration-container">
        <form class="registration-form">
            <input type="text" placeholder='Nickname' name='nickname' class="input-field" />
            <input type="email" placeholder='Email' name='email' class="input-field" />
            <input type="password" placeholder='Password' name='password' class="input-field" />
            <button type="submit" class="submit-button">Register</button>
        </form>
    </div>
  )
}

export default Create