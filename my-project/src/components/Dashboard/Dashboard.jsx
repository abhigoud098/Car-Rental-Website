import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

function Dashboard() {
  return (
    <>
      <SignedIn>
        <h1>Welcome to your Dashboard</h1>
        {/* Your protected content */}
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

export default Dashboard;
