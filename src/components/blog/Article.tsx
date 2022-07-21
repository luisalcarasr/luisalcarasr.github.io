import { Markdown } from '../../articles/types'
import './Article.scss'

export const Article = ({ attributes, html }: Markdown): JSX.Element => {
  console.log(attributes)
  return (
    <div className="article" dangerouslySetInnerHTML={ { __html: html } }></div>
  )
}
