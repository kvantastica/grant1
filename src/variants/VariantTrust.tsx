import { useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import { school, benefits, steps, stats, faq, approved } from '@/data/content';
import { themes } from '@/data/grantConfig';
import GrantFlow from '@/components/GrantFlow';

export default function VariantTrust() {
  return (
    <div className="min-h-screen bg-[#f7f8fb] text-ink-900 font-sans">
      <Header />
      <Hero />
      <Benefits />
      <Steps />
      <Stats />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}

/* ---------- Header ---------- */
function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-900 text-white">
            <span className="font-display text-lg font-bold">К</span>
          </div>
          <span className="font-display text-lg font-bold tracking-tight">
            {school.name}
          </span>
        </div>
        <nav className="hidden items-center gap-7 text-sm font-medium text-ink-600 md:flex">
          <a href="#benefits" className="transition hover:text-ink-900">
            Преимущества
          </a>
          <a href="#steps" className="transition hover:text-ink-900">
            Как подать
          </a>
          <a href="#faq" className="transition hover:text-ink-900">
            Вопросы
          </a>
        </nav>
        <a
          href="#apply"
          className="rounded-lg bg-ink-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-ink-800"
        >
          Подать заявку
        </a>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#eef2f8] to-[#f7f8fb]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #1f2330 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-ink-600 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Приём заявок открыт
          </div>
          <h1
            className="animate-fade-up mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-950 md:text-6xl"
            style={{ animationDelay: '0.08s' }}
          >
            Заявка на получение{' '}
            <span className="text-[#1f6feb]">федерального гранта</span> на
            льготное обучение в IT
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-ink-600"
            style={{ animationDelay: '0.16s' }}
          >
            {school.legal} предоставляет право на льготное обучение по
            федеральной программе поддержки IT-отрасли. Подайте заявку онлайн —
            это бесплатно.
          </p>
          <div
            className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: '0.24s' }}
          >
            <a
              href="#apply"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-ink-900 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-ink-900/10 transition hover:bg-ink-800"
            >
              Подать заявку
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#benefits"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-ink-200 bg-white px-6 py-3.5 text-base font-semibold text-ink-700 transition hover:border-ink-300 hover:bg-ink-50"
            >
              Узнать больше
            </a>
          </div>
        </div>

        {/* Approved card */}
        <div
          className="animate-fade-up mt-14 max-w-md rounded-2xl border border-ink-100 bg-white p-6 shadow-xl shadow-ink-900/5"
          style={{ animationDelay: '0.32s' }}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">
              <approved.icon className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <p className="font-display text-base font-bold text-ink-900">
                {approved.title}
              </p>
              <p className="text-sm text-ink-500">Решение по заявке</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-600">
            {approved.text}
          </p>
          <div className="mt-4 flex items-center justify-between rounded-lg bg-ink-50 px-4 py-3">
            <span className="text-xs font-medium uppercase tracking-wide text-ink-500">
              {school.decisionLabel}
            </span>
            <span className="font-mono text-sm font-semibold text-ink-900">
              № 2026-0847-ГР
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Benefits ---------- */
function Benefits() {
  const ref = useRevealCard();
  return (
    <section id="benefits" ref={ref} className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#1f6feb]">
            Что даёт грант
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-950 md:text-4xl">
            Преимущества для заявителя
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            Грант покрывает часть стоимости обучения и открывает доступ ко всей
            инфраструктуре школы.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="reveal group rounded-2xl border border-ink-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-ink-900/5"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef4ff] text-[#1f6feb] transition group-hover:scale-110">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Steps ---------- */
function Steps() {
  const ref = useRevealCard();
  return (
    <section id="steps" ref={ref} className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#1f6feb]">
            Пошагово
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-950 md:text-4xl">
            Как получить грант
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            Четыре простых шага от заявки до начала обучения.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="reveal relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-900 text-white">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 mb-2 flex items-center gap-2">
                <span className="font-display text-sm font-bold text-ink-300">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-ink-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {s.text}
              </p>
              {i < steps.length - 1 && (
                <div className="absolute top-6 left-12 hidden h-px w-full bg-ink-100 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Stats ---------- */
function Stats() {
  const ref = useRevealCard();
  return (
    <section ref={ref} className="bg-ink-950 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="reveal text-center">
              <p className="font-display text-3xl font-extrabold text-white md:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-ink-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useRevealCard();
  return (
    <section id="faq" ref={ref} className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <div className="reveal text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-950 md:text-4xl">
            Частые вопросы
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {faq.map((item, i) => (
            <div
              key={i}
              className="reveal overflow-hidden rounded-xl border border-ink-100 bg-white"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >
                <span className="font-display text-base font-semibold text-ink-900">
                  {item.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-ink-400 transition ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  open === i
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 text-sm leading-relaxed text-ink-600">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA / Form ---------- */
function Cta() {
  const ref = useRevealCard();
  return (
    <section id="apply" ref={ref} className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <div className="reveal overflow-hidden rounded-3xl border border-ink-100 bg-white p-7 shadow-2xl shadow-ink-900/5 md:p-10">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-950">
            Заявка на получение <span className="text-[#1f6feb]">федерального гранта</span>
          </h2>
          <p className="mt-2 border-b border-ink-100 pb-4 text-sm text-ink-500">
            <strong className="text-ink-900">{school.legal}</strong> — Онлайн-школа «{school.name}»
            <br />
            Лицензия № Л035-01298-77/00123456 | ИНН 772345678901
          </p>
          <div className="mt-2">
            <GrantFlow theme={themes.trust} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-white py-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink-900 text-white">
              <span className="font-display text-sm font-bold">К</span>
            </div>
            <span className="font-display font-bold">{school.name}</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-sm text-ink-500 md:flex-row md:gap-6">
            <span className="flex items-center gap-1.5">
              <Mail className="h-4 w-4" /> info@kvantastica.ru
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-4 w-4" /> 8 800 555-01-01
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> Москва
            </span>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-ink-400">
          © 2026 {school.legal}. Онлайн-школа «{school.name}».
        </p>
      </div>
    </footer>
  );
}

/* ---------- helper ---------- */
import { useReveal } from '@/hooks/useReveal';
function useRevealCard() {
  return useReveal<HTMLDivElement>();
}
