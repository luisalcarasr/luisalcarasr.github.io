import { Markdown } from "../../articles/types";
import './Article.scss'

export const Article = ({attributes, html}: Markdown) => {
  console.log(attributes);
  return (
    <div className="article" dangerouslySetInnerHTML={{__html: html}}></div>
  )
}