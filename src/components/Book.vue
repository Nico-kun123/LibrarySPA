<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    authors: {
      type: Array,
      required: true
    },
    year: {
      type: Number,
      required: false
    },
    rating: {
      type: Number,
      required: false
    },
    isbn: {
      type: String,
      required: false
    }
  },
  methods: {
    /**
     * Обработка клика по кнопке "Удалить".
     *
     * Отправляет событие `delete-book` с информацией о книге для удаления родителю (HomeView).
     */
    async handleDelete() {
      const confirmDelete = confirm('Вы уверены, что хотите удалить эту книгу?')
      if (confirmDelete) {
        try {
          // Вызываем метод для удаления книги и передаем информацию о книге для удаления
          this.$emit('delete-book', {
            name: this.name
          })
        } catch (error) {
          console.error('Ошибка при удалении книги:', error)
        }
      }
    }
  }
})
</script>

<template>
  <div class="mainfield__bookfield__book">
    <h2>"{{ name }}"</h2>
    <p>Автор(-ы): {{ authors.join(', ') }}</p>
    <p v-if="year">Год публикации: {{ year }}</p>
    <p v-if="rating !== null">Рейтинг: {{ rating }}</p>
    <p v-if="isbn">ISBN: {{ isbn }}</p>
    <button @click="handleDelete">Удалить</button>
  </div>
</template>

<style lang="scss">
.mainfield__bookfield__book {
  background: white;
  box-shadow: $box-shadow;
  border-radius: $border-radius;
  padding: $padding-main;
  margin-top: 1em;

  & h2 {
    font-size: 20px;
    font-weight: bold;
  }

  & button {
    margin-top: $padding-main;
    padding: 10px;
    border-radius: $border-radius;
    background: #efefef;
  }

  & button:hover {
    background: #e0e0e0;
  }
}
</style>
