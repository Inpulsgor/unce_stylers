import React, { FC } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { red } from "@mui/material/colors"

import Layout from "../components/layout"
import Seo from "../components/seo"

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
})


const IndexPage: FC = () => (
	<ThemeProvider theme={theme}>
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
		</ThemeProvider>
  </Layout>
)

export default IndexPage
