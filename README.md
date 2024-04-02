# The Good Guys Front End Test

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Viewing the site

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Then, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Directories of interests:

- [./src/app/products/[productId]/page.tsx](./src/app/products/[productId]/page.tsx): The back end fetching mock cms data (~90min)
- [./src/layouts/Products/Product.tsx](./src/layouts/Products/Product.tsx): The front end rendering fetched data (10min)
- [./src/utils/reviewSort/reviewSort.ts](./src/utils/reviewSort/reviewSort.ts): The sort function (~60min)
- Unit tests are included for the front end and sort function
