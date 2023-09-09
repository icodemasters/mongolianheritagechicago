import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
      <h1>Бүртгүүлэх</h1>
      <form>
        <input required type='text' placeholder='хэрэглэгчийн нэр' />
        <input required type='email' placeholder='имэйл' />
        <input required type='password' placeholder='нууц үг' />
        <button>Бүртгүүлэх</button>
        <p>Алдаа гарлаа</p>
        <span> Бүртгэлтэй юу? <Link to="/login">Нэвтрэх</Link>
        </span>
      </form>
    </div>
  )
}

export default Register
