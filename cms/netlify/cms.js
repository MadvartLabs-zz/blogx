import Post from './post'
import Category from './category'
import Author from './author'
import LifeCycleHooks from './hooks/lifeCycle'
class CMS {
  constructor(axios = false) {
    this.name = 'Netlify'
    this.slug = 'netlify'
    this.post = new Post(axios)
    this.author = new Author(axios)
    this.category = new Category(axios)
    this.lifeCycleHooks = LifeCycleHooks
  }
}
export default CMS
