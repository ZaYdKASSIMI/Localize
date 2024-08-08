import { Helmet } from 'react-helmet';
import React from 'react';
import '../index.css';


export default function us(){
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


                <div class="call_section">
			<div class="wrapper">
				<div class="container div">
					<div class="main_title_2 text-center">
						<span><em></em></span>
						<h2>WHY CHOOSE US</h2>
						
					</div>
					<div class="row">
						<div class="col-md-4">
							<div class="box_how text-center">
                            <i class="bi bi-search"></i>

								<h3>Search Locations</h3>
								<p>An nec placerat repudiare scripserit, temporibus complectitur at sea, vel ignota fierent eloquentiam id.</p>
								<span></span>
							</div>
						</div>
						<div class="col-md-4">
							<div class="box_how text-center">
                                <i class="bi bi-info-lg"></i>

								<h3>View Location Info</h3>
								<p>An nec placerat repudiare scripserit, temporibus complectitur at sea, vel ignota fierent eloquentiam id.</p>
								<span></span>
							</div>
						</div>
						<div class="col-md-4">
							<div class="box_how text-center">
                            <i class="bi bi-trophy-fill"></i>

								<h3>Book, Reach or Call</h3>
								<p>An nec placerat repudiare scripserit, temporibus complectitur at sea, vel ignota fierent eloquentiam id.</p>
							</div>
						</div>
					</div>
					
					
				</div>
				
			</div>
			
		</div>
        </>
    )
}