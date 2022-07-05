import { About } from './components/About'
import { Navbar } from './components/Navbar'
import { Article } from './components/blog/Article'
import './App.scss'
import { articles } from './articles'
import { Grid } from 'semantic-ui-react'
import { LastArticles } from './components/blog/LastArticles'
import { Social } from './components/Social'

function App () {
  const [article] = articles;
  return (
    <div id="App">
      <Navbar />
      <Grid>
        <Grid.Column mobile={16} tablet={4} computer={4}>
          <About />
          <Social />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={12} computer={8}>
          <Article {...article} />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={4} computer={4}>
          <LastArticles />
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default App
