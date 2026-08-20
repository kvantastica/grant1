export interface GrantTheme {
  accent: string;
  accentHover: string;
  accentBg: string;
  accentText: string;
  buttonBg: string;
  buttonHover: string;
  buttonText: string;
  cardBorder: string;
  inputBorder: string;
  inputBg: string;
  inputFocusBorder: string;
  modalAccent: string;
}

export const themes: Record<string, GrantTheme> = {
  trust: {
    accent: '#1f6feb',
    accentHover: '#0f58c4',
    accentBg: '#eef4ff',
    accentText: '#1f6feb',
    buttonBg: '#1f2330',
    buttonHover: '#363b49',
    buttonText: '#ffffff',
    cardBorder: '#e2e8f0',
    inputBorder: '#d0d7de',
    inputBg: '#fafbfc',
    inputFocusBorder: '#1f6feb',
    modalAccent: '#1a3a5c',
  },
  modern: {
    accent: '#0891b2',
    accentHover: '#0e7490',
    accentBg: '#ecfeff',
    accentText: '#0891b2',
    buttonBg: '#0891b2',
    buttonHover: '#0e7490',
    buttonText: '#ffffff',
    cardBorder: '#e2e8f0',
    inputBorder: '#d0d7de',
    inputBg: '#fafbfc',
    inputFocusBorder: '#0891b2',
    modalAccent: '#0891b2',
  },
  minimal: {
    accent: '#059669',
    accentHover: '#047857',
    accentBg: '#ecfdf5',
    accentText: '#059669',
    buttonBg: '#059669',
    buttonHover: '#047857',
    buttonText: '#ffffff',
    cardBorder: '#e2e8f0',
    inputBorder: '#d0d7de',
    inputBg: '#fafbfc',
    inputFocusBorder: '#059669',
    modalAccent: '#059669',
  },
};

export const socialStatuses = [
  'Рабочий',
  'Специалист',
  'Служащий',
  'Предприниматель',
  'Врач',
  'Учитель',
  'Инженер',
  'Программист',
  'Строитель',
  'Водитель',
  'Другое',
];

export const benefitCategories = [
  'Нет льгот',
  'Дети-сироты',
  'Инвалидность',
  'Многодетная семья',
  'Малообеспеченная семья',
  'Чернобылец',
  'Ветеран боевых действий',
  'Другое',
];

export const grades = [
  { value: '5', label: '5 — отлично' },
  { value: '4', label: '4 — хорошо' },
  { value: '3', label: '3 — удовлетворительно' },
  { value: '2', label: '2 — плохо' },
];

export const checkingSteps = [
  'Передача данных в систему',
  'Анализ успеваемости и достижений',
  'Проверка социального статуса',
  'Проверка льгот',
  'Расчёт итогового балла',
  'Формирование результатов',
  'Подготовка итогового решения',
];
