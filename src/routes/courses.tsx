import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import posterData from "@/assets/poster-data.jpg";
import posterDesign from "@/assets/poster-design.jpg";
import posterLeadership from "@/assets/poster-leadership.jpg";
import { Button } from "@/components/ui/button";
import { CourseCard, PageHero, PageShell, SectionLabel } from "@/components/vasant-site";

export const Route = createFileRoute("/courses")({ head: () => ({ meta: [{ title: "Courses | Vasant Learning" }, { name: "description", content: "Browse calm, practical courses for students, professionals, and teams." }, { property: "og:title", content: "Courses | Vasant Learning" }, { property: "og:description", content: "Browse calm, practical courses for every season of work and study." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: CoursesPage });

const courses = [
  { image: posterData, alt: "Abstract data charts growing like a spring garden", category: "Data", duration: "8 weeks", title: "Data & Analytics Foundations", outcome: "Turn raw numbers into clear, confident decisions." },
  { image: posterDesign, alt: "Abstract spring-inspired interface design poster", category: "Design", duration: "10 weeks", title: "Digital Design Essentials", outcome: "Learn to craft interfaces people genuinely enjoy." },
  { image: posterLeadership, alt: "Three abstract forms rising together for leadership", category: "Leadership", duration: "6 weeks", title: "Finance & Growth Strategy", outcome: "Build the financial instincts leaders rely on." },
  { image: posterLeadership, alt: "Warm abstract forms representing collaboration", category: "Corporate", duration: "4 weeks", title: "Leading with a Calm Mind", outcome: "Build steadier, kinder teams under pressure." },
  { image: posterDesign, alt: "Abstract sky-blue digital product composition", category: "Product", duration: "5 weeks", title: "Product Thinking Studio", outcome: "Move from a useful question to a shippable idea." },
  { image: posterData, alt: "Pastel spring charts and lines for growth", category: "Growth", duration: "4 weeks", title: "Foundations of Growth", outcome: "Tune experiments and read the metrics that matter." },
];

function CoursesPage() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const categories = ["All", "Data", "Design", "Leadership", "Corporate", "Product"];
  const filtered = useMemo(() => courses.filter((course) => (active === "All" || course.category === active) && `${course.title} ${course.outcome}`.toLowerCase().includes(query.toLowerCase())), [active, query]);
  return <PageShell><main><PageHero eyebrow="The course garden" title="Find your next useful skill." description="Focused plots of learning for new foundations, confident practice, and the projects waiting on the other side." action={<label className="flex max-w-xl items-center gap-3 rounded-full border border-ink/10 bg-card px-4 py-3 shadow-sm"><Search className="size-4 shrink-0 text-ink/50" /><input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Search courses, topics, mentors…" className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink/45" /></label>} /><section className="mx-auto max-w-6xl px-5 pb-20"><div className="flex flex-wrap items-center justify-between gap-4"><div><SectionLabel>Browse by plot</SectionLabel><p className="mt-2 text-sm text-muted-foreground">{filtered.length} learning plots ready to explore</p></div><div className="flex flex-wrap gap-2">{categories.map((category) => <Button key={category} type="button" variant={active === category ? "default" : "outline"} className={`rounded-full ${active === category ? "bg-ink text-primary-foreground" : "bg-card"}`} onClick={() => setActive(category)}>{category}</Button>)}</div></div><div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.map((course) => <CourseCard key={course.title} {...course} />)}</div>{filtered.length === 0 && <div className="py-20 text-center"><p className="font-display text-3xl text-ink">No plot found</p><p className="mt-2 text-sm text-muted-foreground">Try a different topic or clear your search.</p></div>}</section></main></PageShell>;
}