<template>
  <main
    class="page animated"
    :style="{ backgroundColor: currentColor }"
  >
    <container>
      <quote
        :text="currentQuote.quote"
        :author="currentQuote.author"
      />
      <app-cta>
        <button-quote
          :label="newQuoteLabel"
          :onClick="onUpdateQuote"
          :color="currentColor"
        />
      </app-cta>
    </container>
    <app-footer>
      <button-twiter
        :label="tweetLabel"
        :onClick="composeTweet"
      >
        <icon-twitter />
      </button-twiter>
      <app-footer-credits :color="currentColor" />
    </app-footer>
  </main>
</template>

<script>
// components
import Container from '@/components/Container.vue';
import Quote from '@/components/Quote.vue';
import ButtonQuote from '@/components/ButtonQuote.vue';
import ButtonTwiter from '@/components/ButtonTwitter.vue';
import IconTwitter from '@/components/IconTwitter.vue';
import AppCta from '@/components/AppCta.vue';
import AppFooter from './components/AppFooter.vue'
import AppFooterCredits from '@/components/AppFooterCredits.vue';

// data
import quotes from '@/data/quotes';
import colors from '@/data/colors';

// lib
import Random from '@/lib/Random';

const randomQuote = new Random(quotes.length);
const randomColor = new Random(colors.length);

export default {
  name: 'app',
  components: {
    Container,
    Quote,
    ButtonQuote,
    ButtonTwiter,
    IconTwitter,
    AppCta,
    AppFooter,
    AppFooterCredits
  },
  data() {
    return {
      currentQuote: quotes[randomQuote.new],
      currentColor: colors[randomColor.new],
      tweetLabel: 'Tweet This',
      newQuoteLabel: 'Conquer Monday',
    }
  },
  methods: {
    onUpdateQuote() {
      this.currentQuote = quotes[randomQuote.new];
      this.currentColor = colors[randomColor.new];
    },
    composeTweet() {
      // My tweet object
      const tweet = {
        url: "https://twitter.com/intent/tweet?",
        via: "via=AlexisReina&",
        hashtags: "hashtags=freecodeamp,quotemachine&",
        related: "related=@CreativeMarket&",
        text: "text=" + this.currentQuote.quote.replace(/<br>|\s/g, ' ')
      };

      const url = encodeURI(tweet.url + tweet.hashtags + tweet.via + tweet.related + tweet.text);

      const title = "";

      const options = "resizable=yes,toolbar=no,status=no,location=no,menubar=no,scrollbars=yes"

      // Open the tweet window
      // https://developer.mozilla.org/es/docs/Web/API/Window/open
      window.open(url, title, options);
    },
  }
}
</script>

<!-- Global Styles -->
<style>
@import url(//fonts.googleapis.com/css?family=Montserrat:700,400|Open+Sans:400,300);

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}

body,
html {
  margin: 0;
  text-align: center;
  font: normal 100%/1.5 Montserrat, sans-serif;
}

blockquote,p,cite {
  display: block;
  margin: 0;
  padding: 0;
  margin-bottom: 1.5rem;
  font-style: normal;
}

a,
a:visited {
  display: inline-block;
  padding: 1px;
  text-decoration: none;
  border-bottom: 1px solid;
  color: #8aa651;
}

button {
  display: inline-block;
  background: none;
  border: 0;
  font: 300 81.25%/1 Open Sans, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.17em;
  padding: 16px 24px;
  background-color: #ccc;
  color: white;
  border-radius: 3px;
}

.animated {
  transition: all 500ms ease;
}
</style>

<style scoped>
.page {
  padding-top: 4.5rem;
  background-color: #8aa651;
}
@media screen and (min-width: 650px) {
  .page {
    padding-top: 6rem;
  }
}
</style>
