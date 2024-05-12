<script setup>
defineProps(['title'])
</script>

<template>
  <div class="card">
    <h1>{{ title }}</h1>
    <div class="separator"></div>
    <p>
      Книги должны быть разбиты на группы по году публикации, группы должны быть отсортированы в
      обратном порядке (сначала новые), внутри группы книги сортируются по названию.
    </p>
    <p>Нужна возможность добавлять и удалять книги.</p>
    <p>Система должна рекомендовать хорошую книгу для прочтения:</p>
    <ul>
      <li>
        Хорошая книга должна пройти проверку временем, поэтому она должна быть издана не менее 3 лет
        назад;
      </li>
      <li>Из всех проверенных временем книг нужно выбрать лучшие - с самым высоким рейтингом;</li>
      <li>Если нашлось несколько хороших книг выбрать одну случайным образом.</li>
    </ul>
    <p>Дополнительные функции (по желанию):</p>
    <ul>
      <li>✅ Валидация ISBN;</li>
      <li>Смена режима группировки (по рейтингу, по автору);</li>
      <li>Редактирование книг;</li>
    </ul>
  </div>
</template>

<style lang="scss">
.card {
  background: #efefef;
  margin: 100px 35px 10px 35px;
  width: fit-content;
  box-shadow: $box-shadow;
  border-radius: $border-radius;
  padding: $padding-main;

  & h1 {
    display: flex;
    justify-content: center;
  }
}

/*  Mobile First */
@media (min-width: 320px) {
  h1 {
    font-size: $font-size-header-s;
  }
}
@media (min-width: 580px) {
  h1 {
    font-size: $font-size-header-m;
  }
}
@media (min-width: 1024px) {
  .card {
    margin: auto;
    margin-top: 100px;
    max-width: 950px;
  }
  h1 {
    font-size: $font-size-header-b;
  }
}
@media (min-width: 1200px) {
  .card {
    max-width: 1100px;
  }
}
</style>
