# movies-explorer-dockerized

В этом проекте объединены Фронт и Бэк дипломного проекта яндекс-практикума по программе "Веб-разработчик". 
Ранее требовалось вручную разворачивть фронт и бэк на сервере, отдельно ставить БД, реверс-проекси и заодно решать вопрос с SSL, теперь этот недостаток исправлен.

- Основные команды вынесены в Makefile. Для его использования понадобится установить пакет make. `sudo apt install make`
- Фронт, бэк, БД и веб-сервр запускаются черезе Docker. Больше не надо всё делать вручную
- В роли веб-сервера взят Caddy, который самостоятельно создаёт SSL-сертификаты
- Среда выполнения фронтенда и конфиг caddy (prod или dev) больше не задаются вручную и зависит от запущенного файла docker-compose

Требования:
- macOS, Linux, или Windows с WSL. Рекомендуются дистрибутивы Debian или Ubuntu
- Docker и Docker Compose
- Для запуска на сервере - свободные порты 80 и 443
- По желанию можно добавить пакет make. На Debian и Ubuntu - `sudo apt install make`

Запуск для локального теста или разработки
- Привязать в hosts домен dev.probaland.ru к локалхосту адресу `127.0.0.1	dev.probaland.ru` После надо применить изменения: логаутом, перезагрузкой или через консоль
- `git clone https://github.com/kndenisenko/movies-explorer-dockerized.git`
- `cd movies-explorer-dockerized`
- `make prepare-debian` или make `prepare-macos`
- `make dev` или `docker compose -f docker-compose.dev.yml up -d`
- открыть https://dev.probaland.ru