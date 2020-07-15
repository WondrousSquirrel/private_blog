# Client

Клиентская часть на реакте.

## Использование

Для установки зависимостей необходимо выполнять команду `yarn install` или `npm install`.

После окончания установки выполнить `yarn start` и проект откроется в браузер.

Так же, можно указать какой браузер использовать в

```javascript
webpack.dev.js

devServer {
    open: 'Google Chrome'
}

```

Для продакшена `yarn build` сгенерирует финальную сборку в папке server