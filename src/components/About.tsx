import moment from "moment"
import { Card, Grid, Header, Image } from "semantic-ui-react"

export const About = () => (
  <Card fluid>
    <Image src='https://avatars.githubusercontent.com/u/31008259' circular />
    <Card.Content>
      <Card.Header>Luis Alcaras</Card.Header>
      <Card.Meta>
        <>
          <p>JavaScript Engineer</p>
          { moment('2017-08-15').fromNow() } of experience.
        </>
      </Card.Meta>
      <Card.Description>
        <p>I am a <b>JavaScript Engineer</b>. I learn about people and the complexity of the world through coding.</p>
        <p>I am also a <b>Linux Expert</b>.</p>
      </Card.Description>
    </Card.Content>
  </Card>
)
