<template>
  <div class="search">
    <form action="#">
      <button class="btn">Go</button><input type="text" class="search__input" placeholder="Событие, дата или участник">
    </form>
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
</style>

<script>
export default {};
</script>