<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero
      title="আমাদের সম্পর্কে জানুন"
      subtitle="লেখক ও পাঠকদের DU BLOGS -এ স্বাগতম"
      image="/uploads/about-hero.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          ঢাকা বিশ্ববিদ্যালয়ের শিক্ষার্থীদের বড় একটা অংশ লেখালেখির সাথে জড়িত।
          কেউ কেউ নিয়মিত লেখক হলেও অনেকেই মাঝেমধ্যে লেখে। নিয়মিত লেখালেখি না
          করার অন্যতম কারন, লেখা প্রকাশ করার যথোপযুক্ত জায়গা না থাকা। এই
          বিষয়টাকে মাথায় রেখেই আমাদের DU Blogs এর যাত্রা। সকল মেধাবী লেখকরা
          যেন বিনা সংকোচে তাঁদের মেধার চর্চা করতে পারে, এই আমাদের লক্ষ্য। এখন
          প্রশ্ন হলো, কেন ডিজিটাল প্ল্যাটফর্ম? অনেকেই হয়তো ডায়েরি লিখে
          থাকেন। যদি জিজ্ঞেস করা হয় ডায়েরি কেন লিখেন হয়তো বলবেন, প্রতিদিনকার
          ঘটনাপঞ্জি গুলো স্মৃতিতে তাগিদে । ডায়েরি লেখার যে প্রচলন আগে ছিলো
          এখন কিন্তু অত নেই। কারন, ফেইসবুক, টুইটার, হোয়াইটসঅ্যাপের আগমনের পর
          থেকেই আমরা এসব তথ্যাদি নিজেদের মধ্যে না রেখে সবার সাথে শেয়ার করায়
          বেশি আগ্রহী হয়ে গেছি। আধুনিক প্রযুক্তি শুধু যোগাযোগই সহজ করেনি
          কিংবা ব্যক্তিগত তথ্যাদি শেয়ারে অনুপ্রেরণা দেয়নি, জ্ঞানের আদান
          প্রদানের সহজ মাধ্যমও হয়ে ওঠেছে। এসব বিষয় মাথায় রেখেই আমাদের এ
          যাত্রা। ব্লগ সাইটটিতে সক্রিয় থেকে বিশ্ববিদ্যালয়ের প্রতিটা শিক্ষার্থী
          যেন নিজের জ্ঞানের পরিধি বাড়াতে এবং লেখালেখির মতো অনন্য সাধারণ একটা
          গুণের চর্চা করতে পারে এটাই আমাদের মূল লক্ষ্য। ব্লগ সাইটটিতে
          বিশ্ববিদ্যালয়ের লেখকরা প্রায় সকল বিষয়ে লেখালেখি করতে পারবে(
          স্পর্শকাতর কিছু বিষয় বাদে)। তাই আশা করা যায় পাঠকদের জন্যও বহুমুখী
          জ্ঞানের উৎস হয়ে ওঠবে আমাদের এ ব্লগ সাইটটি (DU BLOGS)।
          বিশ্ববিদ্যালয়ের সকল লেখক ও পাঠকদের জন্য রইলো অসংখ্য শুভকামনা।
        </div>
      </template>

      <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Latest Posts
        </h3>
        <posts-grid :per-row="1" :number="2" />
      </template>
    </main-section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `অমাদের সম্পর্কে জানুন | ${this.$siteConfig.siteName}`
    }
  }
}
</script>
