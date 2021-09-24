<template>
  <resource-grid
    v-bind="$props"
    :resource="$cms.author"
    :theme="$siteConfig.authors.theme || $siteConfig.cards.theme || null"
  >
    <template v-slot:default="{ item }">
      <AuthorCard
        :title="item.name"
        :link="item.slug ? `/authors/${item.slug}` : ''"
        :image="item.image"
        :description="item.description"
      />
    </template>
  </resource-grid>
</template>

<script>
import AuthorCard from '~/components/cards/AuthorCard'
export default {
  name: 'AuthorsGrid',
  components: { AuthorCard },
  props: {
    perRow: { type: Number, default: 3 },
    number: { type: Number, default: 0 },
    order: { type: String, default: 'DESC' },
    exclude: { type: String, default: '' }
  }
}
</script>
