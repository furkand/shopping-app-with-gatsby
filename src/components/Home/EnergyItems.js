import React from "react"
import Item from "./Item"
import {Title} from "../Globals/Title"
import {StaticQuery, graphql} from "gatsby"
const getProducts = graphql`{
    products:allContentfulEnergy{
      edges{
        node{
          id
          title
          price
          description
          
        }
      }
    }
  }`

export default function EnergyItems() {
    return(
        <StaticQuery query={getProducts} render={data=>{
            return(
            <section className="products">
              <div className="container">
                <Title title="our products"/>
                <div className="row">
                  {data.products.edges.map((item,index)=>{
                    return(<Item key={index} product={item}/>)
                  })}
                </div>
              </div>
            </section>
          )
        }}
        />
    );
}