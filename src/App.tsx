import { useState, useEffect } from 'react';
import { Layout, Sparkles, AlignLeft, X } from 'lucide-react';
import VariantTrust from '@/variants/VariantTrust';
import VariantModern from '@/variants/VariantModern';
import VariantMinimal from '@/variants/VariantMinimal';

type VariantKey = 'trust' | 'modern' | 'minimal';

const variants: {
  key: VariantKey;
  label: string;
  description: string;
  icon: typeof Layout;
  Component: () => JSX.Element;
}[] = [
  {
    key: 'trust',
    label: 'Доверительный',
    description: 'Сдержанный синий, официальная подача',
    icon: Layout,
    Component: VariantTrust,
  },
  {
    key: 'modern',
    label: 'Современный IT',
    description: 'Бирюзовые градиенты, форма на первом экране',
    icon: Sparkles,
    Component: VariantModern,
  },
  {
    key: 'minimal',
    label: 'Ясность и результат',
    description: 'Минимализм, много воздуха, акцентный зелёный',
    icon: AlignLeft,
    Component: VariantMinimal,
  },
];

function App() {
  const [active, setActive] = useState<VariantKey>('trust');
  const [pickerOpen, setPickerOpen] = useState(true);

  const current = variants.find((v) => v.key === active)!;
  const CurrentComponent = current.Component;

  // Persist choice so reload keeps the selected variant
  useEffect(() => {
    const saved = localStorage.getItem('grant-variant') as VariantKey | null;
    if (saved && variants.some((v) => v.key === saved)) {
      setActive(saved);
      setPickerOpen(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('grant-variant', active);
  }, [active]);

  return (
    <>
      <CurrentComponent />

      {/* Variant picker — floating panel */}
      <div className="fixed bottom-5 right-5 z-[100]">
        {pickerOpen ? (
          <div className="w-72 rounded-2xl border border-ink-200 bg-white p-4 shadow-2xl shadow-ink-900/10">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-display text-sm font-bold text-ink-900">
                Выберите вариант
              </p>
              <button
                onClick={() => setPickerOpen(false)}
                className="rounded-md p-1 text-ink-400 transition hover:bg-ink-100 hover:text-ink-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-2">
              {variants.map((v) => (
                <button
                  key={v.key}
                  onClick={() => {
                    setActive(v.key);
                    setPickerOpen(false);
                    window.scrollTo({ top: 0 });
                  }}
                  className={`flex w-full items-start gap-3 rounded-xl border p-3 text-left transition ${
                    active === v.key
                      ? 'border-ink-900 bg-ink-50'
                      : 'border-ink-100 hover:border-ink-300 hover:bg-ink-50/50'
                  }`}
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                      active === v.key
                        ? 'bg-ink-900 text-white'
                        : 'bg-ink-100 text-ink-600'
                    }`}
                  >
                    <v.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-ink-900">
                      {v.label}
                    </p>
                    <p className="text-xs text-ink-500">{v.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <button
            onClick={() => setPickerOpen(true)}
            className="flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2.5 shadow-lg shadow-ink-900/10 transition hover:shadow-xl"
          >
            <Layout className="h-4 w-4 text-ink-700" />
            <span className="text-sm font-semibold text-ink-700">
              Вариант: {current.label}
            </span>
          </button>
        )}
      </div>
    </>
  );
}

export default App;
