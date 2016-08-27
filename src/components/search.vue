<template>
  <div class="search">
    <form action="#">
      <button class="btn">Go</button><input @keyup="search" v-model="thisSearch" type="text" class="search__input" placeholder="Событие, дата или участник">
    </form>
    <div v-show="suggestItems.length" class="search__suggest">
      <ul class="list">
        <li class="list__item" v-for="item in suggestItems">
          <div class="search__suggest-item" @click="showDay(item.event)">{{ item.matchString }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.search__input {
  padding: 6px 12px;
  border: 1px solid #4183D7;
  border-radius: 0 3px 3px 0;
  outline: 0;
  transition: border-color .3s;
  width: 204px;
}

.search .btn {
  border-radius: 3px 0 0 3px;
}

.search .btn:hover + .search__input {
  border-color: #59ABE3;
}

.search .btn:active + .search__input {
  border-color: #446CB3;
}

.search form {
  display: flex;
}

.search {
  position: relative;
}

.search__suggest  {
  position: absolute;
  background: #fff;
  padding: 10px;
  border: 1px solid #4183D7;
  left: 0;
  right: 0;
}

.search__suggest-item {
  cursor: pointer;
  font-size: 12px;
  display: inline-block;
}

.search__suggest-item:last-child {
  margin-bottom: 0;
}

.list {
  padding: 0;
  margin: 0;
}

.list__item {
  list-style: none;
  margin-bottom: 10px;
}
</style>

<script>
import {
showModal,
setDateModal,
setEventModal,
setNamesModal,
setDescriptionModal,
setFound,
setSearchText } from '../vuex/actions';

import {
events,
getFound,
getSearchText } from '../vuex/getters';

export default {
  data() {
    return {
      suggestItems: [],
    };
  },
  computed: {
    thisSearch: {
      get() {
        return this.getSearchText;
      },
      set(val) {
        this.setSearchText(val);
      },
    },
  },
  methods: {
    search() {
      this.suggestItems = [];
      this.findEvents(this.events, this.thisSearch);
    },
    findEvents(eventsObj, text) {
      if (eventsObj) {
        const parentEventObj = eventsObj;
        const keys = Object.keys(parentEventObj);

        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          if (typeof parentEventObj[key] === 'object') {
            this.findEvents(parentEventObj[key], text);
          } else if (parentEventObj[key].indexOf(text) >= 0 && text.length >= 3) {
            console.log(parentEventObj);
            this.suggestItems.push({
              event: parentEventObj,
              matchString: parentEventObj[key],
            });
          }
        }
      }
    },
    fillForm(data) {
      this.setDateModal(data.date);
      this.setEventModal(data.name);
      this.setNamesModal(data.names);
      this.setDescriptionModal(data.description);
    },
    showDay(event) {
      console.log(event);
      console.log(event.dateString);
      console.log(event.name);
      console.log(event.names);
      console.log(event.description);
      this.fillForm(event);
      this.showModal();
    },
  },
  vuex: {
    actions: {
      showModal,
      setDateModal,
      setEventModal,
      setNamesModal,
      setDescriptionModal,
      setFound,
      setSearchText,
    },
    getters: {
      events,
      getFound,
      getSearchText,
    },
  },
};
</script>