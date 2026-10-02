# The Little Big Experience

Website for photo booth rentals and event experiences across Delhi NCR.

## Development

Install dependencies with Bun, then start the Vite development server:

```sh
bun install
bun run dev
```

Create a production build with `bun run build` and preview it with `bun run preview`.
The build prerenders the public routes as static HTML; deploy the contents of `dist/client` to static hosting.

Enquiry submissions open WhatsApp with the details entered in the form. The website does not require a database, CMS, authentication, or server-side booking service.
