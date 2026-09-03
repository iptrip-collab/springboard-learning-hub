import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Check, Play, Sparkles } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/vasant-hero.jpg";
import posterData from "@/assets/poster-data.jpg";
import posterDesign from "@/assets/poster-design.jpg";
import posterLeadership from "@/assets/poster-leadership.jpg";
import { Button } from "@/components/ui/button";
import { CourseCard, PageShell, SectionLabel, StatStrip } from "@/components/vasant-site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vasant Learning | Grow at your own pace" },
      { name: "description", content: "Calm, structured learning for students, corporate teams, and working professionals." },
      { property: "og:title", content: "Vasant Learning | Grow at your own pace" },
      { property: "og:description", content: "A quiet study garden for practical, steady growth." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [audience, setAudience] = useState("Student");
  const [tourOpen, setTourOpen] = useState(false);

  return (
    <PageShell>
      <main>
        <section className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-8 pt-14 lg:grid-cols-2 lg:pt-20">
          <div aria-hidden="true" className="vasant-drift pointer-events-none absolute -left-40 top-10 size-96 rounded-full bg-mint/40 blur-3xl" />
          <div className="vasant-rise relative">
            <SectionLabel>Spring learning season</SectionLabel>
            <h1 className="mt-5 max-w-xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl">Grow at your<br /><span className="bg-brand-gradient bg-clip-text text-transparent">own gentle pace.</span></h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink/70">Calm, structured learning for students, corporate teams, and working professionals. No noise, no rush, just steady progress that sticks.</p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-full bg-brand-gradient px-6 text-primary-foreground shadow-lg shadow-blossom/30 hover:-translate-y-0.5 hover:shadow-xl"><a href="/courses">Explore courses <ArrowRight /></a></Button>
              <Button type="button" variant="outline" size="lg" className="rounded-full border-ink/15 bg-card px-6" onClick={() => setTourOpen(true)}><Play /> Watch a 60 sec tour</Button>
            </div>
            <div className="mt-9"><StatStrip /></div>
            {tourOpen && <div role="dialog" aria-modal="true" className="mt-6 max-w-lg rounded-2xl border border-blossom/30 bg-card p-5 shadow-xl"><div className="flex items-start gap-3"><Sparkles className="mt-0.5 text-blossom-deep" /><div><p className="font-semibold text-ink">A gentler way to learn</p><p className="mt-1 text-sm leading-relaxed text-muted-foreground">Pick a focused plot, learn in small steps, and build something useful by the end. Your learning garden is ready whenever you are.</p><Button variant="ghost" size="sm" className="mt-3 px-0 text-blossom-deep hover:bg-transparent" onClick={() => setTourOpen(false)}>Close tour</Button></div></div></div>}
          </div>
          <div className="vasant-rise vasant-delay-2 relative">
            <div className="vasant-float absolute -left-4 -top-6 z-10 rounded-2xl bg-card px-4 py-3 shadow-lg shadow-blossom/25"><p className="text-xs font-semibold text-ink/60">Daily streak</p><p className="font-display text-xl font-semibold text-ink">12 days</p></div>
            <img src={heroImage} alt="Student learning at a sunlit desk among spring flowers" width={1088} height={1200} className="relative aspect-[9/10] w-full rounded-[2rem] object-cover shadow-2xl shadow-blossom/25" />
            <div className="vasant-float absolute -bottom-5 -right-3 z-10 rounded-2xl bg-card px-4 py-3 shadow-lg shadow-sky/40"><p className="text-xs font-semibold text-ink/60">Course complete</p><p className="font-display text-xl font-semibold text-ink">Data Basics</p></div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4"><div><SectionLabel>Choose your season</SectionLabel><h2 className="mt-2 font-display text-4xl font-semibold tracking-tight text-ink">Learning made for your life</h2></div><BookOpen className="size-8 text-blossom-deep" /></div>
          <div className="mt-6 flex flex-wrap gap-2.5" role="tablist" aria-label="Learner type">
            {["Student", "Working professional", "Corporate team"].map((item) => <Button key={item} type="button" variant={audience === item ? "default" : "outline"} className={`rounded-full ${audience === item ? "bg-ink text-primary-foreground" : "bg-card"}`} onClick={() => setAudience(item)}>{item}</Button>)}
          </div>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground">{audience === "Student" ? "Build the foundations and confidence to take your next academic step." : audience === "Working professional" ? "Turn busy weeks into small, practical moments of progress." : "Give your people shared language, useful tools, and space to grow."}</p>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-20">
          <div className="flex flex-wrap items-end justify-between gap-4"><div><SectionLabel>Featured paths</SectionLabel><h2 className="mt-2 font-display text-4xl font-semibold tracking-tight text-ink">Courses to bloom from</h2></div><Button asChild variant="link" className="text-sm font-semibold text-ink/70"><a href="/courses">View all courses <ArrowRight /></a></Button></div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <CourseCard image={posterData} alt="Abstract data charts growing like a spring garden" category="Professional" duration="8 weeks" title="Data & Analytics Foundations" outcome="Turn raw numbers into clear, confident decisions." />
            <CourseCard image={posterDesign} alt="Abstract spring-inspired interface design poster" category="Student" duration="10 weeks" title="Digital Design Essentials" outcome="Learn to craft interfaces people genuinely enjoy." />
            <CourseCard image={posterLeadership} alt="Three abstract forms rising together for leadership" category="Corporate" duration="6 weeks" title="Finance & Growth Strategy" outcome="Build the financial instincts leaders rely on." />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-20"><div className="overflow-hidden rounded-[2.5rem] border border-white/70 bg-spring-wash p-8 shadow-xl shadow-blossom/15 sm:p-12"><div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr]"><div><SectionLabel>Built for the calm mind</SectionLabel><h2 className="mt-3 max-w-lg font-display text-4xl font-semibold leading-tight tracking-tight text-ink">Learning that feels like a deep breath.</h2><p className="mt-4 max-w-md text-ink/70">Short, focused lessons, gentle pacing, and a stress-free interface designed to keep you calm, whether you have five minutes or five hours.</p><div className="mt-6 flex flex-wrap gap-2.5">{["Stress-free pacing", "Bite-size lessons", "Learn anywhere"].map((item) => <span key={item} className="inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5 text-sm font-medium text-ink"><Check className="size-3.5 text-blossom-deep" />{item}</span>)}</div></div><img src={posterDesign} alt="Calm spring-inspired learning workspace abstract" width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg" /></div></div></section>
      </main>
    </PageShell>
  );
}