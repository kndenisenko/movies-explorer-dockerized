# movies-explorer-dockerized

## Что было вначале
В этом проекте объединены [фронтенд](https://github.com/kndenisenko/movies-explorer-frontend) и [бэкенд](https://github.com/kndenisenko/movies-explorer-api) дипломного проекта яндекс-практикума по программе "Веб-разработчик". Ранее требовалось вручную разворачивть фронт и бэк на сервере, запускать и мониторить их через PM2, отдельно ставить и настраивать БД, реверс-проекси и заодно решать вопрос с SSL. И вручную переключатся между средами: прод или дев.


### Адаптация и запуск через Docker Compose
- Проект разнесён по докер-контейнерам, у которых нет доступа наружу. За внешний доступ отвечает реверс-прокси
- В роли реверс-прокси взят Caddy, который самостоятельно создаёт SSL-сертификаты на проде.
- Среды выполнения фронтенда и конфиг caddy (prod или dev) больше не задаются вручную. Теперь они зависит от запущенного файла docker-compose или команд make. Например `make dev`, `make prod` и других. Для использования make понадобится установить одноимённый пакет. `sudo apt install make`
- Для Бэкенда (API) больше не требуется отдельный домен. Все запросы в контейнере backend проксируются с адреса `probaland.ru/api/` на бэкенд
- Создана папка mongodata для хранения данных MongoDB на хост-машине
- На бэкенде `bycrypt` заменён на `bycriptjs` для корректной работы проекта на Linux и macOS
- добавлен сервис [Dozzle](https://github.com/amir20/dozzle) для мониторинга контейнеров, который запускается по адресу `stat-dev.probaland.ru` в среде разработки и по адресу `stat.probaland.ru` на проде. Логин и пароль для доступа: `admin` `admin`

### Github Actions
В проект добавлены Github Actions для проверки и автоматизации запуска проекта. В Github Actions настроена проверка контейнеров через docker/setup-buildx-action@v2. При успешной сборке происходит git pull и перезапуск проекта через appleboy/ssh-action@v1. Github Actions срабатывает при пуши или мердже в нужную ветку.

### Общие требования для запуска:
- macOS, Linux, или Windows с WSL. Рекомендуются дистрибутивы Debian или Ubuntu
- Docker и Docker Compose
- Для запуска на внешнем сервере - свободные порты 80 и 443
- По желанию можно добавить пакет make. На Debian и Ubuntu - `sudo apt install make`

### Запуск для локального теста или для разработки
- Привязать в hosts домен dev.probaland.ru к локалхосту: `127.0.0.1	dev.probaland.ru`. После надо применить изменения: логаутом, перезагрузкой или через консоль
- По желанию добавить в hosts `127.0.0.1	dev-stat.probaland.ru` для открытия dozzle (мониторинг конейнеров)
- `git clone https://github.com/kndenisenko/movies-explorer-dockerized.git`
- `cd movies-explorer-dockerized`
- `make prepare-debian` (Debian, Ububtu) или make `prepare-macos` в зависимости от ОС. 
- `make dev` или `export UID=$(id -u) && export GID=$(id -g) && docker compose -f docker-compose.yml up -d`
- Открыть https://dev.probaland.ru. При первом открытии надо принять сертификат. В Safari возможны проблемы совместимости. Если появляется ошибка типа SEC_ERROR_UNKNOWN_ISSUER, то надо почистить кэш браузера