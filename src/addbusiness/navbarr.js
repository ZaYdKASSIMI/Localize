import { Link } from 'react-router-dom';
import '../index.css';

export default function(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light shadow-sm">
            <div class="container-fluid">

               
               <Link to={"/"}><img src="/LOGO-03.png" alt="Bootstrap" width="180" height="55"/></Link>
                
                
                <ul class="navbar-nav me-auto mb-2 mb-lg-0"> 
                    <li class="nav-item">
                    <p className='text-secondary'>for business</p>
                    </li>
                    
                    
                </ul>
                
            
                </div>
        </nav>
    )
}