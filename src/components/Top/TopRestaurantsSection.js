// TopRestaurantsSection.js
import React from 'react';
import { Helmet } from 'react-helmet';
export default  function TopRestaurantsSection(){
    
  // Sample data for restaurants
  const restaurants = [
    { name: 'Da Alfredo', image: 'image/restaurant_1.jpg' },
    { name: 'Bistroter', image: 'image/restaurant_2.jpg' },
    { name: 'Da Luigi', image: 'image/restaurant_3.jpg' },
    { name: 'Marco King', image: 'image/restaurant_4.jpg' }
  ];

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
    <div class="row add_bottom_30 pt-5  ">
			  <div class="col-md-12 container">
			    <div class="main_title_3 clearfix ">
				<span></span>
				<h2>Top Restaurants</h2>
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
          {restaurants.map((restaurant, index) => (
            <div key={index} className="col-6 col-lg-3 col-sm-6">
              <div className="over">
                <img src={restaurant.image} alt={restaurant.name} />
                <div className="info_1">
                  <h3>{restaurant.name}</h3>
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


