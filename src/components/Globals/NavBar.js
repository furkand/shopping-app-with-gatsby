 import React, {Component } from "react"
 import 'bootstrap/dist/css/bootstrap.min.css'

 import "./navbar.css"
import {Link} from "gatsby"
import logo from "../../images/tesla.svg"
import {FaShoppingCart} from "react-icons/fa"

 export default class NavBar extends Component{
     state = {
         navbarOpen : false,
         css : "collapse navbar-collapse",
         links: [
             {
                 id:1,
                 path: "/",
                 text: "Home"
             },
             {
                 id:2,
                 path: "/about",
                 text: "About"
             }
         ]
    }
    navbarHandler = () =>{
        this.state.navbarOpen ? this.setState({
            navbarOpen:false, 
            css:"collapse navbar-collapse"}) : this.setState({
                navbarOpen:true, 
                css:"collapse navbar-collapse show"
            })
   }
     
    render(){
        return(
            <nav className="navbar navbar-expand-sm  navbar-light" > 
                <Link to="/" className="navbar-brand logo" > 
                <img src={logo} width="40px" className={logo} alt=""/>

                </Link>
                <button className="navbar-toggler" type="button" onClick={this.navbarHandler}>
                    <span className="navbar-toggler-icon"> </span>
                </button>  
                <div className={this.state.css}>
                    <ul className="navbar-nav mx-auto"> 
                        {this.state.links.map((item,index)=>
                            {return(<li className="nav-item" key={item.id}>
                                <Link key={item.id} to={item.path}  className='nav-link text-capitalize' >
                                    {item.text}
                                </Link>
                            </li>)}
                        )}
                        <li className="nav-item ml-sm-5 cart-item">
                                
                                <span className="snipcart-items-count"> <FaShoppingCart className="cart-icon snipcart-checkout" /></span>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
   
}