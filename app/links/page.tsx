
export default function LinksPage() {
  const links = [
    {
      label: "Система: Страница 1",
      href: "http://tms.skylinetg.us:30150/apps/64d43cffd4b8f71107e84f95/view",
    },
    {
      label: "Система: Страница 2",
      href: "http://tms.skylinetg.us:30150/apps/643f054ed4b8f71107e7b1f2/view",
    },
  ];

  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-bold">Ссылки</h1>
      <div className="grid sm:grid-cols-2 gap-3">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            className="rounded-2xl border p-4 hover:shadow"
          >
            <div className="font-semibold">{l.label}</div>
            <div className="text-sm text-gray-500 break-all">{l.href}</div>
          </a>
        ))}
      </div>
    </main>
  );
}
