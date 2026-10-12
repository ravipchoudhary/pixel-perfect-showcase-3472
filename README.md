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

To enable Google Analytics 4, set `VITE_GA_MEASUREMENT_ID` to the property's `G-...` measurement ID in the build environment. Analytics scripts are omitted when the value is missing or invalid.
