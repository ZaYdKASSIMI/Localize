import { Link } from 'react-router-dom';
import React from 'react';
import '../index.css';
import { Helmet } from 'react-helmet';

export default function navbar(){
    return(
    <>
    <Helmet>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
        
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,600;1,600&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,500;0,600;0,700;1,300;1,500;1,600;1,700&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,400;1,400&amp;display=swap" rel="stylesheet" />
      </Helmet>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
            <div class="container-fluid">
                
                <Link to={"/"}><img src="/LOGO-03.png" alt="Bootstrap" width="180" height="55"/></Link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="bi-list"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    
                    <ul class="navbar-nav ms-auto me-4 my-3 my-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link" to={"/search"}>Posts</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={"/Login"}>LogIn</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={"/SingUp"}>Sing Up</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={"/contact"}>Contact</Link>
                        </li>
                    </ul>

                    <Link class="nav-link" to={"/page1"}>
                    <button class="btn btn-success rounded-pill px-3 mb-2 mb-lg-0" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                        <span class="d-flex align-items-center">
                            
                            <i class="bi bi-patch-plus-fill me-2"></i>
                            <span class="small">Add business</span>
                        </span>
                    </button>
                    </Link>
                    
                        <div class="dropdown-center dropstart">
                        <i class="bi bi-person-fill " type="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                        
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Profil</a></li>
                            <li><a class="dropdown-item text-danger" href="#">Logout</a></li>
                            
                        </ul>
                        </div>
                </div>
            </div>
        </nav>

        
      
    </>
    )
}