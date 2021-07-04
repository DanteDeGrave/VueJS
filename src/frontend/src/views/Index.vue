<template>
  <div>
    <header class="header">
      <div class="header__logo">
        <a href="index.html" class="logo">
          <img
            src="img/logo.svg"
            alt="V!U!E! Pizza logo"
            width="90"
            height="40"
          />
        </a>
      </div>
      <div class="header__cart">
        <a href="cart.html">0 ₽</a>
      </div>
      <div class="header__user">
        <a href="#" class="header__login"><span>Войти</span></a>
      </div>
    </header>

    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>
          <div class="content__dough">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите тесто</h2>
              <div class="sheet__content dough">
                <label
                  v-for="dough in getDoughData"
                  class="dough__input"
                  :class="`dough__input--${dough.type}`"
                  :key="dough.name"
                >
                  <input
                    type="radio"
                    name="dough"
                    :value="dough.type"
                    class="visually-hidden"
                    :checked="dough.name === 'Тонкое'"
                  />
                  <b>{{ dough.name }}</b>
                  <span>{{ dough.description }}</span>
                </label>
              </div>
            </div>
          </div>
          <div class="content__diameter">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите размер</h2>

              <div class="sheet__content diameter">
                <label
                  v-for="size in sizes"
                  class="diameter__input"
                  :class="`diameter__input--${DIAMETERS[size.multiplier]}`"
                  :key="size.multiplier"
                >
                  <input
                    type="radio"
                    name="diameter"
                    :value="DIAMETERS[size.multiplier]"
                    class="visually-hidden"
                    :checked="size.multiplier === 2"
                  />
                  <span>{{ size.name }}</span>
                </label>
              </div>
            </div>
          </div>

          <div class="content__ingridients">
            <div class="sheet">
              <h2 class="title title--small sheet__title">
                Выберите ингридиенты
              </h2>

              <div class="sheet__content ingridients">
                <div class="ingridients__sauce">
                  <p>Основной соус:</p>

                  <label
                    v-for="sauce in getSaucesData"
                    class="radio ingridients__input"
                    :key="sauce.name"
                  >
                    <input
                      type="radio"
                      name="sauce"
                      :value="sauce.type"
                      :checked="sauce.name === 'Томатный'"
                    />
                    <span>{{ sauce.name }}</span>
                  </label>
                </div>

                <div class="ingridients__filling">
                  <p>Начинка:</p>

                  <ul class="ingridients__list">
                    <li
                      v-for="ingredient in getIngredientData"
                      class="ingridients__item"
                      :key="ingredient.name"
                    >
                      <span
                        class="filling"
                        :class="`'filling--'${ingredient.type}`"
                        >{{ ingredient.name }}
                      </span>

                      <div class="counter counter--orange ingridients__counter">
                        <button
                          type="button"
                          class="
                            counter__button
                            counter__button--disabled
                            counter__button--minus
                          "
                        >
                          <span class="visually-hidden">Меньше</span>
                        </button>
                        <input
                          type="text"
                          name="counter"
                          class="counter__input"
                          value="0"
                        />
                        <button
                          type="button"
                          class="counter__button counter__button--plus"
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="content__pizza">
            <label class="input">
              <span class="visually-hidden">Название пиццы</span>
              <input
                type="text"
                name="pizza_name"
                placeholder="Введите название пиццы"
              />
            </label>

            <div class="content__constructor">
              <div class="pizza pizza--foundation--big-tomato">
                <div class="pizza__wrapper">
                  <div class="pizza__filling pizza__filling--ananas"></div>
                  <div class="pizza__filling pizza__filling--bacon"></div>
                  <div class="pizza__filling pizza__filling--cheddar"></div>
                </div>
              </div>
            </div>

            <div class="content__result">
              <p>Итого: 0 ₽</p>
              <button type="button" class="button button--disabled" disabled>
                Готовьте!
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import user from "@/static/user.json";
import pizza from "@/static/pizza.json";
import misc from "@/static/misc.json";
import { getNewDataInObject } from "@/common/helpers";
import {
  DIAMETERS,
  DOUGH_TYPE,
  SAUCES_LAT,
  INGREDIENTS_LAT,
} from "@/common/constants";

export default {
  name: "IndexHome",
  data() {
    return {
      dough: pizza.dough,
      ingredients: pizza.ingredients,
      sauces: pizza.sauces,
      sizes: pizza.sizes,
      DIAMETERS,
      DOUGH_TYPE,
      SAUCES_LAT,
      INGREDIENTS_LAT,
    };
  },
  computed: {
    getDoughData() {
      return getNewDataInObject(this.dough, DOUGH_TYPE);
    },
    getSaucesData() {
      return getNewDataInObject(this.sauces, SAUCES_LAT);
    },
    getIngredientData() {
      return getNewDataInObject(this.ingredients, INGREDIENTS_LAT);
    },
  },
};
</script>
<style scoped></style>
