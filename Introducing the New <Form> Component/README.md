Forms are a crucial part of any web app, and Next.js 15 introduces the <Form> component to streamline form functionality. Extending the traditional HTML <form> element, this component brings prefetching, client-side navigation, and progressive enhancement into the mix.
Here’s how it works in FormPage.tsx

The <Form> component delivers:
Prefetching: It prefetches layout and loading UI when the form comes into view, speeding up navigation.
Client-side Navigation: On submission, shared layouts and client-side state are preserved.
Progressive Enhancement: Forms still work if JavaScript isn’t loaded, ensuring full-page navigation.
