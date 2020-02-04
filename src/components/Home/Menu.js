import React, {Component} from "react"
import {Title} from "../Globals/Title";
import Img from "gatsby-image";

export default class Menu extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            cars: props.items.edges

        }
    }
    render(){

        if(this.state.cars.length > 0){
            return(
                <section className="menu py-5">
                    <div className="container">
                        <Title title="Our Super Cars"/>
                        <div className="row mb-5">
                            <div className="col">
                                <h1>Our super cars</h1>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }else{
            return(
            <section className="menu py-5">
                <div className="container">
                    <Title title="Out Super Cars">
                        <div className="row">
                            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                                <h1>There are no items to display</h1>
                            </div>
                        </div>
                    </Title>
                </div>
            </section>)
        }
    }
}