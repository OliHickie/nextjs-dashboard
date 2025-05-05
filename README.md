# Fora Dashboard

[&#x1F3E2; Live site can be viewed here &#x1F3E2;](https://fora-dashboard.vercel.app/)

This is a prototype of a portal for an Operations teams working in Fora buildings.
It is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

The app handles three sets of dummy data:

**AvailabilityForce** - meeting room data

**CustomerForce** - Viewings & Move in/out data

**IssueForce** - Ticket information

## Features

The prototype consists of various features designed to help users navigate information quickly and succinctly on a single page. 

### Navigations & Tools
The left hand navigation allows users to access the home page, calendar, check-in, log out and buildings pages. 

The nav has a hover and active state on icons for intuitive UX and screen reader tags associated to the logos to improve accessibility. 

*As this is work in progress - only the home page has been completed.*

The right hand nav boasts a tool bar for quick access to Notifications and Tickets. Tickets are loaded from *IssueForce* data and is sorted in chronological order. Each ticket also has 3 controls at the bottom to toggle between views (WIP). 

### Building Select

At the top of the main screen is a Building select dropdown, allowing quick access to various buildings' information. 

### List items

Each section of the home page displays a brief overview of items (whether meetings, viewings & moves in or out). Time is formatted using the time utilities in various formats and these items can be linked to future pages. 

## Design

Fora provided a working prototype to use as a design, available here: 

[Prototype & Design](https://xd.adobe.com/view/cf2bd7f1-64ff-4487-ba42-2fbed20c3530-9a78/screen/9ab8ded2-0315-4021-99f8-47a5ab378204)

## Structure

When building out this project, although unfinished, the ideas come from the possibility to continue building this app out into a scalable, robust platform, full of helpful features for the user. 

I decided to include stylesheets alongside components in separate folders in this project. As it is a prototype, it is designed so that styled components can be extracted from the App easily. 

Services (Set up for when APIs become available), Utilities (just date for now, but can be scaled with the project), tests (again, housing a small example of tests, but that can be scaled with the project) and types are all housed in separate directories. 

I have a single global stylesheet and variable stylesheet which allow for more sweeping changes available in the styles folder. 

## Future Features

Features still to create include:

### Design
- More responsive design to handle mobile platforms, notably creating a mobile navigation within a hamburger menu and toolbar.
- Loading states currently display 'Loading...', however, this layout would better serve skeleton screens. 
- A question over how the data on the home page should appear & scroll, or whether items are clipped to fit to screen. 

### Functionality
- Better error handling with APIs (errors are currently just appear in console)
- Inclusion of state management to store API responses and building selection.
- Responsive calls depending on Building selected in dropdown.
- A late decision to include date-fns library to handle date formatting. This should be applied to all Date utitlities for consistency. 
- More robust and comprehensive test coverage. 

## Technologies

- React
- Next.js
- TypeScript
- SCSS
- Vitest 
- date-fns
- Deployed on Vercel

## Getting Started



First, run the development server:

```bash
clone  project

npm install

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev


# to build the project
npm run build 
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
