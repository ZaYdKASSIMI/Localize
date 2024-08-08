import React, { useState, useMemo } from 'react';
import Casa from '../Casa.json';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = useMemo(() => {
        const search = searchTerm.toLowerCase();
        return Casa.filter(item => {
            const name = item.name1 ? item.name1.toLowerCase() : '';
            const title = item.title1 ? item.title1.toLowerCase() : '';
            const category = item.catigory ? item.catigory.toLowerCase() : '';
            const city = item.ville ? item.ville.toLowerCase() : '';
            
            return (
                name.includes(search) ||
                title.includes(search) ||
                category.includes(search) ||
                city.includes(search)
            );
        });
    }, [searchTerm]);

    return (
        <div>
            <h1>search</h1>
            <form className='text-center'>
                <input
                    type="text"
                    placeholder="Rechercher..."
                    value={searchTerm}
                    onChange={handleChange}
                    className='inp'
                />
            </form>
            <br />
            <div className=''>
                <div className='row row-cols-2 row-cols-lg-4 g-2'>
                    {filteredData.map(item => (
                        <div key={item.id} className="col-md-3">
                            <div className="border">
                                <img src={item.image1} alt={item.name1} className="card-img rounded mx-auto d-block" style={{height: "300px", objectFit: "cover"}} />
                                <h2>{item.name1}</h2>
                                <p>{item.title1}</p>
                                <p>{item.catigory}</p>
                                <p>
                                    {item.note1}
                                    <svg className="p3" xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;