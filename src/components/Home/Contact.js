import React from "react"
import {Title } from "../Globals/Title"
export default function Contact (){
    return(
        <section className="contact py-5">
            <Title title="contact us"/>
            <div className="row">
                <div className="col-10 col-sm-8 col-md-6 mx-auto">
                    <form >
                        <div className="form-group">
                            <label htmlFor="name" >Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="name" 
                                id="name" 
                                placeholder="Bruce Wayne"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" >Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                name="email" 
                                id="email" 
                                placeholder="brucewayne96@gmail.com"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description" >Description</label>
                            <textarea 
                                className="form-control" 
                                name="description" 
                                id="description" 
                                rows="5"
                                placeholder="Tell me what you want."/>
                        </div>
                        <button className="btn btn-yellow btn-block text-capitalize">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}