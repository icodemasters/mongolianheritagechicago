import React from 'react'
import {Link} from 'react-router-dom'
import Logo from "../img/logo.jpg"
import '../components/NavbarCSS.css'

const Navbar = () => {
  return (
    <nav className="navbar hcf-navbar navbar-expand-md bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img 
            src={Logo} alt="Logo" 
            width="50" 
            height="50" 
            class="rounded-pill d-inline-block align-text-middle">
          </img>
          {/* Монголын өв соёлын төв */}
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/?cat=home">Нүүр</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/?cat=about-us" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Бидний тухай
              </a>
              <ul className="dropdown-menu">
                <li><a class="dropdown-item" href="#">Алсын хараа</a></li>
                <li><a class="dropdown-item" href="#">Эрхэм зорилго</a></li>
                <li><a class="dropdown-item" href="#">Төвийн бүтэц, зохион байгуулалт</a></li>
                <li><a class="dropdown-item" href="#">Удирдах зөвлөлийн гишүүдийн танилцуулга</a></li>
                <li><a class="dropdown-item" href="#">“Монгол Өв Соёлын Төв”-ийн тэргүүний зурагт мэндчилгээ</a></li>
                <li><hr class="dropdown-divider"></hr></li>
                <li><h5 class="dropdown-header">Төвийн үйл ажиллагааны гол чиглэлүүд</h5></li>
                  <li><a className="dropdown-item" href="#"> &raquo; Монгол хэлний сургалт</a></li>
                    <li><a className="dropdown-item" href="#"> &raquo; Морин хуурын сургалт</a></li>
                    <li><a className="dropdown-item" href="#"> &raquo; Үндэсний хөгжмийн сургалт</a></li>
                    <li><a className="dropdown-item" href="#"> &raquo; Сонгодог хөгжмийн сургалт</a></li>
                    <li><a className="dropdown-item" href="#"> &raquo; Математикийн сургалт</a></li>
                    <li><a className="dropdown-item" href="#"> &raquo; Шагайн харваан сургалт</a></li>
                    <li><hr class="dropdown-divider"></hr></li>  
              <li><a class="dropdown-item" href="#">Төвийн тайлан</a></li>
              <li><a class="dropdown-item" href="#">Төвийн нөхцөл, боломж</a></li>              
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/?cat=events" role="button" data-bs-toggle="dropdown" aria-expanded="false">Үйл ажиллагаа</a>
              <ul className="dropdown-menu">
                <li><a class="dropdown-item" href="#">Төвийн үйл ажиллагааны хуанлит хуваарь</a></li>
                <li><a class="dropdown-item" href="#">Төвийн үйл ажиллагааны талаарх мэдээ, мэдээлэл</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/?cat=about-mongolia" role="button" data-bs-toggle="dropdown" aria-expanded="false">Монголын тухай</a>
              <ul className="dropdown-menu">
                <li><a class="dropdown-item" href="#">Монгол орны тухай</a></li>
                <li><a class="dropdown-item" href="#">Монголын үзэсгэлэнт газрууд</a></li>
                <li><a class="dropdown-item" href="#">Монгол өв соёлын тухай</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/?cat=membership">Гишүүнчлэл</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/?cat=contact-us">Холбоо барих</a>
            </li>  
          </ul>
          <form class="d-flex">
            <button type="button" class="btn btn-outline-success">Хандив</button>
          </form>
          
          {/* <div className="links">
            <Link className='link' to="/?cat=about-us">
              <h6>Бидний тухай</h6>
            </Link>
            <Link className='link' to="/?cat=Event">
              <h6>Төвийн үйл ажиллагаа</h6>
            </Link>
            <Link className='link' to="/?cat=about-mongolia">
              <h6>Монголын тухай</h6>
            </Link>
            <Link className='link' to="/?cat=membership">
              <h6>Гишүүнчлэл</h6>
            </Link>
            <Link className='link' to="/?cat=contact-us">
              <h6>Холбоо барих</h6>
            </Link>
            <span>Гэрэлт-Од</span>
            <span>Гарах</span>
            <span className='write'>
              <Link className="link" to="/write">Бичих</Link>
            </span>
          </div> */}
        </div>
        {/* navbar-collapse. */}
      </div>
      {/* container-fluid. */}
    </nav>
  )
}

export default Navbar