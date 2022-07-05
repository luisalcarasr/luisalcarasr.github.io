import { About } from './components/About'
import { Navbar } from './components/Navbar'
import { Article } from './components/blog/Article'
import './App.scss'
import { articles } from './articles'
import { Grid } from 'semantic-ui-react'
import { LastArticles } from './components/blog/LastArticles'

function App () {
  const [article] = articles;
  return (
    <div id="App">
      <Navbar />
      <Grid>
        <Grid.Column width={4}>
          <About />
        </Grid.Column>
        <Grid.Column width={8}>
          <Article {...article} />
        </Grid.Column>
        <Grid.Column width={4}>
          <LastArticles />
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default App
