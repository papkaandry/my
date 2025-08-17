
import Link from "next/link";

export default function Page() {
  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-bold">Привет, Андрій! 👋</h1>
      <p>
        Это стартовый сайт. Выше — навигация. Ниже — быстрые действия,
        чтобы было похоже на твоё приложение: две ссылки и страница камеры.
      </p>

      <div className="grid sm:grid-cols-3 gap-3">
        <Link href="/links" className="rounded-2xl border p-4 hover:shadow">
          <div className="font-semibold">Открыть ссылки</div>
          <div className="text-sm text-gray-500">Две страницы из системы</div>
        </Link>
        <Link href="/camera" className="rounded-2xl border p-4 hover:shadow">
          <div className="font-semibold">Камера</div>
          <div className="text-sm text-gray-500">Сделать фото из браузера</div>
        </Link>
        <a
          href="https://maps.google.com"
          target="_blank"
          className="rounded-2xl border p-4 hover:shadow"
        >
          <div className="font-semibold">Открыть карту</div>
          <div className="text-sm text-gray-500">Google Maps в новой вкладке</div>
        </a>
      </div>
    </main>
  );
}
