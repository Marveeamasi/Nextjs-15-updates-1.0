Page components are no longer cached by default in the client router, which prevents potential issues when users expect real-time data updates. In v15 the client will always fetch the latest page component data during in-app navigation.
To retain the original caching behavior in Next.js 15, we can configure it manually as seen in example.ts
