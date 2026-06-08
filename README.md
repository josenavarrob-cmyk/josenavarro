# Jose Navarro - Personal Website

A minimalist personal website built with Next.js, TypeScript, and Tailwind CSS.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Markdown content for writing

## Local development

```bash
npm install
npm run dev
```

## Content editing

- Add or edit essays in `content/writing/*.md`
- Frontmatter fields:
  - `title`
  - `date` (YYYY-MM-DD)
  - `excerpt`
  - `tags` (array)
  - `featured` (boolean, optional)

Articles are automatically listed on `/writing` and routed at `/writing/[slug]`.

## Deployment

Deploy directly to Vercel:

1. Push this repository to GitHub.
2. Import the project in Vercel.
3. Deploy with default settings.
