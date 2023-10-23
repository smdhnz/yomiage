import Link from "next/link";

import { Button } from "~/components/ui/button";

export default function NotFound() {
  return (
    <div className="grid gap-6">
      <h1 className="text-6xl font-extrabold text-secondary">404 Not Found</h1>
      <Button asChild variant="link">
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
