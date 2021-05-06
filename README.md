## Инструменты создания контента

* [Vue 3](https://v3.vuejs.org/guide/template-syntax.html#interpolations) - Как спосбоб описания шаблонов отображения, компонентов
* [Quasar](https://next.quasar.dev/vue-components/button) - Возможность воспользоваться готовыми компонентами вроде кнопок и форм
* [Pug](https://pugjs.org/language/attributes.html) - Возможность интерпретирования HTML
* [Saas](https://sass-lang.com/guide) - Возможность интерпретирования CSS
* [Typescript](https://www.typescriptlang.org/docs/handbook/2/generics.html) - Опциональная типизация с средней проверкой типов
* [TSX/JSX](https://github.com/vuejs/jsx-next) - Способ описания функциональных компонетов

## Иструменты модели и логического состояния.
В основе лежит реактивная частица "алак-атом" передачи данных, аналог `ref` и `reactive` от vue, но более производительная и применимая к чистым функциям js/ts.
* [алак-атом](https://alak.now.sh/)

Так же используется коннектор к vue -`avuef` и композиция контроллера модели - `lasens`.
Эти два решения временно не распологают документацией, но уже достаточно стабилизировались для применения.
С любиыми вопросами можно писать в [телегу](https://t.me/glebpw)


## Инструменты сборки архитектуры проекта
* [Vite](https://vitejs.dev) - Основной сборщик
* [Voie Plugin](https://github.com/brattonross/vite-plugin-voie) - Маршрутизация на основе файловой системы
* [Сomponents Plugin](https://github.com/antfu/vite-plugin-components) - Автоматический импорт компонентов в vue-темплейтах
### Иконки
Автоматический импорт иконок из клипарта Iconify
* [клипарт](https://icones.js.org/collection/all)
* [vite-plugin-icons](https://github.com/antfu/vite-plugin-icons)

Находим иконку в клипарте вроде `collection:icon`, и добавлем в шаблон по соглашению `{prefix}-{collection}-{icon}`, примеры:
* `<icon-mdi-account />`
* `<i-mdi-account />`
* `<mdi-account />`

## Рекомендации к IDE
### WebStorm
последний из коробки.
### [VSCode](https://code.visualstudio.com/)
требуется настраивать со всеми плагинами для vue и прочими.

вроде [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). 

Make sure to enable `vetur.experimental.templateInterpolationService` in settings!
#### If Using `<script setup>`
[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

# NoteBene
## Возможно расширение
* [imp](https://github.com/onebay/vite-plugin-imp) - A vite plugin for import library component style automatic.
* [svg](https://github.com/anncwb/vite-plugin-svg-icons) - Used to generate svg sprite map.
