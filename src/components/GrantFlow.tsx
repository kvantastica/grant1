import { useState, useRef, useCallback, useEffect } from 'react';
import {
  CheckCircle2,
  Loader2,
  Clock,
  PartyPopper,
  RotateCcw,
  X,
  ChevronDown,
} from 'lucide-react';
import {
  type GrantTheme,
  socialStatuses,
  benefitCategories,
  grades,
  checkingSteps,
} from '@/data/grantConfig';

type Stage = 'form' | 'checking' | 'result';

interface StepState {
  status: 'pending' | 'active' | 'done';
}

function formatPhone(raw: string): string {
  let val = raw.replace(/\D/g, '');
  if (val.length > 0) {
    if (val[0] !== '7') val = '7' + val;
    val = val.slice(0, 11);
    let formatted = '+7 (';
    if (val.length > 1) formatted += val.slice(1, 4);
    if (val.length > 4) formatted += ') ' + val.slice(4, 7);
    if (val.length > 7) formatted += '-' + val.slice(7, 9);
    if (val.length > 9) formatted += '-' + val.slice(9, 11);
    return formatted;
  }
  return '';
}

function generateDecisionNumber(): string {
  const digits = '0123456789';
  let part1 = '';
  let part2 = '';
  for (let i = 0; i < 4; i++) {
    part1 += digits.charAt(Math.floor(Math.random() * digits.length));
    part2 += digits.charAt(Math.floor(Math.random() * digits.length));
  }
  return `ГР-${part1}-${part2}`;
}

function formatTimer(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

interface GrantFlowProps {
  theme: GrantTheme;
}

export default function GrantFlow({ theme }: GrantFlowProps) {
  const [stage, setStage] = useState<Stage>('form');
  const [secondsLeft, setSecondsLeft] = useState(90);
  const [progress, setProgress] = useState(0);
  const [steps, setSteps] = useState<StepState[]>(
    checkingSteps.map(() => ({ status: 'pending' }))
  );
  const [decisionNumber, setDecisionNumber] = useState('ГР-0000-0000');
  const [modalOpen, setModalOpen] = useState(false);

  // Form state
  const [studentName, setStudentName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [grade, setGrade] = useState('');
  const [socialStatus, setSocialStatus] = useState('');
  const [benefits, setBenefits] = useState('');
  const [city, setCity] = useState('');
  const [schoolNum, setSchoolNum] = useState('');
  const [achievements, setAchievements] = useState('');
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const timersRef = useRef<ReturnType<typeof setInterval>[]>([]);
  const totalRef = useRef(90);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearInterval);
    timersRef.current = [];
  }, []);

  useEffect(() => {
    return clearTimers;
  }, [clearTimers]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (
      !studentName ||
      !birthDate ||
      !grade ||
      !socialStatus ||
      !benefits ||
      !city ||
      !schoolNum ||
      !fullname ||
      !phone ||
      !email
    ) {
      setError('Пожалуйста, заполните все обязательные поля (отмечены *).');
      return;
    }
    setError('');

    setDecisionNumber(generateDecisionNumber());
    setStage('checking');

    const total = Math.floor(Math.random() * 30) + 60; // 60–90 seconds
    totalRef.current = total;
    setSecondsLeft(total);
    setProgress(0);
    setSteps(checkingSteps.map(() => ({ status: 'pending' })));

    // Timer
    const timerInt = setInterval(() => {
      setSecondsLeft((prev) => {
        const next = prev - 1;
        const prog = ((total - next) / total) * 100;
        setProgress(Math.min(prog, 100));
        if (next <= 0) {
          clearTimers();
          setProgress(100);
          setSteps(checkingSteps.map(() => ({ status: 'done' })));
          setTimeout(() => {
            setStage('result');
            setModalOpen(true);
          }, 600);
          return 0;
        }
        return next;
      });
    }, 1000);
    timersRef.current.push(timerInt);

    // Steps
    const stepDelay = Math.max(Math.floor(total / checkingSteps.length), 1);
    let stepIndex = 0;
    const stepInt = setInterval(() => {
      setSteps((prev) => {
        const next = [...prev];
        if (stepIndex < checkingSteps.length) {
          if (stepIndex > 0) {
            next[stepIndex - 1] = { status: 'done' };
          }
          next[stepIndex] = { status: 'active' };
          stepIndex++;
        }
        return next;
      });
    }, stepDelay * 1000);
    timersRef.current.push(stepInt);
  }

  function handleRestart() {
    clearTimers();
    setStage('form');
    setSecondsLeft(90);
    setProgress(0);
    setSteps(checkingSteps.map(() => ({ status: 'pending' })));
    setModalOpen(false);
    setStudentName('');
    setBirthDate('');
    setGrade('');
    setSocialStatus('');
    setBenefits('');
    setCity('');
    setSchoolNum('');
    setAchievements('');
    setFullname('');
    setPhone('');
    setEmail('');
    setError('');
  }

  /* ---------- FORM ---------- */
  if (stage === 'form') {
    return (
      <div id="grant-form">
        <form onSubmit={handleSubmit} noValidate>
          {/* Section: Student data */}
          <SectionTitle theme={theme}>Данные учащегося</SectionTitle>

          <Field label="ФИО учащегося" required theme={theme}>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Иванов Иван Иванович"
              style={inputStyle(theme)}
            />
          </Field>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Дата рождения" required theme={theme}>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                style={inputStyle(theme)}
              />
            </Field>
            <Field label="Оценка за диагностику" required theme={theme}>
              <SelectField
                value={grade}
                onChange={setGrade}
                placeholder="Выберите"
                options={grades.map((g) => ({
                  value: g.value,
                  label: g.label,
                }))}
                theme={theme}
              />
            </Field>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Социальное положение родителей"
              required
              theme={theme}
            >
              <SelectField
                value={socialStatus}
                onChange={setSocialStatus}
                placeholder="Выберите профессию"
                options={socialStatuses.map((s) => ({ value: s, label: s }))}
                theme={theme}
              />
            </Field>
            <Field label="Категория льгот" required theme={theme}>
              <SelectField
                value={benefits}
                onChange={setBenefits}
                placeholder="Выберите"
                options={benefitCategories.map((b) => ({ value: b, label: b }))}
                theme={theme}
              />
            </Field>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Город проживания" required theme={theme}>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Москва"
                style={inputStyle(theme)}
              />
            </Field>
            <Field label="№ школы" required theme={theme}>
              <input
                type="text"
                value={schoolNum}
                onChange={(e) => setSchoolNum(e.target.value)}
                placeholder="Введите номер школы"
                style={inputStyle(theme)}
              />
            </Field>
          </div>

          <Field label="Индивидуальные достижения" theme={theme}>
            <textarea
              value={achievements}
              onChange={(e) => setAchievements(e.target.value)}
              placeholder="Победитель олимпиад, волонтёрство, спорт"
              style={{ ...inputStyle(theme), minHeight: '70px', resize: 'vertical' }}
            />
          </Field>

          {/* Section: Parent / guardian data */}
          <SectionTitle theme={theme}>
            Данные законного представителя
          </SectionTitle>

          <Field
            label="ФИО законного представителя"
            required
            theme={theme}
          >
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Введите ФИО"
              style={inputStyle(theme)}
            />
          </Field>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Телефон" required theme={theme}>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
                placeholder="+7 (___) ___-__-__"
                style={inputStyle(theme)}
              />
            </Field>
            <Field label="Почта" required theme={theme}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@mail.ru"
                style={inputStyle(theme)}
              />
            </Field>
          </div>

          {error && (
            <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-6 w-full rounded-xl py-4 text-lg font-semibold transition active:scale-[0.99]"
            style={{
              background: theme.buttonBg,
              color: theme.buttonText,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = theme.buttonHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = theme.buttonBg;
            }}
          >
            Отправить заявку
          </button>
        </form>
      </div>
    );
  }

  /* ---------- CHECKING ---------- */
  if (stage === 'checking') {
    return (
      <div className="animate-fade-in">
        <div className="flex items-center gap-3.5">
          <Loader2
            className="h-7 w-7 animate-spin"
            style={{ color: theme.accent }}
          />
          <h2 className="font-display text-2xl font-bold text-ink-900">
            Проверка данных
          </h2>
        </div>
        <p className="mt-2 text-ink-500">
          Пожалуйста, подождите, система анализирует вашу заявку...
        </p>

        {/* Progress bar */}
        <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-ink-100">
          <div
            className="h-full rounded-full transition-all duration-200"
            style={{ width: `${progress}%`, background: theme.accent }}
          />
        </div>

        {/* Timer */}
        <div className="mt-5 inline-flex items-center gap-2 border-b border-ink-100 pb-3 font-mono text-xl font-semibold tabular-nums"
          style={{ color: theme.accent }}
        >
          <Clock className="h-5 w-5" />
          {formatTimer(secondsLeft)}
        </div>

        {/* Steps */}
        <ul className="mt-6 space-y-1">
          {checkingSteps.map((label, i) => (
            <li
              key={i}
              className="flex items-center gap-3 border-b border-ink-50 py-2.5 text-sm"
              style={{
                color:
                  steps[i].status === 'done'
                    ? '#22c55e'
                    : steps[i].status === 'active'
                    ? theme.accent
                    : '#aab7c9',
                fontWeight: steps[i].status !== 'pending' ? 600 : 400,
              }}
            >
              <span className="w-5 text-center">
                {steps[i].status === 'done' ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                ) : steps[i].status === 'active' ? (
                  <Loader2
                    className="h-4 w-4 animate-spin"
                    style={{ color: theme.accent }}
                  />
                ) : (
                  <Clock className="h-4 w-4 text-ink-300" />
                )}
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  /* ---------- RESULT (modal) ---------- */
  return (
    <>
      <div className="animate-fade-in text-center">
        <CheckCircle2
          className="mx-auto h-16 w-16 text-emerald-500"
        />
        <h2 className="mt-4 font-display text-2xl font-bold text-ink-900">
          Проверка завершена
        </h2>
        <p className="mt-2 text-ink-500">
          Ваша заявка успешно обработана.
        </p>
        <button
          onClick={() => setModalOpen(true)}
          className="mt-6 rounded-xl px-6 py-3 font-semibold text-white transition"
          style={{ background: theme.buttonBg }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = theme.buttonHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = theme.buttonBg;
          }}
        >
          Посмотреть результат
        </button>
        <button
          onClick={handleRestart}
          className="mt-3 block w-full text-sm font-semibold text-ink-500 transition hover:text-ink-700"
        >
          <RotateCcw className="mr-1.5 inline h-4 w-4" />
          Начать заново
        </button>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-5 backdrop-blur-sm"
          style={{ animation: 'fadeIn 0.3s ease' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl"
            style={{ animation: 'slideUp 0.4s ease' }}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute right-5 top-5 rounded-md p-1 text-ink-400 transition hover:bg-ink-100 hover:text-ink-700"
            >
              <X className="h-5 w-5" />
            </button>
            <PartyPopper
              className="mx-auto h-12 w-12"
              style={{ color: theme.modalAccent }}
            />
            <h2
              className="mt-4 font-display text-2xl font-bold"
              style={{ color: theme.modalAccent }}
            >
              Грант одобрен
            </h2>
            <p className="mt-3 text-left text-base leading-relaxed text-ink-600">
              <strong>ООО «Скултех»</strong> предоставляет вам право на льготное
              обучение по федеральной программе.
            </p>
            <div className="mt-4 inline-block border border-ink-100 bg-ink-50 px-5 py-2.5 font-mono text-lg font-bold tracking-wide text-ink-900">
              {decisionNumber}
            </div>
            <p className="mt-1 text-xs text-ink-400">Номер решения</p>
            <button
              onClick={handleRestart}
              className="mt-6 w-full rounded-xl py-3 font-semibold text-white transition"
              style={{ background: theme.modalAccent }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* ---------- Sub-components ---------- */

function SectionTitle({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: GrantTheme;
}) {
  return (
    <h3
      className="mb-4 mt-7 border-b pb-1.5 font-display text-lg font-bold text-ink-900"
      style={{ borderColor: theme.cardBorder }}
    >
      {children}
    </h3>
  );
}

function Field({
  label,
  required,
  children,
  theme,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  theme: GrantTheme;
}) {
  return (
    <div className="mb-5">
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-700">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

function SelectField({
  value,
  onChange,
  placeholder,
  options,
  theme,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  options: { value: string; label: string }[];
  theme: GrantTheme;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full cursor-pointer appearance-none px-3.5 py-3 text-[15px] transition focus:outline-none"
        style={{
          border: `1px solid ${theme.inputBorder}`,
          background: theme.inputBg,
          color: '#1a2a3a',
        }}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
    </div>
  );
}

function inputStyle(theme: GrantTheme): React.CSSProperties {
  return {
    width: '100%',
    padding: '12px 14px',
    fontSize: '15px',
    border: `1px solid ${theme.inputBorder}`,
    background: theme.inputBg,
    color: '#1a2a3a',
    borderRadius: '0',
    transition: '0.2s',
  };
}
