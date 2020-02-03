import React from "react"
import {Link,graphql} from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import {BackgroundPart} from "../components/Globals/BackgroundPart"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={["gatsby",'application', "react" ]}/>
    <BackgroundPart img={data.img.childImageSharp.fluid} title="Join to the Revolution" styleClass="default-background"/>

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
}`
export default IndexPage
