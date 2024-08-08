
import React,{ useState } from 'react';
import { Helmet } from 'react-helmet';
import PubsH from './PubsHotel.json'
import { Link } from 'react-router-dom';
export default function PopularHotelsSection(){
    const [items,setItems] = useState(PubsH);
    console.log(items);
  


  return (
    <>
    <Helmet>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" 
	    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

        
        <link href="https://fonts.googleapis.com/css?family=Manjari&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=PT+Sans&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Anton&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="style.css"/>
    </Helmet>
    <div className='container'>
    <div class="row add_bottom_30 pt-5">
			  <div class="col-md-12">
			    <div class="main_title_3 clearfix">
				<span></span>
				<h2>Popular Hotels</h2>
				<p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
          {/* <button className='bttn'>
                <a href="#">See all</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
          </button> */}
			</div>
            </div>
    <section className="image">
      <div className="container">
        <div className="row">
          {items.map((hotel, index) => (
            <div key={index} className="col-lg-3 col-sm-6 col-6">
              <div className="over">
                <Link to={`/pub/${hotel.id}`}>
                <img src={hotel.image} alt={hotel.name} />
                </Link>
                <div className="info_1">
                  <div className="cat_star">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                  
                  <h3>{hotel.name}</h3>
                  
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
    </div>
    </>
  );
};


