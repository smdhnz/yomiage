import { SignInButton } from "~/components/sign-in-button";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-lg font-semibold">yomiage - fumiya.dev</h1>
      <SignInButton />
    </div>
  );
}
