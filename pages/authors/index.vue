<template>
  <div id="categories-page" class="page-wrapper categories-page">
    <site-hero title="লেখকবৃন্দ" image="/uploads/cathero.jpg" />
    <main-section theme="one-column">
      <authors-grid :per-row="4" />
    </main-section>
  </div>
</template>
<script>
import AuthorsGrid from '../../components/grids/AuthorsGrid.vue'
export default {
  components: { AuthorsGrid },
  head() {
    return {
      title: `লেখকবৃন্দ | ${this.$siteConfig.siteName}`
    }
  }
}
</script>
