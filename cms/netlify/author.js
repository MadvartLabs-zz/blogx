import { getMixins } from './mixins'

class Author {
  constructor(axios) {
    this.slug = 'author'
    this.slugPlural = 'authors'
    this.pretty = 'Author'
    this.plural = 'Authors'
    this.axios = axios
  }
}

// Mixins
Object.assign(Author.prototype, getMixins)
export default Author
