<template>
  <div id="categories-page" class="page-wrapper categories-page">
    <site-hero title="সেকশনসমূহ" image="/uploads/cathero.jpg" />
    <main-section theme="one-column">
      <categories-grid />
    </main-section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `সেকশনসমূহ | ${this.$siteConfig.siteName}`
    }
  }
}
</script>
