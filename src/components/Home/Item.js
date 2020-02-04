import React from "react"
import {Title} from "../Globals/Title"


export default function Item({product}) {
    console.log(product)
    return(
        <div className="-col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
            <div className="card">
                <div className="card-body text-center">
                <h3 className="energy-product">{product.node.title}</h3>
                <p className="description-energy">{product.node.description}</p>
                <button className="categories-button btn text-capitalize btn-yellow"> Add to Card</button>
            </div>
            </div>
        </div>
    )
}