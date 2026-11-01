# react-app-sample

## Суть
Учебный шаблон React-приложения на Create React App: отработка связки клиентского роутинга и глобального состояния на Context API. Стартовая песочница для экспериментов.

## Стек
- **Create React App** (`react-scripts`), JavaScript.
- **Роутинг:** `react-router-dom` (отдельный компонент `Routes`).
- **Состояние:** React Context API.
- **UI:** `react-icons`; тесты — `@testing-library/*`.

## Архитектура
- `src/components/navbar/Routes.jsx` — карта маршрутов приложения.
- `src/components/context/*` — провайдер контекста.
- `src/components/*` — экраны/блоки; `src/App.js` — сборка.

## Фичи
- **Клиентский роутинг** через react-router.
- **Глобальное состояние** через Context.

## Сложные места
- **Роутинг + Context вместе.** Базовая архитектура SPA: навигация и общий стейт без тяжёлых библиотек.

## Кейсы
- **«SPA-каркас: роутинг + Context».** Минимальная рабочая архитектура React-приложения.
- **Статус: до ИИ.**
- *Примечание: учебный шаблон.*

## Навыки
`React` · `CRA` · `JavaScript` · `react-router` · `Context API`
