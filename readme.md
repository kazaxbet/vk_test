
# Playwright Project

Этот проект использует [Playwright](https://playwright.dev/) для автоматизации тестирования веб-приложений. В проекте реализованы тесты для создания, редактирования и закрытия задач на GitHub.

## Структура проекта

project/
├── node_modules/
├── src/
│ ├── pages/
│ │ └── issue.page.ts
│ └── tests/
│ ├── create-issue.spec.ts
│ ├── edit-issue.spec.ts
│ └── close-issue.spec.ts
├── playwright.config.ts
├── package.json
└── tsconfig.json



## Предварительные требования

Убедитесь, что на вашем компьютере установлены следующие программы:

- [Node.js](https://nodejs.org/en/download/) (рекомендуется версия LTS)
- [npm](https://www.npmjs.com/get-npm) (должен быть установлен вместе с Node.js)

## Установка

1. Склонируйте репозиторий:

   ```bash
   git clone https://github.com/your_username/your_repository.git
   cd your_repository
Установите зависимости:
npm install
Создайте файл .env в корне проекта и добавьте ваш GitHub токен:
## Далее нужно настроить env и логин через токен, что у меня и не получилось.
env
GITHUB_TOKEN=your_github_token_here
## Далее следовало только скачать приложенные файлы с кодом расположить их правильно в проекте и запустить "npm run test"
