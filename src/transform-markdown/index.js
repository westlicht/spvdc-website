import remark from "remark"
import html from "remark-html"
// import react from "remark-react"

function transform(text) {
  return remark()
    .use(html, { entities: "escape" })
    // .use(react)
    .process(text, {
      commonmark: true,
    })
    .toString()
}

export default transform;
