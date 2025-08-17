
# Как запустить без командной строки (GitHub Desktop + Vercel)

1. **Скачай этот архив** и распакуй папку `mysite`.
2. Открой **GitHub Desktop** → `File → Add local repository...` → выбери папку `mysite` → `Create a repository`.
3. Нажми **Commit to main** → **Publish repository** (сделать публичным или приватным).
4. Зайди в **Vercel** → `New Project` → выбери свой репозиторий `mysite` → `Deploy`.
5. Готово! Ссылка вида `https://mysite.vercel.app` заработает. Редактируй файлы и делай `Commit → Push` в GitHub Desktop — Vercel обновит сайт.

Где менять тексты и ссылки:
- `components/Navbar.tsx` — название в шапке.
- `app/links/page.tsx` — список внешних ссылок.
- `public/favicon.ico` — иконка сайта.
