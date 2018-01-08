import Typography from "typography"
import githubTheme from "typography-theme-github"

githubTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1': {
    marginBottom: rhythm(0),
    marginTop: rhythm(0),
    paddingTop: rhythm(1)
  }
})

const typography = new Typography(githubTheme)

export default typography