import { useParams } from "react-router-dom"

export default function Single(){
    const {id}=useParams()
    
    return(
        <>

         
            
           <div class="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div class="box">
                            <div class="images">
                                <div class="img-holder active">
                                    <img src="../image/hotel_1.jpg"/>
                                </div>
                                <div class="img-holder">
                                    <img src="../image/hotel_1.jpg"/>
                                </div>
                                <div class="img-holder">
                                    <img src="../image/hotel_1.jpg"/>
                                </div>
                                <div class="img-holder">
                                    <img src="../image/hotel_1.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        
                    </div>
                </div>
            </div> 
        </>
    )
}