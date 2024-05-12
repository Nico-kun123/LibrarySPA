<script lang="ts">
import { defineComponent } from 'vue'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

// router
import router from '@/router'

// icons
import booksIcon from '@/components/icons/books.vue'

// IBSN валидация
import { isbn } from '@form-validation/validator-isbn'

interface Book {
  name: string
  authors: string[]
  year?: number | null
  rating?: number | null
  ISBN?: string | null
}

export default defineComponent({
  name: 'AddBookView',

  setup() {
    /**
     * Обрабатывает форму.
     *
     * @param event форма, которую нужно обработать.
     */
    const handleSubmit = async (event: Event) => {
      event.preventDefault()
      const name = (event.target as HTMLFormElement).name.value
      const authors = (event.target as HTMLFormElement).authors.value.split(',')
      let year: number | null = parseFloat((event.target as HTMLFormElement).year.value)
      let rating: number | null = parseFloat((event.target as HTMLFormElement).rating.value)
      let ISBN = (event.target as HTMLFormElement).ISBN.value

      // Удаляем пробелы из авторов
      authors.forEach((author: string, index: number) => {
        authors[index] = author.trim()
      })

      // Если поля "Год издания" и "Рейтинг" не являются числами, устанавливаем их значение как `null`
      if (isNaN(year)) {
        year = null
      }
      if (isNaN(rating)) {
        rating = 0
      }
      if (ISBN.trim() === '') {
        ISBN = null
      }

      // Валидация данных
      if (await validateForm(name, authors, year, rating, ISBN)) {
        const newBook: Book = { name, authors, year, rating, ISBN }

        // Добавляем книгу в Firestore
        try {
          await addBookToFirestore(newBook)

          clearForm(event.target as HTMLFormElement)
          alert('Книга успешно добавлена в Firestore!')
          router.push('/')
        } catch (error) {
          alert('Ошибка при добавлении книги в Firestore!')
          console.error('Ошибка при добавлении книги в Firestore:', error)
        }
      }
    }

    /**
     * Добавляет книгу в Firestore.
     *
     * @param book объект книги, который нужно добавить в Firestore
     */
    const addBookToFirestore = async (book: Book) => {
      try {
        const db = getFirestore()
        const booksCollection = collection(db, 'books')
        await addDoc(booksCollection, book)
      } catch (error: any) {
        throw new Error(error)
      }
    }

    /**
     * Валидация формы создания книги.
     *
     * @param name Название книги
     * @param authors Автор (или авторы) книги (разделяются запятыми, если их несколько)
     * @param year Год публикации (может быть `null`)
     * @param rating Рейтинг книги (от 0 до 5, может быть `null`)
     * @param ISBN ISBN-код книги (может быть `null`)
     */
    const validateForm = async (
      name: string,
      authors: string[],
      year: number | null,
      rating: number | null,
      ISBN: string
    ) => {
      if (name.trim() === '') {
        alert('❌ Название не может быть пустым!')
        return false
      }
      if (name.length > 100) {
        alert('❌ Название не может быть длиннее 100 символов!')
        return false
      }
      if (authors.some((author) => author.trim() === '')) {
        alert('❌ Книга должна содержать хотя бы одного автора!')
        return false
      }
      if (year && year < 1800) {
        alert('❌ Год должен быть больше 1800!')
        return false
      }
      if (rating && (rating < 0 || rating > 10)) {
        alert('❌ Рейтинг должен быть от 0 до 10!')
        return false
      }
      if (ISBN && ISBN.trim() !== '' && !isValidISBN(ISBN)) {
        alert('❌ Некорректный ISBN!')
        return false
      }
      return true
    }

    /**
     * Проверяет, является ли ISBN-код корректным.
     *
     * @param ISBN ISBN-код
     */
    const isValidISBN = (ISBN: string) => {
      const isValid = isbn().validate({
        value: ISBN,
        options: {
          message: 'Неверный формат ISBN-кода!'
        }
      })

      console.log('ISBN type:', isValid.meta, `\nISBN is valid: ${isValid.valid}`)

      return isValid.valid
    }

    /**
     * Очищает форму после успешной валидации.
     *
     * @param form форма, которую нужно очистить
     */
    const clearForm = (form: HTMLFormElement) => {
      form.reset()
    }

    return {
      handleSubmit
    }
  },

  components: { booksIcon }
})
</script>

<template>
  <main>
    <div class="mainfield">
      <div class="mainfield__title">
        <booksIcon />
        <h1>Создать Книгу</h1>
      </div>
      <div class="separator"></div>

      <p class="mainfield__message">*Поля обязательны для заполнения</p>
      <form @submit="handleSubmit" class="mainfield__form">
        <div class="mainfield__form__group">
          <label for="name">Название книги*</label>
          <input type="text" id="name" name="name" />
        </div>
        <div class="mainfield__form__group">
          <label for="authors">Автор(-ы)*</label>
          <input type="text" id="authors" name="authors" />
        </div>
        <div class="mainfield__form__group">
          <label for="year">Год публикации</label>
          <input type="number" id="year" name="year" />
        </div>
        <div class="mainfield__form__group">
          <label for="rating">Рейтинг</label>
          <input type="string" id="rating" name="rating" />
        </div>
        <div class="mainfield__form__group">
          <label for="ISBN">ISBN</label>
          <input type="text" id="ISBN" name="ISBN" />
        </div>
        <p>Подсказка: Если у книги несколько авторов, то введите их через запятую.</p>
        <button type="submit">Добавить книгу</button>
      </form>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.mainfield {
  margin: auto $margin-main;

  &__message {
    color: red;
  }
  &__form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: $padding-main auto;
    width: fit-content;

    &__group {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    & button {
      margin-top: $padding-main;
      padding: 10px;
      border-radius: $border-radius;
    }

    & button:hover {
      background: #e0e0e0;
    }

    & label {
      font-weight: bold;
    }
  }

  @media screen and (min-width: 768px) {
    .mainfield {
      &__form {
        width: fit-content;
      }
    }
  }
}
</style>
