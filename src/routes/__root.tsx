import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
  useRouter,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-cream px-5 text-ink">
      <div className="max-w-md text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blossom-deep">Vasant / 404</p>
        <h1 className="mt-4 font-display text-6xl font-semibold">Page not found</h1>
        <p className="mt-4 text-muted-foreground">This learning plot has not been planted yet.</p>
        <a href="/" className="mt-7 inline-flex rounded-full bg-brand-gradient px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-blossom/30">Return home</a>
      </div>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-cream px-5 text-ink">
      <div className="max-w-md text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blossom-deep">Vasant / pause</p>
        <h1 className="mt-4 font-display text-4xl font-semibold">This plot needs a moment.</h1>
        <p className="mt-4 text-muted-foreground">Something went wrong. Try refreshing the page or return to the garden.</p>
        <div className="mt-7 flex justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Try again</button>
          <a href="/" className="rounded-full border border-input bg-background px-5 py-3 text-sm font-semibold text-foreground">Go home</a>
        </div>
      </div>
    </main>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vasant Learning" },
      { name: "description", content: "Calm, structured learning for students, teams, and working professionals." },
      { name: "author", content: "Vasant Learning" },
      { property: "og:title", content: "Vasant Learning" },
      { property: "og:description", content: "A calm study garden for steady, practical growth." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Space+Grotesk:wght@400;500;600;700&display=swap" },
      { rel: "icon", href: "/vasant-mark.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return <html lang="en"><head><HeadContent /></head><body>{children}<Scripts /></body></html>;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return <QueryClientProvider client={queryClient}><Outlet /></QueryClientProvider>;
}