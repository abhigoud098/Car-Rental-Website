import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import App from './App';
import './index.css';

// Use your Clerk Frontend API key from environment variables
const clerkFrontendApi = import.meta.env.VITE_CLERK_FRONTEND_API;
console.log("Clerk Frontend API:", clerkFrontendApi);



if (!clerkFrontendApi) {
  throw new Error("VITE_CLERK_FRONTEND_API is not defined");
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
    <SignedIn>
      <App />
    </SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </ClerkProvider>
);
