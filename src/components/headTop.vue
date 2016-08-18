<template>
  <header class="head">
    <div class="head__inner">
      <div class="head__buttons-wrap">
        <button class="btn">Добавить</button>
        <button class="btn">Обновить</button>
      </div>
      <div class="head__search-wrap">
        <slot></slot>
      </div>
    </div>
  </header>
</template>

<style>
  .head {
    background: #DADFE1;
    margin-bottom: 20px;
  }

  .head__inner {
    max-width: 960px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }

  .btn {
    font-size: 1em;
    background: #4183D7;
    color: #fff;
    border: 0;
    outline: 0;
    padding: 6px 12px;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color .3s;
  }

  .btn:hover {
    background: #59ABE3;
  }

  .btn:active {
    background: #446CB3;
  }

  .head__buttons-wrap .btn {
    margin-right: 10px;
  }

  .btn_small {
    font-size: 12px;
  }

  .btn_red {
    background: #D64541;
  }

  .btn_red:hover {
    background-color: #EC644B;
  }
  
  .btn_red:active {
    background-color: #C0392B;
  }
</style>

<script>
export default {};
</script>