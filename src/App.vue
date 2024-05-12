<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import Title from '../src/components/Title.vue'
</script>

<template>
  <header>
    <nav>
      <div class="logo">
        <RouterLink to="/">
          <div class="logo__wrapper">
            <img src="./assets/UI/logo.svg" alt="Logo" width="45px" height="45px" />
            <h1>Библиотека</h1>
          </div>
        </RouterLink>
      </div>

      <div class="nav__links">
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/AddBook">Добавить Книгу</RouterLink>
      </div>
    </nav>
  </header>
  <!-- <div class="background"></div> -->

  <Title title="SPA “Каталог книг”" />
  <RouterView />
</template>

<style lang="scss">
.separator {
  width: 100%;
  height: 1px;
  background-color: hsl(0, 0%, 80%);
  margin: 20px 0;
  padding: 0 15px;
}
.logo {
  padding: 5px 0 5px 30px;

  & .logo__wrapper {
    display: flex;
    align-items: center;

    & h1 {
      margin-left: 5px;
      color: white;
    }
  }
}

.background {
  margin: 70px 50px 10px 50px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  z-index: 0;
}

.nav__links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  gap: 30px;

  & a {
    color: white;

    &:hover {
      color: hsl(0, 0%, 80%);
    }
  }
}

/*  Mobile First */
@media (min-width: 1024px) {
  .logo {
    padding: 10px 0 10px 50px;
  }
}
@media (min-width: 1200px) {
  .logo {
    padding: 10px 0 10px 100px;
  }
}
</style>
