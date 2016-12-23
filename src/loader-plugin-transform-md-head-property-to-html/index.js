import flatten, {unflatten} from "flat"
import remark from "remark"
import slug from "remark-slug"
import autoLinkHeadings from "remark-autolink-headings"
import highlight from "remark-highlight.js"
import toc from "remark-toc"
import html from "remark-html"

function mapObjectEntries(obj, callback) {
  let mapped = {}
  for (const key in obj) {
    const value = obj[key]
    if (typeof(value) === "object") {
      mapped[key] = mapObjectEntries(value, callback)
    } else {
      mapped[key] = callback(key, value)
    }
  }
  return mapped
}

function mdify(head) {
  head.title += "2"
  return head

  //  const flattenHead = flatten(head)
  //  const flattenHeadMdify = flattenHead.map(prop => remark()
  //    .use(slug)
  //    .use(autoLinkHeadings, {
  //      content: {
  //        type: "text",
  //        value: "#",
  //      },
  //      linkProperties: {
  //        className: "phenomic-HeadingAnchor",
  //      },
  //    })
  //    .use(html, { entities: "escape" })
  //    .use(highlight)
  //    .use(toc)
  //    .process(text, {
  //      commonmark: true,
  //    })
  //    .toString()
  //  )
  //
  // return unflatten(flattenHeadMdify)
}

export default ({result, frontMatter}) => ({
  ...result,
  head: mdify(result.head),
})
