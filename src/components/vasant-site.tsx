import type { ComponentType, ReactNode } from "react";
import { ArrowRight, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export type Course = { image: string; alt: string; category: string; duration: string; title: string; outcome: string };

const navItems = [
  ["Courses", "/courses"],
  ["Learning paths", "/learning-paths"],
  ["For business", "/business"],
  ["Resources", "/resources"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return <header className="sticky top-0 z-40 border-b border-blossom/20 bg-cream/85 backdrop-blur-sm"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5"><Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}><span className="grid size-10 place-items-center rounded-2xl bg-brand-gradient text-primary-foreground shadow-md shadow-blossom/30"><img src="/vasant-mark.png" alt="" className="size-7 object-contain" /></span><span className="leading-tight"><span className="block font-display text-xl font-semibold tracking-tight text-ink">Vasant</span><span className="block text-[10px] font-medium uppercase tracking-[0.28em] text-ink/50">learn & grow</span></span></Link><nav className="hidden items-center gap-1 text-sm font-medium text-ink/70 lg:flex">{navItems.map(([label, to]) => <Link key={to} to={to} activeProps={{ className: "bg-card text-ink" }} className="rounded-full px-3 py-2 transition hover:bg-card hover:text-ink">{label}</Link>)}</nav><div className="flex items-center gap-2.5"><Button asChild variant="ghost" className="hidden text-sm font-medium text-ink/70 hover:bg-transparent hover:text-blossom-deep sm:inline-flex"><Link to="/course-detail">Sign in</Link></Button><Button asChild className="hidden rounded-full bg-primary text-primary-foreground shadow-lg shadow-blossom/25 hover:bg-blossom-deep sm:inline-flex"><Link to="/courses">Start learning <ArrowRight /></Link></Button><Button type="button" variant="outline" size="icon" aria-label={open ? "Close menu" : "Open menu"} className="rounded-full bg-card lg:hidden" onClick={() => setOpen((value) => !value)}>{open ? <X /> : <Menu />}</Button></div></div>{open && <nav className="border-t border-blossom/15 bg-cream px-5 py-4 lg:hidden">{navItems.map(([label, to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className={`block border-b border-ink/10 py-3 text-sm font-medium ${location.pathname === to ? "text-blossom-deep" : "text-ink/75"}`}>{label}</Link>)}<Button asChild className="mt-4 w-full rounded-full bg-primary text-primary-foreground"><Link to="/courses">Start learning <ArrowRight /></Link></Button></nav>}</header>;
}

export function SiteFooter() {
  return <footer className="border-t border-blossom/20 bg-pearl/70"><div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:flex-row sm:items-end sm:justify-between"><div><div className="flex items-center gap-2.5"><span className="grid size-9 place-items-center rounded-xl bg-brand-gradient"><img src="/vasant-mark.png" alt="" className="size-6 object-contain" /></span><span className="font-display text-lg font-semibold text-ink">Vasant</span></div><p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/55">A quiet study garden for students, professionals, and teams. Grown with care.</p></div><nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/60">{navItems.slice(0, 5).map(([label, to]) => <Link key={to} to={to} className="transition hover:text-blossom-deep">{label}</Link>)}</nav><p className="text-xs text-ink/45">© 2026 Vasant Learning</p></div></footer>;
}

export function PageShell({ children }: { children: ReactNode }) { return <div className="min-h-screen overflow-hidden bg-cream font-sans text-ink antialiased"><div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden"><div className="vasant-drift absolute -left-24 -top-24 size-96 rounded-full bg-mint/40 blur-3xl" /><div className="vasant-drift absolute -right-28 top-1/3 size-[28rem] rounded-full bg-blossom/30 blur-3xl" /><div className="vasant-drift absolute bottom-0 left-1/3 size-80 rounded-full bg-sky/35 blur-3xl" /></div><div className="relative"><SiteHeader />{children}<SiteFooter /></div></div>; }

export function SectionLabel({ children }: { children: ReactNode }) { return <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blossom-deep">{children}</p>; }

export function StatStrip() { return <div className="flex items-center gap-5 sm:gap-8"><div><p className="font-display text-3xl font-semibold text-ink">48k+</p><p className="text-xs uppercase tracking-widest text-ink/50">Learners</p></div><div className="h-10 w-px bg-ink/10" /><div><p className="font-display text-3xl font-semibold text-ink">4.9</p><p className="text-xs uppercase tracking-widest text-ink/50">Avg. rating</p></div><div className="h-10 w-px bg-ink/10" /><div><p className="font-display text-3xl font-semibold text-ink">60+</p><p className="text-xs uppercase tracking-widest text-ink/50">Paths</p></div></div>; }

export function CourseCard({ image, alt, category, duration, title, outcome }: Course) { return <article className="group overflow-hidden rounded-3xl border border-white/70 bg-card shadow-lg shadow-blossom/10 transition hover:-translate-y-1 hover:shadow-xl"><div className="aspect-[16/10] overflow-hidden"><img src={image} alt={alt} width={1024} height={768} loading="lazy" className="size-full object-cover transition duration-500 group-hover:scale-105" /></div><div className="p-5"><div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-ink/50"><span className="rounded-full bg-mint/65 px-2.5 py-0.5 text-ink">{category}</span><span>{duration}</span></div><h3 className="mt-2.5 font-display text-xl font-semibold text-ink">{title}</h3><p className="mt-1.5 text-sm leading-relaxed text-ink/65">{outcome}</p><Link to="/course-detail" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blossom-deep">View course <ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link></div></article>; }

export function PageHero({ eyebrow, title, description, action }: { eyebrow: string; title: string; description: string; action?: ReactNode }) { return <section className="mx-auto max-w-6xl px-5 pb-12 pt-14 lg:pb-16 lg:pt-20"><SectionLabel>{eyebrow}</SectionLabel><h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.06] tracking-tight text-ink sm:text-6xl">{title}</h1><p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">{description}</p>{action && <div className="mt-7">{action}</div>}</section>; }

export function SearchBar({ placeholder = "Search courses, topics, mentors…" }: { placeholder?: string }) { return <label className="flex items-center gap-3 rounded-full border border-ink/10 bg-card px-4 py-3 shadow-sm"><Search className="size-4 shrink-0 text-ink/50" /><input type="search" placeholder={placeholder} className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink/45" /></label>; }

export function IconBullet({ icon: Icon, children }: { icon: ComponentType<{ className?: string }>; children: ReactNode }) { return <div className="flex items-start gap-3"><span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-xl bg-mint text-ink"><Icon className="size-4" /></span><p className="text-sm leading-relaxed text-ink/70">{children}</p></div>; }