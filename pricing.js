/**
 * Sagana – конфигурация тарифов.
 *
 * Этот файл подключается в index.html и admin.html.
 * Чтобы изменить тарифы – отредактируйте этот файл вручную
 * или используйте админку (admin.html).
 *
 * Поле bold: true – фича выделяется жирным в карточке тарифа.
 * Используется для фич, которых нет на базовом тарифе.
 *
 * Экономия на годовом тарифе рассчитывается автоматически:
 * экономия = priceMonthly * 12 - priceYearly
 */

const PRICING_CONFIG = {
  // Бесплатные кредиты при регистрации
  freeCredits: 250000,

  plans: [
    {
      id: "trial",
      name: "Пробный",
      badge: "Бесплатно",
      description: "Попробуйте сервис без оплаты",
      priceMonthly: 0,
      priceYearly: 0,
      credits: 250000,
      isFree: true,
      features: [
        { text: "250 000 кредитов", included: true, bold: false },
        { text: "Все текстовые ИИ-модели", included: true, bold: false },
        { text: "Генерация изображений", included: true, bold: false },
        { text: "30+ готовых ассистентов", included: true, bold: false },
        { text: "Видеогенерация", included: false, bold: false },
        { text: "Создание своих ассистентов", included: false, bold: false },
        { text: "Покупка доп. кредитов", included: false, bold: false },
        { text: "Скидка на доп. кредиты", included: false, bold: false }
      ],
      highlighted: false
    },
    {
      id: "basic",
      name: "Базовый",
      badge: "Для старта",
      description: "Знакомство с сервисом и текстовые задачи",
      priceMonthly: 290,
      priceYearly: 2870,        // Полная стоимость за год (экономия = 290*12 - 2870 = 610 руб.)
      credits: 800000,
      features: [
        { text: "800 000 кредитов/мес", included: true, bold: true },
        { text: "Все текстовые ИИ-модели", included: true, bold: false },
        { text: "Генерация изображений", included: true, bold: false },
        { text: "~700 стр. текста или ~150 изображений", included: true, bold: false },
        { text: "30+ готовых ассистентов", included: true, bold: false },
        { text: "Покупка доп. кредитов", included: true, bold: true },
        { text: "Видеогенерация", included: false, bold: false },
        { text: "Создание своих ассистентов", included: false, bold: false },
        { text: "Скидка на доп. кредиты", included: false, bold: false }
      ],
      highlighted: false
    },
    {
      id: "optimal",
      name: "Оптимальный",
      badge: "Популярный",
      description: "Для большинства задач и активной работы с изображениями",
      priceMonthly: 790,
      priceYearly: 7030,        // Экономия = 790*12 - 7030 = 2 450 руб.
      credits: 2500000,
      features: [
        { text: "2 500 000 кредитов/мес", included: true, bold: true },
        { text: "Все текстовые ИИ-модели", included: true, bold: false },
        { text: "Генерация изображений", included: true, bold: false },
        { text: "~1 500 стр. текста или ~350 изображений", included: true, bold: false },
        { text: "30+ готовых ассистентов", included: true, bold: false },
        { text: "Видеогенерация", included: true, bold: true },
        { text: "Создание своих ассистентов", included: true, bold: true },
        { text: "-10% на доп. кредиты", included: true, bold: true }
      ],
      highlighted: true
    },
    {
      id: "max",
      name: "Максимальный",
      badge: "Для профи",
      description: "Для усиленной работы над проектами с изображениями и видео",
      priceMonthly: 2190,
      priceYearly: 19270,       // Экономия = 2190*12 - 19270 = 7 010 руб.
      credits: 7000000,
      features: [
        { text: "7 000 000 кредитов/мес", included: true, bold: true },
        { text: "Все текстовые ИИ-модели", included: true, bold: false },
        { text: "Генерация изображений", included: true, bold: false },
        { text: "~3 600 стр. текста или ~1 000 изображений", included: true, bold: false },
        { text: "30+ готовых ассистентов", included: true, bold: false },
        { text: "Видеогенерация", included: true, bold: true },
        { text: "Создание своих ассистентов", included: true, bold: true },
        { text: "-20% на доп. кредиты", included: true, bold: true }
      ],
      highlighted: false
    }
  ]
};
