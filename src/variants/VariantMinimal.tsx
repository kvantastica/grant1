import { useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Minus,
} from 'lucide-react';
import { school, benefits, steps, stats, faq, approved } from '@/data/content';
import { themes } from '@/data/grantConfig';
import GrantFlow from '@/components/GrantFlow';

export default function VariantMinimal() {
  return (
    <div className="min-h-screen bg-white text-ink-900 font-sans">
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
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
            <span className="font-display text-sm font-bold">К</span>
          </div>
          <span className="font-display text-base font-bold tracking-tight">
            {school.name}
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink-500 md:flex">
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
          className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
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
      <div className="mx-auto max-w-5xl px-5 py-24 md:py-36">
        <div className="animate-fade-up">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Федеральный грант · IT
          </p>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-ink-950 md:text-7xl">
            Льготное
            <br />
            обучение в IT
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink-500">
            {school.legal} предоставляет право на льготное обучение по
            федеральной программе. Подайте заявку онлайн — бесплатно и без
            очередей.
          </p>
        </div>
        <div
          className="animate-fade-up mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          style={{ animationDelay: '0.12s' }}
        >
          <a
            href="#apply"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-7 py-4 text-base font-semibold text-white transition hover:bg-emerald-700"
          >
            Подать заявку
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
          </a>
          <span className="text-sm text-ink-400">
            Рассмотрение — до 5 рабочих дней
          </span>
        </div>

        {/* Approved badge */}
        <div
          className="animate-fade-up mt-16 flex items-center gap-4 border-t border-ink-100 pt-8"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50">
            <approved.icon className="h-6 w-6 text-emerald-600" />
          </div>
          <div className="flex-1">
            <p className="font-display text-base font-bold text-ink-900">
              {approved.title}
            </p>
            <p className="text-sm text-ink-500">
              {school.decisionLabel}: № 2026-0847-ГР
            </p>
          </div>
          <div className="hidden items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 sm:flex">
            <Check className="h-4 w-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700">
              Подтверждено
            </span>
          </div>
        </div>
      </div>

      {/* Side accent line */}
      <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-emerald-400 via-emerald-200 to-transparent" />
    </section>
  );
}

/* ---------- Benefits ---------- */
function Benefits() {
  const ref = useRevealCard();
  return (
    <section id="benefits" ref={ref} className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <div className="reveal">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-950 md:text-5xl">
            Что даёт грант
          </h2>
          <div className="mt-4 h-px w-16 bg-emerald-500" />
        </div>
        <div className="mt-16 divide-y divide-ink-100 border-y border-ink-100">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="reveal group flex items-start gap-5 py-7 transition hover:bg-ink-50/50"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 transition group-hover:bg-emerald-600 group-hover:text-white">
                <b.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-bold text-ink-900">
                  {b.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-500">
                  {b.text}
                </p>
              </div>
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
    <section id="steps" ref={ref} className="bg-ink-50 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <div className="reveal">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-950 md:text-5xl">
            Как получить грант
          </h2>
          <div className="mt-4 h-px w-16 bg-emerald-500" />
        </div>
        <div className="mt-16 space-y-0">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="reveal group flex items-start gap-6 py-6"
            >
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-emerald-500 bg-white text-emerald-600 transition group-hover:bg-emerald-600 group-hover:text-white">
                  <s.icon className="h-5 w-5" />
                </div>
                {i < steps.length - 1 && (
                  <div className="mt-2 h-full w-px flex-1 bg-ink-200" />
                )}
              </div>
              <div className="pb-6">
                <span className="font-display text-xs font-bold uppercase tracking-wide text-emerald-600">
                  Шаг {i + 1}
                </span>
                <h3 className="mt-1 font-display text-xl font-bold text-ink-900">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                  {s.text}
                </p>
              </div>
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
    <section ref={ref} className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <div className="reveal grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white p-8 text-center">
              <p className="font-display text-4xl font-extrabold text-ink-950">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-ink-500">{s.label}</p>
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
    <section id="faq" ref={ref} className="bg-ink-50 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5">
        <div className="reveal">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-950 md:text-5xl">
            Вопросы и ответы
          </h2>
          <div className="mt-4 h-px w-16 bg-emerald-500" />
        </div>
        <div className="mt-12 space-y-1">
          {faq.map((item, i) => (
            <div
              key={i}
              className="reveal border-b border-ink-200"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="font-display text-base font-semibold text-ink-900">
                  {item.q}
                </span>
                {open === i ? (
                  <Minus className="h-5 w-5 shrink-0 text-emerald-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 shrink-0 text-ink-400" />
                )}
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  open === i
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 text-sm leading-relaxed text-ink-600">
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
    <section id="apply" ref={ref} className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5">
        <div className="reveal">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-950 md:text-4xl">
            Заявка на получение <span className="text-emerald-600">федерального гранта</span>
          </h2>
          <p className="mt-2 border-b border-ink-100 pb-4 text-sm text-ink-500">
            <strong className="text-ink-900">{school.legal}</strong> — Онлайн-школа «{school.name}»
            <br />
            Лицензия № Л035-01298-77/00123456 | ИНН 772345678901
          </p>
          <div className="mt-2">
            <GrantFlow theme={themes.minimal} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-ink-100 py-12">
      <div className="mx-auto max-w-5xl px-5">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
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
