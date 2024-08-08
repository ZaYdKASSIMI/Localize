import { Link } from 'react-router-dom';
import '../index.css'; 
import Navbarr from './navbarr';
import Footer from '../components/footer'

export default function page5(){
    return(
        <>
        <Navbarr/>
        
            <div className="container page1">
                <div className="row ">
                    <div className="col-md-6 col-12 form55 ">
                       <Link to={"/page4"}> <p className='text-start iconn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                        </svg>
                        </p></Link>
                        <h2 className='hello'>time of work</h2>

                        <form className=' form5'>

                        <label className='day'>Mon </label>
                        <input type="text" className='time' placeholder='AM' />
                        <label className='slash'> / </label>
                        <input type="text" className='time' placeholder='PM' /><br/>

                        <label className='day'>Tue </label>
                        <input type="text" className='time' placeholder='AM' />
                        <label className='slash'> / </label>
                        <input type="text" className='time' placeholder='PM' /><br/>

                        <label className='day'>Wed </label>
                        <input type="text" className='time' placeholder='AM' />
                        <label className='slash'> / </label>
                        <input type="text" className='time' placeholder='PM' /><br/>

                        <label className='day'>Thu </label>
                        <input type="text" className='time' placeholder='AM' />
                        <label className='slash'> / </label>
                        <input type="text" className='time' placeholder='PM' /><br/>

                        <label className='day'>Fri </label>
                        <input type="text" className='time' placeholder='AM' />
                        <label className='slash'> / </label>
                        <input type="text" className='time' placeholder='PM' /><br/>

                        <label className='day'>Sat </label>
                        <input type="text" className='time' placeholder='AM' />
                        <label className='slash'> / </label>
                        <input type="text" className='time' placeholder='PM' /><br/>

                        <label className='day'>Sun </label>
                        <input type="text" className='time' placeholder='AM' />
                        <label className='slash'> / </label>
                        <input type="text" className='time' placeholder='PM' /><br/>

                        <Link to={"/page6"} ><button type="submit" class="btn btn-success mt-4 btttn">Next</button></Link>
                        </form>
                    </div>
                    <div className="col-md-6 col-9 imagee">
                        < img src="./vectors/8085994.jpg" className="vector1"/>
                    </div>
                    
                </div>

            </div>
            

            <Footer/>
        </>
    )
}