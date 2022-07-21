import moment from 'moment'
import { Card, Header, Label } from 'semantic-ui-react'
import { articles } from '../../articles'
import { MarkdownAttributes } from '../../articles/types'

const Article = ({ title, description, createdAt, tags }: MarkdownAttributes): JSX.Element => (
  <Card fluid>
    <Card.Content>
      <Card.Header>{ title }</Card.Header>
      <Card.Meta>
        <span className='date'>{ moment(createdAt).fromNow() }</span>
      </Card.Meta>
      <Card.Description>
        { description }
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      { tags.split(' ').map((tag) => (
        <Label key={ tag }>
          { tag }
        </Label>
      )) }
    </Card.Content>
  </Card>
)

export const LastArticles = (): JSX.Element => {
  const lastArticles = articles.slice(0, 5)
  return (
    <>
      <Header as="h3">Recent articles</Header>
      {
        lastArticles.map(({ attributes }) => (
          <Article { ...attributes } key={ attributes.createdAt } />
        ))
      }
    </>
  )
}
