import React from 'react'
import {Link} from "gatsby"
import {Title} from "../Globals/Title"

export const Info = () =>{
    return(
        <section className="py-5">
            <div className="container">
                <Title title="Our Story"/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Eveniet aut maxime quaerat voluptatum eligendi beatae eos 
                            alias asperiores! Ab laudantium, nihil facere tempora possimus 
                            voluptas neque obcaecati id. Voluptatum, officiis!
                        </p>
                        <Link className="about-button" to="/about/">
                        <button className="btn text-uppercase btn-yellow"> About Page</button>
                         </Link>
                    </div>
                   
                </div>
            </div>
        </section>
    )
}