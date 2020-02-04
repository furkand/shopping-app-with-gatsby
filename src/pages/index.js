import React from "react"
import {Link,graphql} from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import {BackgroundPart} from "../components/Globals/BackgroundPart"
import {Info} from "../components/Home/Info"
import Menu from "../components/Home/Menu"
import EnergyItems from "../components/Home/EnergyItems"
import Contact from "../components/Home/Contact"
const IndexPage = ({data}) => (

  <Layout> 
    <SEO title="Home" keywords={["gatsby",'application', "react" ]}/>
    <BackgroundPart imgMobile={data.imgMobile.childImageSharp.fluid} img={data.img.childImageSharp.fluid} title="Join to the Revolution" styleClass="default-background"/>
    <Info/>
    <Menu items={data.menu}/>
    <EnergyItems />
    <Contact/>
  </Layout>
)

export const query = graphql`
{
img: file(relativePath: { eq:
"teslaimg.jpg"}) {
  childImageSharp{
    fluid {
      ...GatsbyImageSharpFluid_tracedSVG 
      }
    }
  }
  imgMobile: file(relativePath: { eq:
"mobilebackground.jpg"}) {
  childImageSharp{
    fluid {
      ...GatsbyImageSharpFluid_tracedSVG 
      }
    }
  }
  menu:allContentfulCars{
		edges{
      node{
        id
        title
        description{
          description
        }
        price
        category
        image{
          fixed(width:300, height:150){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }


}`


export default IndexPage
