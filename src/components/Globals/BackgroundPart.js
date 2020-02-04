import React from "react"
import BackgroundImage from "gatsby-background-image";

export const BackgroundPart = ({img,styleClass,title,children,imgMobile}) =>{ 
    const userWidth = this.window.innerWidth
    return (
    <BackgroundImage className={userWidth< 580 ? `${styleClass} mobile-background` : styleClass} fluid={userWidth< 580 ? imgMobile : img} >
        <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold"> 
            {title}
        </h1>
        {children}
    </BackgroundImage>
    );
}

BackgroundPart.defaultProps = {
    title: "default title",
    styleClass: "default-background"
}

