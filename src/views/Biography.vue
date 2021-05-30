<template>
  <div :class="$style.container">
    <div :class="$style.iconText">
      <v-img
        :src="require('../assets/icon.svg')"
        contain
        height="300"
				:class="$style.icon"
      />
      <div :class="$style.bio">
        <div :class="$style.name">杏仁^３</div>
        <div :class="$style.belongs">
          <span>
            東京工業大学 システム制御系 B2 <br />
            同 デジタル創作同好会traP 広報補佐 <br />
            Titech App Project
          </span>
        </div>
        <div :class="$style.text">
          <p>
            フロントエンドを中心としたweb開発、ゲーム制作、デジタルイラストやUIデザインに興味があります。<br />
            traPではサークル内で使われるwebアプリのフロントエンド開発やデザイン設計、及びゲーム開発を中心に活動しています。また、広報補佐として部員470名を超えるサークルの運営に携わっています。<br>
						大学では情報・制御工学を中心に学んでいます。
          </p>
        </div>
      </div>
    </div>
    <div :class="$style.cardWrapper">
      <v-card :class="$style.circleCard" max-width="600">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              デジタル創作同好会 traP
            </v-list-item-title>
            <div :class="$style.text">
              東京工業大学・大岡山キャンパスを拠点に活動する創作・プログラミングの総合サークルです。
            </div>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <v-btn rounded text href="https://trap.jp/">
            <v-icon color="grey">mdi-home</v-icon>
          </v-btn>
          <v-btn
            rounded
            text
            href="https://twitter.com/traPtitech"
            target="_blank"
          >
            <v-icon color="#1DA1F2">mdi-twitter</v-icon>
          </v-btn>
          <v-btn
            rounded
            text
            href="https://github.com/traPtitech"
            target="_blank"
          >
            <v-icon color="#24292e">mdi-github</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card :class="$style.circleCard" max-width="600">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              Titech App Project
            </v-list-item-title>
            <div :class="$style.text">
              東工大生向けのアプリやツールの開発を行っているサークルです。
            </div>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <v-btn rounded text href="https://titech.app/">
            <v-icon color="grey">mdi-home</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <!-- <v-timeline>
      <v-timeline-item
        v-for="(event, i) in history"
        :key="i"
        :color="event.color"
        small
      >
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold ${event.color}--text`"
            v-text="event.date"
          ></span>
        </template>
        <div class="py-4">
          <h2 :class="`headline font-weight-light mb-4 ${event.color}--text`">
            {{ event.title }}
          </h2>
          <div>
            {{ event.text }}
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>  -->
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import history from '@/components/Biography/history';

export default Vue.extend({
  name: 'Biography',

  data: () => ({
    history: history,
  }),
});
</script>

<style lang="scss" module>
.container {
}
.iconText {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.name {
  font-size: 2rem;
  text-align: center;
  border-bottom: 1px solid #000000;
  margin: 2rem 0;
}
.bio {
  text-align: center;
}
.belongs {
  text-align: left;
  display: inline-block;
  margin-bottom: 1rem;
}
.icon {
  margin: 2rem;
}

.cardWrapper {
  margin: 4rem 0;
}
.circleCard {
  margin: 2rem auto;
}
.text {
  text-align: left;
  display: inline-block;
  overflow-wrap: break-word;
  color: #6d6d6d;
}
</style>
