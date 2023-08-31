import { SignInButton } from "~/components/sign-in-button";

export default function Page() {
  return (
    <div className="grid gap-6">
      <h1 className="text-6xl font-extrabold text-secondary">
        yomiage - fumiya.dev
      </h1>
      <SignInButton />
    </div>
  );
}
