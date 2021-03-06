# Ellie's Lego Land

Bringing you all of my daughter's coolest Lego creations in her very own blog built with Next.js, Tailwind and Sanity.io headless CMS to easily manage and display her Lego builds.

**Live Site:** [Ellie's Lego Land](https://ellies-lego-land.vercel.app/)

![lego-land](https://user-images.githubusercontent.com/47455758/113209489-beb09700-9238-11eb-8a54-d0d66b38bf9c.jpg)

## How It's Made

- Next.js with dynamic page routing, slug generation and use of both static site generation and server side rendering
- React with useState and useEffect to handle custom image lazy loading and conditional styles
- Tailwind CSS to help maintain styles, responsiveness and accessibility
- Sanity.io headless CMS integrated as an API
- Navigation that filters by custom or standard build types
- Responsive design with custom media queries to handle multiple screen sizes
- Portable Text converted to block content to render blog markup

## Lessons Learned

- This is my first project integrating a Headless CMS into a React/Next.js project. I have worked with REST APIs in the past, but fetch calls with Sanity are significantly different than typical REST calls (i.e. 'GET', 'PUT', 'PATCH', 'DELETE'). Sanity.io requires specific database queries with the fetch.
- Next.js supports pre-rendering, "Instead of having the browser render everything from scratch, Next.js can serve pre-rendered HTML in two different ways," server-side rendering or static site generation. Depending on how you need data retrieved and then displayed, you can tell any Next.js page which one to use. I learned how to diffentiate between the two, when to use them, and how to define the fetch calls depending on which type of page is being rendered.
- Tailwind.css is a unique way to write styles, which required a shift in my mental model. Benefits of Tailwind are quickly writing styles that carry with them specefic contraints depending on the screen size, and seeing those changes faster on the screen. It definitely speeds up production once you learn Tailwind's specific shorthand. Also, Tailwind documentation is both easy and fun to use. Drawbacks of Tailwind include having to hunt down the specific rule if you want to change something. Also, deciphering what every rule in each class does takes a little practice, and can be quite confusing to look at.

## Run Locally

1. In command line run 'git clone git@github.com:jamesncox/ellies-lego-land.git'
2. CD into 'ellies-lego-land/web'
4. Run 'yarn install'
5. Run 'yarn start'
6. Enjoy!
