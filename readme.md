# Fullstack

Шаблон на Node + React + Redux

Состоит из [Сервер](./server/api.md) и [Клиент](./client/client.md) частей.

Для просмотра задач - [todo](./todo.md)

## Использование

Запуск в окружении разработки - `yarn start` и `yarn dev` для клиента и сервера соответственно.

Для запуска в продакшене необходимо выполнить:

```
Перейти в папку client и собрать все в единый файл из исходных и вернуться в прерыдущую дерикторию

cd client && yarn build && cd ..
```

Далее из корневой папки проекта выполнить:

```
docker-compose build

по окончании

docker-compose up
```

в случае отсутствия докера тогда выполнить`cd server && yarn start`

### Лицензия

Этот проект под лицензией GNU General Public License v3.0 [GNU GPLv3](./license.md)

Не забудьте изменить лицензию, по вашей необходимости.

### Деплой

[ULR](http://node-env.eba-h2rsrmam.eu-central-1.elasticbeanstalk.com/)