import React from "react"
import BackgroundImage from "gatsby-background-image";

export const BackgroundPart = ({img,styleClass,title,children,discover}) =>{ 

    
    return (
    <BackgroundImage  className={styleClass} fluid={img} >
        <h1 className="title  text-uppercase text-center display-4 font-weight-bold home-page-title"> 
            {title}
        </h1>
        {discover ? <a href="#cars" className="discover"> Discover</a> : <div></div>}
        {children}
    </BackgroundImage>
    );

}

BackgroundPart.defaultProps = {
    title: "default title",
    styleClass: "default-background"
}

