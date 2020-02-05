import React, {Component} from "react"
import {Title} from "../Globals/Title";
import Img from "gatsby-image";



const getCategories = items =>{
    let categories = items.map(item=>{
        return item.node.category[0]
    })
    categories = ["ALL", ... categories]
    return categories;
}
export default class Menu extends Component{
    constructor(props){
        super(props)
        this.state = {
            cars: props.items.edges,
            raw: props.items.edges,
            categories: getCategories(props.items.edges)
        }
    }
    handleItems = (category) => {
        if(category === "ALL" ){
            this.setState({
                ...this.state,
                cars: this.state.raw
            })
        }else{
             this.setState({
                 ...this.state,
                cars: this.state.raw.filter(item=>{ if(item.node.category[0] ===category){ return item}})
            })
        } 
    }
    render(){

        if(this.state.cars.length > 0){
            return(
                <section className="menu py-5" id="cars">
                    <div className="container">
                        <Title title="Our Super Cars"/>
                            <div className="row mb-5">
                                <div className="col-10 mx-auto text-center car-models">
                                    {this.state.categories.map((item,index)=>(
                                        <button onClick={()=>this.handleItems(item)} className="categories btn text-capitalize btn-yellow" key={index} > {item}</button>
                                    ))}
                                </div>
                            </div>
                        <div className="row mb-5"> 
                            {this.state.cars.map(({node})=>{
                                return(
                                    <div className="col-11 col-md single-item" key={node.id} > 
                                        <div className="car-image">
                                            <Img fixed={node.image.fixed} />
                                        </div>
                                        <div className="car-content-container">
                                            <div className="flex-grow-1 px-3">
                                                <div className="price-and-title">
                                                    <h6 className="title mb-0">{node.title}</h6>
                                                    <h6 className="price mb-0">Price: {node.price}$</h6>
                                                </div>
                                                <p className="text-muted">
                                                    {node.description.description}
                                                </p>
                                                <button 
                                                    className="categories-button btn text-capitalize btn-yellow snipcart-add-item"
                                                    data-item-id={node.id}
                                                    data-item-name={node.title}
                                                    data-item-price={node.price}
                                                    data-item-url="https://fake-tesla-shopping-web-site.netlify.com"
                                                    > Add to Card
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}  
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