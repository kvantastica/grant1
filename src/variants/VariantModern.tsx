import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Send,
} from 'lucide-react';
import { school, benefits, steps, stats, faq, approved } from '@/data/content';
import { themes } from '@/data/grantConfig';
import GrantFlow from '@/components/GrantFlow';

export default function VariantModern() {
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
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#0891b2] to-[#1f6feb] text-white shadow-md shadow-cyan-500/20">
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
          className="rounded-lg bg-gradient-to-r from-[#0891b2] to-[#1f6feb] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-cyan-500/20 transition hover:shadow-lg hover:shadow-cyan-500/30"
        >
          Подать заявку
        </a>
      </div>
    </header>
  );
}

/* ---------- Hero with inline form ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f0f9ff] via-[#f0fdfa] to-white">
      {/* Decorative blobs */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-teal-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: copy */}
          <div>
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-cyan-700 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Федеральная программа IT-грантов
            </div>
            <h1
              className="animate-fade-up mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-950 md:text-5xl"
              style={{ animationDelay: '0.08s' }}
            >
              Получите грант на{' '}
              <span className="bg-gradient-to-r from-[#0891b2] to-[#1f6feb] bg-clip-text text-transparent">
                льготное обучение
              </span>{' '}
              в IT
            </h1>
            <p
              className="animate-fade-up mt-5 max-w-lg text-lg leading-relaxed text-ink-600"
              style={{ animationDelay: '0.16s' }}
            >
              {school.legal} предоставляет право на льготное обучение по
              федеральной программе. Заполните форму — и мы свяжемся с вами в
              течение дня.
            </p>
            <div
              className="animate-fade-up mt-8 flex flex-wrap items-center gap-6"
              style={{ animationDelay: '0.24s' }}
            >
              {stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-extrabold text-ink-900">
                    {s.value}
                  </p>
                  <p className="text-xs text-ink-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form card */}
          <div
            className="animate-fade-up rounded-3xl border border-ink-100 bg-white/90 p-7 shadow-2xl shadow-cyan-900/10 backdrop-blur-sm md:p-8"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">
                <approved.icon className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <p className="font-display text-base font-bold text-ink-900">
                  {approved.title}
                </p>
                <p className="text-sm text-ink-500">
                  {school.decisionLabel}: № 2026-0847-ГР
                </p>
              </div>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-ink-600">
              {approved.text}
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Фамилия и имя"
                className="w-full rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-ink-900 placeholder:text-ink-400 transition focus:border-[#0891b2] focus:bg-white focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Телефон"
                className="w-full rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-ink-900 placeholder:text-ink-400 transition focus:border-[#0891b2] focus:bg-white focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-ink-200 bg-ink-50 px-4 py-3 text-ink-900 placeholder:text-ink-400 transition focus:border-[#0891b2] focus:bg-white focus:outline-none"
              />
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0891b2] to-[#1f6feb] px-6 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:shadow-xl hover:shadow-cyan-500/35"
              >
                Подать заявку
                <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </button>
            </div>
            <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-ink-400">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
              Бесплатно. Без обязательств. Данные защищены.
            </p>
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
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-600">
            Что вы получаете
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-950 md:text-4xl">
            Преимущества гранта
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-6 transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-900/5"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 opacity-0 transition group-hover:opacity-100" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0891b2] to-[#1f6feb] text-white shadow-md shadow-cyan-500/20 transition group-hover:scale-110">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="relative mt-5 font-display text-lg font-bold text-ink-900">
                {b.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink-500">
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
    <section
      id="steps"
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-[#f0f9ff] to-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-600">
            Пошагово
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-950 md:text-4xl">
            Как получить грант
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="reveal relative rounded-2xl border border-ink-100 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#0891b2] to-[#1f6feb] text-white">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="font-display text-2xl font-extrabold text-ink-100">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-ink-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {s.text}
              </p>
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
    <section ref={ref} className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal grid grid-cols-2 gap-6 rounded-3xl bg-gradient-to-r from-[#0891b2] to-[#1f6feb] p-10 md:grid-cols-4 md:p-14">
          {stats.map((s) => (
            <div key={s.label} className="text-center text-white">
              <p className="font-display text-3xl font-extrabold md:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-cyan-100">{s.label}</p>
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
                  className={`h-5 w-5 shrink-0 text-cyan-500 transition ${
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
    <section id="apply" ref={ref} className="pb-20 md:pb-28">
      <div className="mx-auto max-w-3xl px-5">
        <div className="reveal overflow-hidden rounded-3xl border border-ink-100 bg-white p-7 shadow-2xl shadow-cyan-900/10 md:p-10">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-950">
            Заявка на получение <span className="bg-gradient-to-r from-[#0891b2] to-[#1f6feb] bg-clip-text text-transparent">федерального гранта</span>
          </h2>
          <p className="mt-2 border-b border-ink-100 pb-4 text-sm text-ink-500">
            <strong className="text-ink-900">{school.legal}</strong> — Онлайн-школа «{school.name}»
            <br />
            Лицензия № Л035-01298-77/00123456 | ИНН 772345678901
          </p>
          <div className="mt-2">
            <GrantFlow theme={themes.modern} />
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
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#0891b2] to-[#1f6feb] text-white">
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
