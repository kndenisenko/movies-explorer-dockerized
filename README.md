# movies-explorer-dockerized

В этом проекте объединены Фронт и Бэк дипломного проекта яндекс-практикума по программе "Веб-разработчик". 
Ранее требовалось вручную разворачивть фронт и бэк на сервере, отдельно ставить БД, реверс-проекси и заодно решать вопрос с SSL, теперь этот недостаток исправлен.

- Фронт, бэк, БД и веб-сервр запускаются черезе Docker. Больше не надо всё делать вручную
- В роли веб-сервера взят Caddy, который самостоятельно создаёт SSL-сертификаты
- Основные команды вынесены в Makefile

Требования:
- Node JS v16
- Docker и Docker Compose
- Свободные порты 8080, 80, 443 и 27017

Запуск 
- xxxx
- xxxx
- ????
- Profit!