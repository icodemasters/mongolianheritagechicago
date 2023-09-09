import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Нэвтрэх</h1>
      <form>
        <input required type='text' placeholder='хэрэглэгчийн нэр' />
        <input required type='password' placeholder='нууц үг' />
        <button>Нэвтрэх</button>
        <p>Алдаа гарлаа</p>
        <span> Бүртгэлгүй юу? <Link to="/register">Бүртгүүлэх</Link>
        </span>
      </form>
    </div>
  )
}

export default Login
