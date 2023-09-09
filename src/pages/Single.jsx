import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from '../components/Menu';
import Logo from "../img/logo.jpg"

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src={Logo} alt="" />
      <div className="user">
        <img src={Logo} alt="" />
      <div className="info">
        <span>Гэрэлт-Од</span>
        <p>2 өдрийн өмнө нийтэлсэн</p>
      </div>
      <div className="edit">
        <Link to={`/write?edit=2`}>
          <img src={Edit} alt="" />
        </Link>
        <img src={Delete} alt="" />
      </div>
      </div>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem incidunt quae, fugiat aliquid magni perspiciatis et est. Exercitationem cum dolor sit iure quam esse, dicta adipisci debitis, facilis perspiciatis vero.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nulla esse blanditiis quo minima fuga quibusdam cum deserunt dolorum animi assumenda quos harum ea est cupiditate, doloremque deleniti quod distinctio?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nulla esse blanditiis quo minima fuga quibusdam cum deserunt dolorum animi assumenda quos harum ea est cupiditate, doloremque deleniti quod distinctio?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nulla esse blanditiis quo minima fuga quibusdam cum deserunt dolorum animi assumenda quos harum ea est cupiditate, doloremque deleniti quod distinctio?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nulla esse blanditiis quo minima fuga quibusdam cum deserunt dolorum animi assumenda quos harum ea est cupiditate, doloremque deleniti quod distinctio?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nulla esse blanditiis quo minima fuga quibusdam cum deserunt dolorum animi assumenda quos harum ea est cupiditate, doloremque deleniti quod distinctio?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nulla esse blanditiis quo minima fuga quibusdam cum deserunt dolorum animi assumenda quos harum ea est cupiditate, doloremque deleniti quod distinctio?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nulla esse blanditiis quo minima fuga quibusdam cum deserunt dolorum animi assumenda quos harum ea est cupiditate, doloremque deleniti quod distinctio?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nulla esse blanditiis quo minima fuga quibusdam cum deserunt dolorum animi assumenda quos harum ea est cupiditate, doloremque deleniti quod distinctio?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nulla esse blanditiis quo minima fuga quibusdam cum deserunt dolorum animi assumenda quos harum ea est cupiditate, doloremque deleniti quod distinctio?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nulla esse blanditiis quo minima fuga quibusdam cum deserunt dolorum animi assumenda quos harum ea est cupiditate, doloremque deleniti quod distinctio?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nulla esse blanditiis quo minima fuga quibusdam cum deserunt dolorum animi assumenda quos harum ea est cupiditate, doloremque deleniti quod distinctio?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nulla esse blanditiis quo minima fuga quibusdam cum deserunt dolorum animi assumenda quos harum ea est cupiditate, doloremque deleniti quod distinctio?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nulla esse blanditiis quo minima fuga quibusdam cum deserunt dolorum animi assumenda quos harum ea est cupiditate, doloremque deleniti quod distinctio?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nulla esse blanditiis quo minima fuga quibusdam cum deserunt dolorum animi assumenda quos harum ea est cupiditate, doloremque deleniti quod distinctio?
      </p>
      </div>
      <Menu />
    </div>
  )
}

export default Single
