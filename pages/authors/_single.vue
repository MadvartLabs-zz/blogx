<template>
  <div id="category-page" class="page-wrapper category-page">
    <site-hero
      :title="$store.state.name"
      :subtitle="$store.state.content"
      :image="$store.state.image"
    />
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <!-- Posts in authot -->
        <posts-grid
          :author="[$store.state.name]"
          :isfrom-author="true"
          :per-row="2"
        />
      </template>
      <template v-slot:sidebar>
        <h3 class="subtitle">
          লেখকবৃন্দ
        </h3>
        <div class="panel">
          <nuxt-link
            v-for="author in allAuthors"
            :key="author.slug"
            :to="`/authors/${author.slug}`"
            :class="{
              'panel-block': true,
              'is-active': author.slug === $route.params.single
            }"
          >
            {{ author.name }}
          </nuxt-link>
        </div>
      </template>
    </main-section>
  </div>
</template>
<script>
import { setPageData } from '../../helper'
export default {
  data() {
    return {
      allAuthors: []
    }
  },
  head() {
    return {
      title: `${this.$store.state.name} | ${this.$siteConfig.siteName}`
    }
  },
  fetch({ store, params }) {
    setPageData(store, { resource: 'author', slug: params.single })
  },
  async created() {
    this.allAuthors = await this.$cms.author.getAll()
  }
}
</script>
