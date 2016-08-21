<template>
  <div class="modal__wrap" v-if="isModalShow">
    <div class="modal">
      <button class="btn btn_modal-close" @click="close">x</button>
      <div class="modal__body">
        <validator name="validationModal">
          <form @submit.prevent="onSubmit($validationModal.valid)" novalidate>
            <div class="row">
              <input type="text" v-validate:date="{ required: true, date: true}"  v-date-picker class="input" v-model="thisDate" placeholder="дата"/>
              <span class="validation" v-if="$validationModal.date.required">Поле обязательное к заполнению.</span>
              <span class="validation" v-if="$validationModal.date.date">Форматы даты дд.мм.гггг.</span>
            </div>
            <div class="row">
              <input type="text" v-validate:event="{ required: true, minlength: 4 }" class="input" placeholder="Событие" v-model="thisEventName">             
              <span class="validation" v-if="$validationModal.event.required">Поле обязательное к заполнению.</span>
              <span class="validation" v-if="$validationModal.event.minlength">Поле должно содержать минимуи 4 символа.</span>
            </div>
            <div class="row">
              <input type="text" required class="input" placeholder="Имена участников" v-model="thisNames">
            </div>
            <div class="row">
              <textarea 
              type="text" 
              v-validate:description="{ required: true, minlength: 4 }" 
              class="input" 
              placeholder="Описание" 
              v-model="thisDescription"
              ></textarea>

              <span class="validation" v-if="$validationModal.description.required">Поле обязательное к заполнению.</span>
              <span class="validation" v-if="$validationModal.description.minlength">Поле должно содержать минимуи 4 символа.</span>
            </div>
            <button class="btn btn_small" type="submit">Готово</button>
            <button class="btn btn_small btn_red" type="button">Удалить</button>
          </form>
        </validator>
      </div>
    </div>
  </div>
</template>

<style>
  .modal {
    border: 1px solid #4B77BE;
    min-width: 400px;
    border-radius: 3px;
    padding: 20px;
    position: relative;
    background: #fff;
    height: auto;
    flex: 0;
  }

  .modal__wrap {
    min-height: 100vh;
    width: 100vw;
    background: rgba(0,0,0,0.3);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn_modal-close {
    position: absolute;
    right: 20px;
    top: 10px;
  }

  .modal__body {
    padding-top: 30px;
  }

  .input {
    display: block;
    width: 100%;
    padding: 6px;
    font-size: 16px;
  }

  .row {
    margin-bottom: 16px;
  }

  .validation {
    display: block;
    font-size: 12px;
  } 

  .invalid.touched ~ .validation {
    color: red;
  }
  
</style>

<script>
import {
  showModal,
  hideModal,
  setDateModal,
  setEventModal,
  setNamesModal,
  setDescriptionModal,
  addEvent } from '../vuex/actions';

import {
  isModalShow,
  getModalData,
  getDateModal,
  getEventModal,
  getNamesModal,
  getDescriptionModal } from '../vuex/getters';

export default {
  computed: {
    thisDate: {
      get() {
        if (!this.getDateModal) return this.getDateModal;

        const year = this.getDateModal.getFullYear();
        let month = this.getDateModal.getMonth();
        let day = this.getDateModal.getDate();

        day = (day < 9) ? `0${day}` : day;
        month = (month < 9) ? `0${month}` : month;

        return `${day}.${month}.${year}`;
      },
      set(val) {
        const date = val.split('.');
        if (/\d\d.\d\d.\d\d\d\d/.test(val)) {
          this.setDateModal(new Date(date[2], date[1], date[0]));
        }
      },
    },
    thisEventName: {
      get() {
        return this.getEventModal;
      },
      set(val) {
        this.setEventModal(val);
      },
    },
    thisNames: {
      get() {
        return this.getNamesModal;
      },
      set(val) {
        this.setNamesModal(val);
      },
    },
    thisDescription: {
      get() {
        return this.getDescriptionModal;
      },
      set(val) {
        this.setDescriptionModal(val);
      },
    },
  },
  methods: {
    clear() {
      this.setDateModal('');
      this.setEventModal('');
      this.setNamesModal('');
      this.setDescriptionModal('');
    },
    onSubmit(isValid) {
      if (isValid) {
        this.addEvent({
          date: this.getDateModal,
          name: this.thisEventName,
          names: this.thisNames,
          description: this.thisDescription,
        });

        this.hideModal();
        this.clear();
      }
    },
    close() {
      this.hideModal();
      this.clear();
    },
  },
  vuex: {
    getters: {
      isModalShow,
      getModalData,
      getDateModal,
      getEventModal,
      getNamesModal,
      getDescriptionModal,
    },
    actions: {
      showModal,
      hideModal,
      setDateModal,
      setEventModal,
      setNamesModal,
      setDescriptionModal,
      addEvent,
    },
  },
};
</script>
