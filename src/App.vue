<template>
  <div id="app">
    <head-top>
      <search></search>
    </head-top>
    <main class="content">
      <calendar></calendar>
    </main>
    <modal>dasdasdas</modal>
  </div>
</template>


<script>
import HeadTop from './components/headTop.vue';
import Search from './components/search.vue';
import Calendar from './components/calendar.vue';
import Modal from './components/modal.vue';

import { events } from './vuex/getters';
import { addEvent } from './vuex/actions';

export default {
  methods: {
    getEventsFromStore() {
      const storageEvents = Object.keys(localStorage);
      let event;
      if (storageEvents) {
        storageEvents.forEach((item) => {
          event = JSON.parse(localStorage[item]);
          event.date = new Date(event.date);
          this.addEvent(event);
        });
        this.$broadcast('refresh-table');
      }
    },
  },
  ready() {
    this.getEventsFromStore();
  },
  components: {
    HeadTop,
    Search,
    Calendar,
    Modal,
  },
  vuex: {
    getters: {
      events,
    },
    actions: {
      addEvent,
    },
  },
};
</script>

<style>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;  
}

body {
  margin: 0;
  font-size: 1em;
}

#app {
  color: #2c3e50;
  font-family: Source Sans Pro, Helvetica, sans-serif;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.content {
  max-width: 960px;
  margin: auto;
  padding: 0 20px;
}

</style>
