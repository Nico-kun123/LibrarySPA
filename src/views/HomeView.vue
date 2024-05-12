<script lang="ts">
import { ref, onMounted, defineComponent } from 'vue'
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore'

// icons
import recommend from '@/components/icons/recommend.vue'
import booksIcon from '@/components/icons/books.vue'

import BookComponent from '@/components/Book.vue'

interface Book {
  name: string
  authors: string[]
  year?: number
  rating?: number
  ISBN?: string
}

export default defineComponent({
  name: 'HomeView',

  setup() {
    const recommendedBookRef = ref<Book | null>(null)
    const booksByYear = ref<{ [key: string]: Book[] }>({})

    let loaded = ref(false)

    /**
     * Получает рекомендованную книгу из базы данных.
     *
     * Критерии выбора рекомендованной книги:
     *  - Должна быть издана не менее 3 лет назад;
     *  - Иметь самый высокий рейтинг.
     *
     * Если нашлось несколько хороших книг выбрать одну случайным образом;
     */
    const fetchRecommendedBook = async () => {
      try {
        const db = getFirestore()
        const booksCollection = collection(db, 'books')
        const querySnapshot = await getDocs(booksCollection)

        const currentDate = new Date()
        const threeYearsAgo = currentDate.getFullYear() - 3

        const filteredBooks = querySnapshot.docs
          .map((doc) => doc.data() as Book)
          .filter(
            (book) =>
              book.year &&
              book.year <= threeYearsAgo &&
              (book.rating === undefined || (book.rating >= 0 && book.rating <= 10))
          )
          .sort((a, b) => (b.rating || 0) - (a.rating || 0))

        const recommendedBook = filteredBooks[Math.floor(Math.random() * filteredBooks.length)]
        recommendedBookRef.value = recommendedBook
      } catch (error) {
        console.error('Не удалось получить рекомендованную книгу:', error)
      }
    }

    /**
     * Получает все книги из базы данных и группирует их по годам.
     */
    const fetchBooks = async () => {
      try {
        const db = getFirestore()
        const booksCollection = collection(db, 'books')
        const querySnapshot = await getDocs(booksCollection)
        const books: Book[] = querySnapshot.docs.map((doc) => doc.data() as Book)

        // Находим уникальные года
        const uniqueYears = Array.from(
          new Set(
            books.map((book) =>
              !book.year || book.year === undefined ? 'Книги без указания года' : book.year
            )
          )
        )

        // Создаем объект для хранения книг по годам
        const booksByYearObject: { [key: string]: Book[] } = {}

        // Добавляем книгу в группу
        uniqueYears.forEach((year) => {
          booksByYearObject[year] = books.filter(
            (book) => book.year === year || (year === 'Книги без указания года' && !book.year)
          )
        })

        // Присваиваем booksByYear значение отсортированного объекта книг по годам
        booksByYear.value = booksByYearObject

        // Сортируем книги по названию
        Object.values(booksByYear.value).forEach((books) => {
          books.sort((a, b) => a.name.localeCompare(b.name))
        })

        // Книги загружены
        loaded.value = true
      } catch (error) {
        console.error('Ошибка при загрузке книг:', error)
      }
    }

    /**
     * Удаляет книгу из базы данных при нажатии на кнопку "Удалить" для соответствующей книги.
     *
     * @param bookName Название книги, которую нужно удалить
     */
    const deleteBook = async (bookName: string) => {
      try {
        const db = getFirestore()
        const booksCollection = collection(db, 'books')
        const querySnapshot = await getDocs(booksCollection)
        const bookToDelete = querySnapshot.docs.find((doc) => doc.data().name === bookName)
        if (bookToDelete) {
          await deleteDoc(doc(booksCollection, bookToDelete.id))
          alert(`Книга "${bookName}" удалена успешно.`)

          // После удаления книги обновляем список книг
          loaded.value = false
          await fetchRecommendedBook()
          await fetchBooks()
        } else {
          console.warn(`Книга "${bookName}" не найдена.`)
        }
      } catch (error) {
        console.error('Ошибка при удалении книги:', error)
      }
    }

    onMounted(() => {
      fetchRecommendedBook()
      fetchBooks()
    })

    return {
      recommendedBookRef,
      booksByYear,
      deleteBook,
      loaded
    }
  },

  components: {
    recommend,
    booksIcon,
    BookComponent
  }
})
</script>

<template>
  <main>
    <div class="mainfield">
      <div class="mainfield__title">
        <recommend />
        <h1>Рекомендуемая книга</h1>
      </div>
      <div class="separator"></div>

      <div class="mainfield__bookfield">
        <p v-if="!recommendedBookRef?.name">Загрузка...</p>
        <BookComponent
          v-else
          :name="recommendedBookRef?.name"
          :authors="recommendedBookRef?.authors"
          :year="recommendedBookRef?.year"
          :rating="recommendedBookRef?.rating"
          :isbn="recommendedBookRef?.ISBN"
        />
      </div>
    </div>
    <div class="mainfield">
      <div class="mainfield__title">
        <booksIcon />
        <h1>Список Книг</h1>
      </div>
      <div class="separator"></div>
      <p>Добро пожаловать на главную страницу нашей библиотеки!</p>
      <div class="mainfield__bookfield">
        <p v-if="!loaded">Загрузка...</p>
        <div
          class="mainfield__bookfield__book-group"
          v-else
          v-for="(books, year) in booksByYear"
          :key="year"
        >
          <h2>{{ year }}</h2>
          <BookComponent
            v-for="book in books"
            :key="book?.name"
            :name="book?.name"
            :authors="book?.authors"
            :year="book?.year"
            :rating="book?.rating"
            :isbn="book?.ISBN"
            @delete-book="deleteBook(book.name)"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.mainfield {
  background: #efefef;
  width: fit-content;
  height: auto;
  margin: calc($padding-main * 2) auto 0 auto;
  box-shadow: $box-shadow;
  border-radius: $border-radius;
  padding: $padding-main;

  &__title {
    display: flex;
    align-items: center;
    padding-left: 10px;
  }
  & h1 {
    padding-left: 10px;
  }

  &__bookfield {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-around;
    margin-top: 20px;
  }
}

.mainfield__bookfield__book-group {
  background: #e0aed0;
  border-radius: $border-radius;
  padding: $padding-main;
  margin-bottom: $padding-main;

  & h2 {
    font-size: 20px;
    font-weight: bold;
  }
}

main :first-child {
  &.mainfield {
    margin: auto;
    margin-top: $margin-main;
    width: fit-content;
    max-width: 700px;
  }
}
</style>
