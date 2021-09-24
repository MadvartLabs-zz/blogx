<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          লেখা পাঠান
        </p>
        <button
          class="delete"
          aria-label="close"
          @click="isActive = !isActive"
        ></button>
      </header>
      <section class="modal-card-body">
        <input
          v-model="writing.author"
          class="input is-info mb-2"
          type="text"
          placeholder="Author Name"
          required
        />
        <input
          v-model="writing.title"
          class="input is-info mb-2"
          type="text"
          placeholder="Title"
          required
        />
        <input
          v-model="writing.imglink"
          class="input is-info mb-2"
          type="text"
          placeholder="All images drive link"
          required
        />
        <textarea
          v-model="writing.content"
          class="textarea mb-2"
          placeholder="writings gose here.."
          rows="10"
          required
        ></textarea>
        <input
          v-model="writing.fblink"
          class="input is-info mb-2"
          type="text"
          placeholder="Author's FB profile link"
          required
        />
        <p>
          Clicking the send button means you are agreed to our
          <a href="toc" target="_blank">Terms and Conditions.</a>
        </p>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="sendTomail">
          পাঠান
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      writing: {
        title: '',
        imglink: '',
        content: '',
        fblink: '',
        author: ''
      }
    }
  },
  methods: {
    sendTomail() {
      const data = this.writing
      const url = 'https://madmailserver.herokuapp.com/api/send'
      const to = 'mishukbiswas0@gmail.com'
      this.$axios.$post(url, {
        mailOptions: {
          from: 'DU BLOG <madmailserver@gmail.com>',
          to: to,
          subject: 'New Content - DU Blog',
          text: `Author:${data.author}, title : ${data.title} , content : ${data.content} , Images: ${data.imglink}, fbLink:${data.fblink}`
        }
      })
      this.isActive = false
      alert('Your Writing has been sent. Thanks !')
    }
  }
}
</script>

<style>
.mb-2 {
  margin-bottom: 10px;
}
</style>
