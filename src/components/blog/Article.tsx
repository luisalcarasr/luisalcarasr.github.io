import { Markdown } from "../../articles/types";

export const Article = ({attributes, html}: Markdown) => {
  console.log(attributes);
  return (
    <>
      <div dangerouslySetInnerHTML={{__html: html}}></div>
    </>
  )
}