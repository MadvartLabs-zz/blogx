<template>
  <footer class="site-footer">
    <send-writing :is-active="active"></send-writing>
    <button class="button is-success" @click="active = !active">
      আপনার লেখা পাঠান
    </button>
    <br />
    <br />
    {{ $siteConfig.siteName }} &copy; {{ new Date().getFullYear() }} - All
    Rights Reserved
    <br />
    Design &amp; Developed By
    <a href="https://madvertlabs.com" target="_blank">MADVERTLABS</a>
  </footer>
</template>

<script>
import SendWriting from './SendWriting.vue'
export default {
  name: 'SiteFooter',
  components: {
    SendWriting
  },
  data() {
    return {
      active: false
    }
  }
}
</script>

<style scoped>
footer {
  background: #eee;
  padding: 20px 10px;
  text-align: center;
  transition: 0.5s ease all;
}
</style>
