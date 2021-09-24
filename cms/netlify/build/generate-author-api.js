import siteConfig from '../../../config/_siteConfig'
import { createPagination, createMeta, createAll } from './helper'
const rootDir = `${__dirname}/../../..`
const generateAuthorApi = () => {
  const contentDir = `${rootDir}/content/authors`
  const apiDir = `${rootDir}/static/api`
  const allFile = `${apiDir}/authors.json`
  const metaFile = `${apiDir}/authors-meta.json`
  const pages = siteConfig.authors.perPage
  const doneMessage = `{totalNumber} authors generated in authors API`

  createAll(contentDir, allFile, apiDir)
    .then((all) => {
      const totalPages = createPagination(pages, all, `${apiDir}/authors`)
      createMeta({ totalPages: totalPages }, metaFile)
      console.log(doneMessage.replace('{totalNumber}', all.length))
    })
    .catch((err) => {
      console.log(err)
    })
}
export default generateAuthorApi
