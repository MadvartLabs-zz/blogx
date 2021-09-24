<template>
  <generic-card
    :title="title"
    :image="image"
    :link="link"
    :image-dimensions="
      $siteConfig.posts.imageDimensions ||
        $siteConfig.cards.imageDimensions ||
        null
    "
  >
    <span
      v-if="author && $siteConfig.posts.displayAuthor"
      class="author-wrapper"
    >
      <strong>লেখক:</strong> {{ author[0] }} |
    </span>
    <span v-if="date" class="date-wrapper">
      <strong>প্রকাশের তারিখ:</strong> {{ datePretty }}
    </span>
    <span v-if="category" class="catclass"> {{ category[0] }} </span>
  </generic-card>
</template>

<script>
import GenericCard from './GenericCard'
import { getFormattedDate } from '~/helper'
export default {
  components: { GenericCard },
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    author: {
      type: Array,
      default: null
    },
    category: {
      type: Array,
      default: null
    }
  },
  computed: {
    datePretty() {
      return getFormattedDate(this.date)
    }
  }
}
</script>

<style>
.catclass {
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
  border: 1px solid rgb(255, 255, 255);
  margin: 7px;
  border-radius: 1px;
  color: aliceblue;
  background-color: rgba(19, 101, 172, 0.849);
}
</style>
