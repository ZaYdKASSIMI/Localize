import React, { useState } from 'react';
import Casa from '../Casa.json'
const CitySearch = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = Casa.filter(city => city.ville.toLowerCase().includes(query.toLowerCase()));
    setSearchResults(results);
  };

  return (
    <div >
      
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="entrer you city"
      />
      <button onClick={handleSearch} >click me</button>
      
            
      {searchResults.length > 0 && (
        
        <div className='row row-cols-2 row-cols-lg-4 g-2'>
       
         
         
    
          
            {searchResults.map((city, index) => (
              <div className="col-md-3 " key={index}>
               
                        <div className="border " id="div1">
                    
                            <img src={city.image1} className="card-img rounded mx-auto d-block" style={{height: "300px", objectFit: "cover"}} alt={city.name1} />
                            <div className="card-body" id="font">
                                <div>{city.name1}</div>
                                <div>{city.title1}</div>
                                <div>{city.note1}<svg className="p3" xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg></div>
                            </div>
                        </div>
                    </div>
            ))}
        
        </div>
      )};
     
    </div>
  );
};

export default CitySearch;