import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Check,
  Sparkles,
  Stamp,
  Wallet,
  Coins,
  Crown,
  Percent,
  Star,
  BadgeCheck,
  Ticket,
  Package,
  Gift,
  Bell,
  MessageSquareHeart,
  Zap,
  Share2,
  ScanLine,
  MapPin,
  BarChart3,
  Palette,
  X,
  ChevronDown,
  Megaphone,
  Tag,
  TrendingDown,
  AlertCircle,
  Users,
  ArrowUpRight,
  Smartphone,
  SlidersHorizontal,
  TrendingUp,


} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import solutionPhone from "@/assets/solution-phone.webp";
import heroPhones from "@/assets/hero-phones.webp";
import walletBadges from "@/assets/wallet-badges.png";
import avatar1 from "@/assets/avatars/avatar-1.webp";
import avatar2 from "@/assets/avatars/avatar-2.webp";
import avatar3 from "@/assets/avatars/avatar-3.webp";
import avatar4 from "@/assets/avatars/avatar-4.webp";
import avatar5 from "@/assets/avatars/avatar-5.webp";
import avatarT1 from "@/assets/avatars/avatar-t1.webp";
import avatarT2 from "@/assets/avatars/avatar-t2.webp";
import avatarT3 from "@/assets/avatars/avatar-t3.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [],
  }),
  component: Landing,
});

/* ---------- primitives ---------- */

function CTA({
  children,
  size = "md",
}: {
  children: React.ReactNode;
  size?: "md" | "lg";
}) {
  return (
    <a
      href="#planes"
      className={`btn-primary btn-primary-hover max-w-full text-center leading-snug ${
        size === "lg"
          ? "px-5 py-3.5 text-sm sm:px-8 sm:py-4 sm:text-lg"
          : "px-4 py-2.5 text-sm sm:text-base"
      }`}
    >
      <span className="min-w-0 break-words">{children}</span>
      <ArrowRight className="h-4 w-4 shrink-0" />
    </a>
  );

}

function TrustLine({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("mx-auto flex w-fit flex-col items-start justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground sm:w-auto sm:flex-row sm:items-center", className)}>
      {items.map((t) => (
        <li key={t} className="flex items-start gap-2">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-purple" strokeWidth={3} />
          <span className="text-left">{t}</span>
        </li>
      ))}
    </ul>
  );
}

const businessAvatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

function SocialProof() {
  return (
    <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:items-center animate-fade-in-up">
      <div className="flex -space-x-2.5 shrink-0">
        {businessAvatars.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Propietario de negocio ${i + 1}`}
            className="h-10 w-10 rounded-full border-2 border-background object-cover shadow-soft animate-social-float"
            style={{ animationDelay: `${i * 0.15}s` }}
            loading="lazy"
            decoding="async"
            width={96}
            height={96}
          />
        ))}
      </div>
      <p className="text-center text-sm leading-snug text-muted-foreground sm:text-left">
        <span className="text-base font-extrabold text-brand-gradient">+50</span>{" "}
        negocios ya fidelizan clientes con nuestra plataforma.
      </p>
    </div>
  );
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-brand-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-purple">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

/* ---------- nav ---------- */

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-4 sm:px-6">
        <a href="#" className="flex shrink-0 items-center">
          <img
            src="/lealtio-logo.webp"
            alt="Lealtio"
            width={600}
            height={300}
            className="h-13 w-auto shrink-0 object-contain sm:h-16 lg:h-16"
          />
        </a>

        <nav className="hidden items-center justify-center gap-6 text-sm font-medium text-muted-foreground md:flex lg:gap-8">
          <a href="#como-funciona" className="whitespace-nowrap hover:text-foreground">Cómo funciona</a>
          <a href="#mecanicas" className="whitespace-nowrap hover:text-foreground">Tipos de tarjetas</a>
          <a href="#features" className="whitespace-nowrap hover:text-foreground">Funciones</a>
          <a href="#planes" className="whitespace-nowrap hover:text-foreground">Precios</a>
          <a href="#faq" className="whitespace-nowrap hover:text-foreground">FAQ</a>
        </nav>
        <div className="flex justify-end">
          <CTA>Prueba gratis</CTA>
        </div>
      </div>
    </header>
  );
}

/* ---------- 1 HERO ---------- */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1000px 500px at 80% -10%, rgba(23,201,255,0.25), transparent 60%), radial-gradient(800px 500px at 0% 20%, rgba(123,47,247,0.25), transparent 60%)",
        }}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-10 lg:grid-cols-[1.15fr_1fr] lg:pt-14">
        <div className="fade-up">
          <SectionTag>Fidelización sin fricción</SectionTag>
          <h1 className="mt-6 text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Haz que tus clientes{" "}
            <span className="text-brand-gradient">regresen solos.</span>{" "}
            Sin publicidad. Sin perseguirlos.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
            Con tu propio sistema de lealtad que trae a tus clientes de vuelta,
            una y otra vez — con una tarjeta digital que vive en el celular de
            tu cliente, sin apps que instalar.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
            <CTA size="lg">Inicia tu prueba gratis de 14 días</CTA>
          </div>
          <SocialProof />
          <div className="mt-6">
            <TrustLine
              className="sm:mx-0 sm:justify-start"
              items={[
                "Cancela cuando quieras",
                "Sin descargar apps",
              ]}
            />
          </div>
        </div>

        <HeroMockup />
      </div>
    </section>
  );
}

/* ---------- Hero Mockup (premium composition) ---------- */

function PhoneFrame({
  children,
  className = "",
  time = "9:41",
}: {
  children: React.ReactNode;
  className?: string;
  time?: string;
}) {
  return (
    <div
      className={`relative rounded-[2.6rem] bg-[#0f1117] p-[10px] shadow-[0_40px_80px_-30px_rgba(15,17,23,0.45),0_18px_40px_-20px_rgba(90,76,245,0.35)] ring-1 ring-black/10 ${className}`}
    >
      <div className="relative overflow-hidden rounded-[2.1rem] bg-white">
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-[#0f1117]" />
        {/* Status bar */}
        <div className="flex items-center justify-between px-6 pt-2.5 text-[10px] font-semibold text-[#0f1117]/80">
          <span>{time}</span>
          <span className="opacity-0">.</span>
        </div>
        <div className="px-4 pb-5 pt-4">{children}</div>
      </div>
    </div>
  );
}

function WalletCard({
  variant = "primary",
  stamps,
}: {
  variant?: "primary" | "progress";
  stamps?: number;
}) {
  const bg =
    variant === "primary"
      ? "bg-[linear-gradient(135deg,#7b2ff7_0%,#5a4cf5_35%,#2f80ff_70%,#17c9ff_100%)]"
      : "bg-[linear-gradient(135deg,#0f1117_0%,#1c1f2b_100%)]";
  return (
    <div className={`relative overflow-hidden rounded-2xl p-4 text-white ${bg} shadow-[0_20px_40px_-20px_rgba(90,76,245,0.6)]`}>
      {/* shimmer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 animate-shimmer-card bg-gradient-to-r from-transparent via-white/25 to-transparent"
      />
      <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider opacity-90">
        <span className="rounded-full bg-white/20 px-2 py-0.5 backdrop-blur">LEALTIO</span>
        <span>Miembro VIP</span>
      </div>
      <div className="mt-3 text-[11px] uppercase tracking-widest opacity-80">Café Aurora</div>
      <div className="mt-0.5 text-lg font-black tracking-tight">Ana Martínez</div>

      {variant === "primary" ? (
        <>
          <div className="mt-3 flex items-center justify-between text-[10px] opacity-90">
            <span>PUNTOS</span>
            <span>NIVEL</span>
          </div>
          <div className="flex items-end justify-between">
            <div className="text-2xl font-black">1,250</div>
            <div className="text-sm font-bold">Oro</div>
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/25">
            <div className="h-full w-[72%] rounded-full bg-white" />
          </div>
        </>
      ) : (
        <>
          <div className="mt-3 text-[10px] uppercase tracking-widest opacity-80">
            {stamps ?? 7} de 10 sellos
          </div>
          <div className="mt-2 grid grid-cols-5 gap-1.5">
            {Array.from({ length: 10 }).map((_, i) => {
              const filled = i < (stamps ?? 7);
              return (
                <div
                  key={i}
                  className={`flex aspect-square items-center justify-center rounded-full text-[10px] font-bold ${
                    filled
                      ? "bg-white text-[#5a4cf5]"
                      : "border border-white/40 text-white/50"
                  }`}
                >
                  {filled ? "★" : ""}
                </div>
              );
            })}
          </div>
        </>
      )}

      <div className="mt-3 flex items-center justify-center rounded-lg bg-white p-2">
        {/* fake QR */}
        <div className="grid h-14 w-14 grid-cols-8 gap-[1px]">
          {Array.from({ length: 64 }).map((_, i) => (
            <div
              key={i}
              className={
                [0, 1, 2, 5, 6, 7, 8, 15, 16, 21, 22, 23, 24, 31, 32, 39, 40, 47, 48, 55, 56, 57, 58, 61, 62, 63].includes(
                  i,
                ) || (i * 7) % 5 === 0
                  ? "bg-[#0f1117]"
                  : "bg-transparent"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FloatingChip({
  icon,
  title,
  subtitle,
  className = "",
  delay = "0s",
  accent = "text-brand-purple",
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
  delay?: string;
  accent?: string;
}) {
  return (
    <div
      style={{ animationDelay: delay }}
      className={`animate-float-slower rounded-2xl border border-white/70 bg-white/80 p-2.5 shadow-[0_20px_50px_-20px_rgba(15,17,23,0.25)] backdrop-blur-xl sm:p-3 ${className}`}
    >
      <div className="flex items-center gap-2 sm:gap-2.5">
        <div className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-accent sm:h-8 sm:w-8 sm:rounded-xl ${accent}`}>
          {icon}
        </div>
        <div className="min-w-0">
          <div className="text-xs font-bold leading-tight text-foreground sm:text-sm">{title}</div>
          {subtitle && (
            <div className="text-[10px] leading-tight text-muted-foreground sm:text-[11px]">{subtitle}</div>
          )}
        </div>
      </div>
    </div>
  );
}

function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* Ambient gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 -z-10"
        style={{
          background:
            "radial-gradient(400px 300px at 30% 30%, rgba(123,47,247,0.28), transparent 65%), radial-gradient(400px 300px at 75% 70%, rgba(23,201,255,0.28), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-8 bottom-4 -z-10 h-24 rounded-full bg-brand-gradient opacity-30 blur-3xl"
      />

      {/* Phone stage */}
      <div className="relative mx-auto aspect-[4/5] w-full max-w-[310px] sm:max-w-md">
        {/* Optimized phone mockups image */}
        <img
          src={heroPhones}
          alt="Tarjetas de fidelidad Lealtio en iPhone: clínica dental y barbería"
          width={900}
          height={941}
          className="relative z-0 h-full w-full object-contain drop-shadow-2xl animate-float-slow"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />

        {/* Floating chips */}
        <FloatingChip
          icon={<Sparkles className="h-4 w-4" />}
          title="+85% Retención"
          subtitle="Clientes recurrentes"
          className="absolute left-1 top-1 z-10 w-[150px] sm:w-[180px] sm:-left-6 sm:top-6"
          delay="0s"
          accent="text-brand-purple"
        />
        <FloatingChip
          icon={<Bell className="h-4 w-4" />}
          title="Push enviado"
          subtitle="1,250 miembros"
          className="absolute right-1 top-1 z-10 w-[150px] sm:w-[180px] sm:-right-6"
          delay="1.8s"
          accent="text-brand-violet"
        />
        <FloatingChip
          icon={<BarChart3 className="h-4 w-4" />}
          title="+40% Más visitas"
          subtitle="Últimos 30 días"
          className="absolute left-1 bottom-[42%] z-10 w-[150px] sm:w-[180px] sm:-left-10 sm:top-1/2 sm:bottom-auto"
          delay="1.2s"
          accent="text-brand-blue"
        />
        <FloatingChip
          icon={<Crown className="h-4 w-4" />}
          title="Premium Card"
          subtitle="Diseño impecable"
          className="absolute right-1 bottom-[18%] z-10 w-[150px] sm:w-[180px] sm:-right-8 sm:top-[58%] sm:bottom-auto"
          delay="0.6s"
          accent="text-brand-cyan"
        />
        <FloatingChip
          icon={<Star className="h-4 w-4 fill-current" />}
          title="4.9★ satisfacción"
          className="absolute bottom-0 left-1/2 z-10 w-[150px] -translate-x-1/2 sm:w-[170px]"
          delay="2.4s"
          accent="text-brand-purple"
        />
      </div>


      {/* Wallet compatibility */}
      <div className="mt-6 flex flex-col items-center gap-3">
        <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Compatible con
        </div>
        <div className="flex items-center justify-center">
          <img
            src={walletBadges}
            alt="Agregar a Apple Wallet y Google Wallet"
            width={320}
            height={56}
            loading="lazy"
            decoding="async"
            className="h-12 w-auto sm:h-14"
          />
        </div>
      </div>
    </div>
  );
}


/* ---------- 2 PROBLEM ---------- */

function Problem() {
  const clients = [
    { name: "Ana Torres", initials: "AT", lost: true },
    { name: "Luis Fernández", initials: "LF", lost: true },
    { name: "Sofía Herrera", initials: "SH", lost: true },
    { name: "Diego Martínez", initials: "DM", lost: true },
    { name: "Laura Vargas", initials: "LV", lost: true },
    { name: "Pedro Sánchez", initials: "PS", lost: true },
    { name: "Carmen Ruiz", initials: "CR", lost: true },
    { name: "María González", initials: "MG", lost: false },
    { name: "José Hernández", initials: "JH", lost: false },
    { name: "Carlos Ramírez", initials: "CR", lost: false },
  ];
  const lostClients = clients.filter((c) => c.lost);
  const activeClients = clients.filter((c) => !c.lost);
  const activeCount = activeClients.length;
  const lostCount = lostClients.length;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent via-background to-background py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-brand-gradient opacity-[0.08] blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="order-1 lg:order-2 lg:py-4">
            <SectionTag>El problema</SectionTag>
            <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
              Deja de perder clientes que{" "}
              <span className="text-brand-gradient">ya conquistaste.</span>
            </h2>
            <p className="mt-6 text-xl text-foreground">
              ¿Cuántos te compraron una sola vez este mes… y no volviste a
              saber de ellos?
            </p>

            <div className="my-8 max-w-2xl text-center sm:text-left">
              <p className="text-xl leading-relaxed text-foreground">
                Conseguir un cliente nuevo cuesta hasta 5 veces más que conservar
                uno.{" "}
                <span className="font-semibold text-destructive">
                  Por eso duele tanto atraerlo, venderle… y verlo desaparecer.
                </span>
              </p>
              <p className="mt-4 text-xl leading-relaxed text-foreground">
                Mientras la renta y los sueldos siguen corriendo, él puede estar
                comprando en otro lugar.
              </p>
              <p className="mt-4 text-xl leading-relaxed text-foreground">
                Ahora toca gastar para atraer a otro…{" "}
                <span className="font-semibold text-destructive">
                  que también podría comprar una vez, desaparecer y obligarte a
                  gastar de nuevo.
                </span>
              </p>
            </div>
          </div>

          {/* visual: customer list mockup */}
          <div className="relative order-2 lg:order-1">
            <Card className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-destructive/20 bg-card p-0 shadow-card">
              {/* mockup header */}
              <div className="flex items-center justify-between border-b border-destructive/10 bg-destructive/5 px-5 py-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-destructive">
                    <TrendingDown size={10} className="text-destructive-foreground" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-destructive">
                    Clientes que no volvieron
                  </span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-background px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                  <Users size={12} />
                  {clients.length}
                </div>
              </div>

              {/* critical stat row */}
              <div className="grid grid-cols-2 gap-3 border-b border-destructive/10 px-5 py-5">
                <div className="rounded-2xl bg-destructive/10 p-3">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-destructive">
                    <TrendingDown size={12} />
                    No volvieron
                  </div>
                  <div className="mt-1 text-3xl font-black text-destructive">
                    {lostCount} de {clients.length}
                  </div>
                </div>
                <div className="rounded-2xl bg-destructive/10 p-3">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-destructive">
                    <AlertCircle size={12} />
                    Pérdida mensual
                  </div>
                  <div className="mt-1 text-3xl font-black text-destructive">
                    70%
                  </div>
                </div>
              </div>

              <ul className="space-y-1 px-5 py-4">
                {lostClients.slice(0, 4).map((c) => (
                  <li
                    key={c.name}
                    className="flex items-center justify-between gap-3 rounded-xl bg-background p-2.5 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-destructive/15 text-xs font-bold text-destructive">
                        {c.initials}
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {c.name}
                      </span>
                    </div>
                    <Badge className="border-destructive/30 bg-destructive/10 text-destructive hover:bg-destructive/20">
                      No volvió
                    </Badge>
                  </li>
                ))}

                {lostClients.length > 4 && (
                  <li className="flex items-center justify-between gap-3 rounded-xl border border-dashed border-destructive/30 bg-destructive/5 p-2.5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-destructive/10 text-xs font-bold text-destructive">
                        +{lostClients.length - 4}
                      </div>
                      <span className="text-sm font-medium text-destructive/80">
                        clientes más no volvieron
                      </span>
                    </div>
                    <Badge className="border-destructive/30 bg-destructive/10 text-destructive/80 hover:bg-destructive/20">
                      Perdidos
                    </Badge>
                  </li>
                )}

                <li className="flex items-center justify-between gap-3 rounded-xl p-2.5 opacity-40">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground">
                      {activeCount}
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {activeClients.map((c) => c.name.split(" ")[0]).join(", ")}
                    </span>
                  </div>
                  <Badge variant="secondary" className="bg-muted text-muted-foreground">
                    Volvieron
                  </Badge>
                </li>
              </ul>
            </Card>


            <div
              aria-hidden
              className="pointer-events-none absolute -inset-12 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/10 via-transparent to-brand-cyan/10 blur-3xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}


/* ---------- 3 SOLUTION ---------- */


function Solution() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(600px 400px at 10% 20%, rgba(123,47,247,0.35), transparent 60%), radial-gradient(600px 400px at 90% 80%, rgba(23,201,255,0.25), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-28">
        {/* Encabezado centrado arriba */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[color:var(--color-brand-cyan)]">
            <Sparkles className="h-3.5 w-3.5" /> La solución
          </span>
          <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl">
            Convierte personas de una sola compra en{" "}
            <span className="text-brand-gradient">clientes que vuelven</span>{" "}
            sin que tengas que rogarles
          </h2>
        </div>

      <div className="relative mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div className="order-2 lg:sticky lg:top-28 lg:self-start">
          <div className="relative mx-auto max-w-sm">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 rounded-full bg-brand-gradient opacity-50 blur-3xl"
            />
            <img
              src={solutionPhone}
              alt="Tarjeta digital de lealtad Lealtio con progreso 7 de 10 sellos"
              width={760}
              height={848}
              loading="lazy"
              decoding="async"
              className="w-full drop-shadow-2xl"
            />

            {/* Floating badge: retención */}
            <div className="pointer-events-none absolute right-[-2%] top-[1%] z-10 block animate-[float_6s_ease-in-out_infinite]">
              <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 shadow-2xl backdrop-blur-xl sm:gap-3 sm:px-4 sm:py-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[color:var(--color-brand-cyan)]/20 ring-1 ring-[color:var(--color-brand-cyan)]/40 sm:h-9 sm:w-9 sm:rounded-xl">
                  <TrendingUp className="h-3.5 w-3.5 text-[color:var(--color-brand-cyan)] sm:h-4 sm:w-4" />
                </div>
                <p className="text-[11px] font-bold leading-tight text-white sm:text-sm">
                  Menos clientes perdidos
                  <span className="block font-medium text-white/70">
                    Más clientes frecuentes
                  </span>
                </p>
              </div>
            </div>

            {/* Floating badge: siempre en su celular */}
            <div className="pointer-events-none absolute left-[-2%] bottom-[16%] z-10 block animate-[float_7s_ease-in-out_infinite_reverse]">
              <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 shadow-2xl backdrop-blur-xl sm:gap-3 sm:px-4 sm:py-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-gradient shadow-lg sm:h-9 sm:w-9 sm:rounded-xl">
                  <Smartphone className="h-3.5 w-3.5 text-ink sm:h-4 sm:w-4" />
                </div>
                <p className="text-[11px] font-bold leading-tight text-white sm:text-sm">
                  Nunca la olvidan
                  <span className="block font-medium text-white/70">
                    Siempre en su celular
                  </span>
                </p>
              </div>
            </div>

          </div>
        </div>


        <div className="order-1">
          <div className="relative space-y-6 text-xl leading-relaxed text-white/80">

            <p className="flex items-start gap-3">
              <Crown className="mt-1.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                Lealtio es tu programa de lealtad digital que da a tus clientes
                una poderosa{" "}
                <span className="text-brand-gradient font-semibold">
                  razón para volver
                </span>,{" "}
                <span className="font-semibold text-white">
                  sin tener que perseguirlos
                </span>
                .
              </span>
            </p>

            <p className="flex items-start gap-3">
              <Smartphone className="mt-1.5 h-4 w-4 shrink-0 text-brand-cyan" />
              <span>
                Después de comprar, tu cliente recibe en su celular una tarjeta
                de lealtad donde suma puntos o sellos hasta ganar la recompensa{" "}
                <span className="font-semibold text-white">
                  que elijas
                </span>. Así,{" "}
                <span className="text-brand-gradient font-semibold">
                  conviertes compradores ocasionales en clientes recurrentes
                </span>
                .
              </span>
            </p>

            <p className="flex items-start gap-3">
              <TrendingUp className="mt-1.5 h-4 w-4 shrink-0 text-white" />
              <span>
                Y construyes lo que realmente quieres:{" "}
                <span className="text-brand-gradient font-semibold">
                  clientes que vuelven solos una y otra vez
                </span>{" "}
                y siguen dejando{" "}
                <span className="font-semibold text-white">dinero a tu negocio</span>,
                con una menor necesidad de conseguir clientes nuevos para seguir
                creciendo.
              </span>
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

/* ---------- 4 HOW IT WORKS ---------- */

const STEPS = [
  {
    n: "01",
    title: "Crea tu cuenta",
    body:
      "Crea tu cuenta y empieza con 14 días gratis. Sin instalaciones ni configuraciones complicadas. En cuanto te registres ya puedes empezar a crear tu programa de lealtad y probarlo con clientes reales.",
  },
  {
    n: "02",
    title: "Crea la tarjeta que hace que vuelvan solos",
    body:
      "Sube tu logo, elige tus colores, define la recompensa — 'compra 10, la 11 es gratis'. Sin diseñador. Sin programador. Solo tú, decidiendo qué premia a tu cliente.",
  },
  {
    n: "03",
    title: "Compártela con tus clientes",
    body:
      "Muestra tu código QR en el mostrador o en tus redes. Lo escanean con la cámara del celular — sin descargar nada — y la tarjeta se guarda sola en su Wallet de Google o Apple.",
  },
  {
    n: "04",
    title: "Míralos volver, uno tras otro",
    body:
      "Cada sello los acerca a esa recompensa que los trae de vuelta. Ya no dependes de un anuncio — su propio celular se los recuerda. No compras tarjetas: compraste dejar de perseguir clientes.",
  },
];

function HowItWorks() {
  return (
    <section id="como-funciona" className="mx-auto max-w-7xl px-6 py-28">
      <div className="mx-auto max-w-3xl text-center">
        <SectionTag>Cómo funciona</SectionTag>
        <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
          Cuatro pasos. Cinco minutos.{" "}
          <span className="text-brand-gradient">Cero complicaciones.</span>
        </h2>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <div
            key={s.n}
            className="group relative rounded-3xl border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
          >
            <div className="text-5xl font-black text-brand-gradient">
              {s.n}
            </div>
            <h3 className="mt-6 text-xl font-black leading-snug">{s.title}</h3>
            <p className="mt-3 text-muted-foreground">{s.body}</p>
            {i < STEPS.length - 1 && (
              <ArrowRight
                className="absolute -right-4 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-border lg:block"
                strokeWidth={2}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- 5 NO NEW APP ---------- */

function NoNewApp() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-gradient px-8 py-20 text-center text-white shadow-glow">
        {/* Decorative background glows */}
        <div
          aria-hidden
          className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/20 blur-3xl animate-float-slow"
        />
        <div
          aria-hidden
          className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-brand-cyan/30 blur-3xl animate-float-slow"
        />

        {/* Floating wallet card decorations */}
        <div
          aria-hidden
          className="absolute left-[8%] top-[18%] hidden rotate-[-8deg] flex-col gap-2 rounded-xl border border-white/20 bg-white/10 p-3 shadow-lg backdrop-blur-md lg:flex animate-float"
        >
          <div className="h-2 w-10 rounded bg-white/40" />
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-white/80" />
            <div className="h-2 w-12 rounded bg-white/40" />
          </div>
        </div>
        <div
          aria-hidden
          className="absolute bottom-[22%] right-[10%] hidden rotate-[6deg] flex-col items-center justify-center gap-1 rounded-xl border border-white/20 bg-white/10 p-3 shadow-lg backdrop-blur-md lg:flex animate-float-slower"
        >
          <Ticket className="h-6 w-6 text-white" />
          <div className="h-1.5 w-14 rounded bg-white/40" />
        </div>

        {/* Soft radial sheen */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(400px 200px at 20% 20%, rgba(255,255,255,0.4), transparent 60%)",
          }}
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Glass badge with icon */}
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-white/10 shadow-lg backdrop-blur-md">
            <Wallet className="h-8 w-8 text-white" strokeWidth={2} />
          </div>

          {/* Title with contrast and balance */}
          <h3 className="text-balance text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            No es una app nueva.{" "}
            <span className="text-white/90">
              Es el lugar donde tu cliente ya guarda todo lo importante.
            </span>
          </h3>

          {/* Body with highlighted keyword */}
          <p className="mt-6 text-balance text-lg text-white/90 sm:text-xl">
            Ese espacio donde tu cliente ya guarda su tarjeta de banco, boletos
            de avión y entradas al cine se llama{" "}
            <span className="font-bold text-white">Wallet</span> — viene de
            fábrica en todo iPhone y en la mayoría de Android. Tu sistema solo
            entrega la tarjeta ahí.
          </p>

          {/* Trust lines */}
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 shrink-0 text-white" strokeWidth={3} />
              <span>Nada que instalar</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 shrink-0 text-white" strokeWidth={3} />
              <span>Nada que configurar</span>
            </li>
          </ul>

          {/* CTA with hover motion */}
          <div className="mt-10">
            <a
              href="#planes"
              className="group inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-center text-base font-bold leading-snug text-ink transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/20 sm:px-8 sm:py-4 sm:text-lg"
            >
              <span className="min-w-0 break-words">Si, quiero esto en mi negocio ya</span>
              <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 6 MECHANICS ---------- */

const MECHANICS = [
  {
    icon: Stamp,
    title: "Sellos",
    hook: "Compra tras compra, hasta que la casa invita la que sigue.",
    body:
      "Cada compra le da un sello. Junta los que pidas —digamos 10— y la próxima va por tu cuenta. Todo lo ve desde su celular: cuántos tiene, cuántos le faltan.",
    for: "Cafeterías, taquerías, lavanderías",
  },
  {
    icon: Coins,
    title: "Cashback",
    hook: "Cada peso que gasta hoy, se lo regresas mañana.",
    body:
      "Con cada compra, recibe un porcentaje de vuelta como saldo — y ese saldo solo sirve en tu negocio. En vez de gastarlo en la competencia, lo gasta contigo.",
    for: "Boutiques, spas, restaurantes",
  },
  {
    icon: Crown,
    title: "Membresía",
    hook: "Un trato distinto para la gente que ya es tuya.",
    body:
      "La membresía convierte a tu cliente en parte de un grupo con privilegios que los demás no tienen. Cuando alguien siente que pertenece, deja de comparar precios.",
    for: "Gimnasios, clubes, salones",
  },
  {
    icon: Percent,
    title: "Descuento",
    hook: "Un privilegio que solo tienen los que ya te eligieron.",
    body:
      "Le das a tu cliente un descuento que no le das a cualquiera — y si quieres, entre más compra, más grande se vuelve. También sirve para cerrar alianzas.",
    for: "Tiendas, ferreterías, boutiques",
  },
  {
    icon: Star,
    title: "Puntos",
    hook: "Cada visita suma hacia algo que de verdad quieren.",
    body:
      "Gana puntos por comprar, por visitarte, o por lo que decidas premiar. Tú eliges cuánto vale cada recompensa — desde un premio chico hasta uno grande.",
    for: "Casi cualquier negocio con visitas recurrentes",
  },
  {
    icon: Ticket,
    title: "Cupón",
    hook: "La excusa perfecta para una primera oportunidad.",
    body:
      "Una tarjeta de un solo uso para quien nunca te ha comprado. En cuanto lo usa, se puede convertir sola en tarjeta de sellos o de puntos.",
    for: "Negocios nuevos, lanzamientos",
  },
  {
    icon: Package,
    title: "Paquete Prepago",
    hook: "Cobra hoy por 10 visitas futuras, de una sola vez.",
    body:
      "Paga por adelantado un paquete —10 clases, 10 cortes, 10 sesiones— y cada visita descuenta una. Tú ya cobraste. Y tu cliente ya se comprometió.",
    for: "Estudios de yoga, salones, talleres",
  },
  {
    icon: Gift,
    title: "Tarjeta de Regalo",
    hook: "Que tu mejor cliente se convierta en tu mejor vendedor.",
    body:
      "Alguien compra saldo para regalarlo, y el otro lo gasta poco a poco o de una vez. Cada tarjeta de regalo que vendes es un cliente nuevo tocando tu puerta.",
    for: "Spas, restaurantes, barberías",
  },
];

function Mechanics() {
  return (
    <section id="mecanicas" className="mx-auto max-w-7xl px-6 py-28">
      <div className="mx-auto max-w-3xl text-center">
        <SectionTag>Tipos de tarjetas disponibles</SectionTag>
        <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
          8 formas de lograr que tus clientes{" "}
          <span className="text-brand-gradient">vuelvan solos.</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Ya sabes como funciona. Ahora no importa si tu reto es retener a los
          que ya te compran o atraer a los que aún no te conocen, tienes un
          camino para cada uno, listo para usarse desde el día uno.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {MECHANICS.map((m) => {
          const Icon = m.icon;
          return (
            <article
              key={m.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div
                aria-hidden
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-soft opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
              />
              <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                <Icon className="h-6 w-6" strokeWidth={2.2} />
              </span>
              <h3 className="mt-5 text-xl font-black">{m.title}</h3>
              <p className="mt-3 text-sm font-bold text-foreground">
                {m.hook}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{m.body}</p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand-purple/20 bg-brand-purple/10 px-3 py-1.5 text-xs font-semibold text-brand-purple">
                <Tag className="h-3.5 w-3.5" />
                <span>Ideal para: {m.for}</span>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-14 text-center">
        <CTA size="lg">Si, quiero activar las 8 formas ahora</CTA>
      </div>
    </section>
  );
}


/* ---------- 8 FEATURES ---------- */

const FEATURES = [
  {
    icon: Bell,
    title: "Notificaciones push",
    body:
      "Le hablas directo a su celular, sin pedirle el número. Aparece en su pantalla de bloqueo, como si fuera un amigo. Gratis, tuyo, y llega cuando tú decides.",
  },
  {
    icon: MessageSquareHeart,
    title: "Reseñas que se piden solas",
    body:
      "Justo después de sellar su tarjeta —cuando la sonrisa sigue fresca— el sistema le pide que te califique. Tú no tienes que acordarte. Tus reseñas suben solas.",
  },
  {
    icon: Zap,
    title: "Automatizaciones",
    body:
      "Lo configuras una vez: 'si no vuelve en 15 días, mándale esto.' El sistema decide por ti a la hora exacta. Llegas al día siguiente y el cliente ya volvió solo.",
  },
  {
    icon: Share2,
    title: "Programa de referidos",
    body:
      "Tu cliente comparte su tarjeta con un amigo. Cuando la usa, los dos ganan algo. No gastaste en anuncios — la gente que ya te quiere te trae más gente.",
  },
  {
    icon: ScanLine,
    title: "Scanner App gratis",
    body:
      "Ni terminal cara, ni app que bajar. Se abre desde el navegador de cualquier celular y en tres segundos ya estás sellando. La caja registradora ya la traes en la mano.",
  },
  {
    icon: MapPin,
    title: "Geo-notificaciones",
    body:
      "Apenas entra en un radio de 100 metros de tu negocio, su celular muestra: 'Hoy, 20% menos en tu favorito.' Tú no lo viste pasar. El sistema sí.",
  },
  {
    icon: BarChart3,
    title: "Analítica de tu negocio",
    body:
      "Cuántos clientes nuevos entraron, cuántos no vuelven hace un mes, qué recompensa se canjea más. Todo en un tablero de 30 segundos. Dejas de adivinar y empiezas a saber.",
  },
  {
    icon: Palette,
    title: "111 plantillas + personalización",
    body:
      "Sube tu logo y tus colores — tu tarjeta se ve como tú. Si no quieres empezar de cero, tienes más de 111 diseños listos para ajustar en minutos.",
  },
];

function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-ink text-paper">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(700px 400px at 90% 10%, rgba(23,201,255,0.18), transparent 60%), radial-gradient(600px 400px at 10% 90%, rgba(123,47,247,0.25), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[color:var(--color-brand-cyan)]">
            <Sparkles className="h-3.5 w-3.5" /> Todo incluido
          </span>
          <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl">
            Una tarjeta de cartón se queda callada.{" "}
            <span className="text-brand-gradient">La tuya no.</span>
          </h2>
          <p className="mt-6 text-lg text-white/70">
            Una tarjeta de papel no manda mensajes, no avisa si tu cliente pasó
            cerca, no te trae clientes nuevos. Se pierde en la cartera — y ahí
            muere. La tuya no. Habla, avisa, vende y te muestra en números qué
            pasa con cada cliente. Todo esto, incluido.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/[0.06]"
              >
                <span className="inline-grid h-11 w-11 place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <h3 className="mt-5 text-lg font-black text-white">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {f.body}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center text-lg font-black text-white">
          El mensaje que llega solo. La reseña que se pide sola. El amigo que
          se vuelve cliente. La caja registradora que ya traes en el bolsillo.
          <br />
          <span className="text-brand-gradient">
            Esto separa a un negocio que espera... del que se lo garantiza.
          </span>
        </div>

        <div className="mt-12 text-center">
          <CTA size="lg">Sí, quiero todo esto incluido</CTA>
          <div className="mt-6 text-white/70">
            <TrustLine
              items={[
                "14 días de prueba gratis",
                "Sin instalar nada",
                "Cancela cuando quieras",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 9 PRICING ---------- */

const PLANS = [
  {
    name: "Impulso",
    tagline: "El plan más simple para empezar a fidelizar clientes hoy mismo.",
    priceMonthly: 1499,
    priceAnnual: 1049,
    annualYear: 12588,
    features: [
      "1 promoción activa",
      "1 geo-localización (radio 100m)",
      "1 manager (Scanner App)",
      "Tarjetas y descargas en Wallet ilimitadas",
      "Contactos ilimitados",
      "Notificaciones push ilimitadas gratis",
      "Control de duplicados",
      "Analítica en tiempo real",
      "Soporte 24/7",
    ],
    popular: false,
  },
  {
    name: "Turbo",
    tagline: "El equilibrio perfecto entre potencia y precio para crecer sin frenos.",
    priceMonthly: 2199,
    priceAnnual: 1549,
    annualYear: 18588,
    features: [
      "3 promociones activas",
      "3 geo-localizaciones",
      "10 managers (Scanner App)",
      "Tarjetas y descargas en Wallet ilimitadas",
      "Contactos ilimitados",
      "Notificaciones push ilimitadas gratis",
      "Control de duplicados",
      "Analítica en tiempo real",
      "Campos personalizados en tus tarjetas",
      "Programa de referidos automatizado",
      "Reseñas de Google automáticas",
      "Soporte 24/7",
    ],
    popular: true,
  },
  {
    name: "Cohete",
    tagline: "Máxima potencia de fidelización, para negocios que ya piensan en grande.",
    priceMonthly: 4399,
    priceAnnual: 3049,
    annualYear: 36588,
    features: [
      "10 promociones activas simultáneas",
      "10 geo-localizaciones",
      "50 managers (Scanner App)",
      "Todo lo anterior, ilimitado",
      "Campos personalizados en tus tarjetas",
      "Programa de referidos automatizado",
      "Reseñas de Google automáticas",
      "Recuperación automática de clientes inactivos",
      "Conexión API con tu propio software",
      "Soporte prioritario 24/7",
    ],
    popular: false,
  },
];

function Pricing() {
  const [annual, setAnnual] = useState(false);
  const fmt = (n: number) => `$${n.toLocaleString("es-MX")}`;

  return (
    <section id="planes" className="mx-auto max-w-7xl px-6 py-28">
      <div className="mx-auto max-w-3xl text-center">
        <SectionTag>Planes y precios</SectionTag>
        <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
          Elige el plan que{" "}
          <span className="text-brand-gradient">arranca tu sistema.</span>
        </h2>

        <div className="mt-10 inline-flex flex-col items-center gap-3">
          <span className="rounded-full bg-brand-gradient px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-glow">
            🔥 Ahorra 30% pagando anual
          </span>
          <p className="text-sm text-muted-foreground">
            Precios en pesos mexicanos (MXN).
          </p>
          <div className="inline-flex items-center rounded-full border border-border bg-card p-1 shadow-soft">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${
                !annual ? "bg-brand-gradient text-white shadow-glow" : "text-muted-foreground"
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${
                annual ? "bg-brand-gradient text-white shadow-glow" : "text-muted-foreground"
              }`}
            >
              Anual
            </button>
          </div>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {PLANS.map((p) => (
          <article
            key={p.name}
            className={`relative flex flex-col rounded-3xl border p-8 transition-all ${
              p.popular
                ? "border-transparent bg-ink text-white shadow-glow lg:scale-[1.03]"
                : "border-border bg-card shadow-soft hover:shadow-card"
            }`}
          >
            {p.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-gradient px-4 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-glow">
                Más popular
              </span>
            )}
            <h3
              className={`text-2xl font-black ${
                p.popular ? "text-brand-gradient" : ""
              }`}
            >
              {p.name}
            </h3>
            <p
              className={`mt-2 text-sm ${
                p.popular ? "text-white/70" : "text-muted-foreground"
              }`}
            >
              {p.tagline}
            </p>

            <div className="mt-8">
              {annual && (
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand-gradient px-3 py-1 text-xs font-black uppercase tracking-wide text-white shadow-glow">
                    🔥 30% de descuento
                  </span>
                  <span
                    className={`text-xs font-semibold line-through ${
                      p.popular ? "text-white/50" : "text-muted-foreground"
                    }`}
                  >
                    {fmt(p.priceMonthly)}
                  </span>
                </div>
              )}
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black">
                  {fmt(annual ? p.priceAnnual : p.priceMonthly)}
                </span>
                <span
                  className={`text-sm font-semibold ${
                    p.popular ? "text-white/60" : "text-muted-foreground"
                  }`}
                >
                  /mes
                </span>
              </div>
              <p
                className={`mt-2 text-xs ${
                  p.popular ? "text-white/60" : "text-muted-foreground"
                }`}
              >
                {annual
                  ? `${fmt(p.annualYear)}/año · IVA incluido`
                  : "IVA incluido · facturación mensual"}
              </p>
            </div>


            <ul className="mt-8 flex-1 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm">
                  <Check
                    className={`mt-0.5 h-4 w-4 shrink-0 ${
                      p.popular
                        ? "text-[color:var(--color-brand-cyan)]"
                        : "text-brand-purple"
                    }`}
                    strokeWidth={3}
                  />
                  <span className={p.popular ? "text-white/85" : ""}>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className={`mt-8 inline-flex max-w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-center text-sm font-bold leading-snug transition-all ${
                p.popular
                  ? "bg-white text-ink hover:-translate-y-0.5"
                  : "btn-primary btn-primary-hover"
              }`}
            >
              <span className="min-w-0 break-words">Comienza gratis por 14 días</span>
              <ArrowRight className="h-4 w-4 shrink-0" />
            </a>

          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- 10 GUARANTEE ---------- */

function Guarantee() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-24">
      <div className="absolute inset-0 -z-10 mx-auto max-w-3xl rounded-[3rem] bg-brand-gradient opacity-20 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-12 text-center shadow-card sm:p-16 lg:p-20">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-gradient opacity-10 blur-2xl" />
        <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-brand-cyan/20 blur-3xl" />

        <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow sm:h-20 sm:w-20">
          <Check className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={3} />
        </div>
        <h2 className="relative mt-8 text-4xl font-black leading-tight sm:text-5xl">
          <span className="text-brand-gradient">Pruébalo gratis 14 días</span>
        </h2>
        <p className="relative mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Antes, solo las grandes cadenas podían pagar sistemas de fidelización
          de miles de dólares.{" "}
          <span className="text-brand-gradient font-semibold">
            Hoy ese mismo tipo de sistema está a tu alcance.
          </span>{" "}
          Usa la plataforma completa por 14 días y no pagas nada hasta el día
          15.
        </p>
        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
          <CTA size="lg">Sí, quiero mi prueba de 14 días gratis</CTA>
        </div>
        <div className="relative mt-6">
          <TrustLine
            items={[
              "Cancela cuando quieras",
              "Sin llamadas ni letras chiquitas.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- 11 TESTIMONIALS ---------- */

const TESTIMONIALS = [
  {
    quote:
      "Llevaba años con las tarjetitas de cartón y la mitad de mis clientes las perdía o las dejaba en casa. Con Lealtio ahora todo está en su celular, no se les olvida. En 2 meses ya tengo más de 180 clientes con tarjeta y los martes, que era día muerto, ahora lo lleno mandando una promo push. La gente me pregunta dónde saqué eso, parece de cadena grande y soy del barrio.",
    name: "Julian B.",
    business: "Barbería El Catrín",
    location: "Estado de México, MX",
    flag: "🇲🇽",
    result: "+40% visitas recurrentes en 60 días",
    avatar: avatarT1,
  },
  {
    quote:
      "Estaba chato de que los chicos se olvidaran del carnet del gym. Ahora les paso la tarjeta digital y la guardan en el Wallet, ni tienen que descargar nada. Programé que al cumplir 12 asistencias les llegue un descuento para traer a un amigo y me han llegado 23 nuevos solo por eso. La inversión se pagó sola la primera semana.",
    name: "Matías R.",
    business: "Fuerza Natural Gym",
    location: "Región Metropolitana, CL",
    flag: "🇨🇱",
    result: "23 referidos nuevos en 1 mes",
    avatar: avatarT2,
  },
  {
    quote:
      "Tengo una picantería chica pero con caseritos de años. Quería premiarlos sin complicarme. Hice la tarjeta de 10 almuerzos y uno gratis y también mando promos los fines de semana. Ahora me dicen 'ahora sí estoy en el sistema jaja'. Antes no tenía idea cuántos volvían, ahora lo veo clarito en el panel.",
    name: "Carlos A.",
    business: "La Sazón de Arequipa",
    location: "Arequipa, Perú",
    flag: "🇵🇪",
    result: "86% de clientes recurrentes con tarjeta activa",
    avatar: avatarT3,
  },
];

function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <SectionTag>Testimonios</SectionTag>
        <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
          Negocios que ya dejaron de{" "}
          <span className="text-brand-gradient">perseguir clientes.</span>
        </h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
          <span className="flex gap-1 text-[color:var(--color-brand-purple)]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" strokeWidth={0} />
            ))}
          </span>
          <span>
            <strong className="text-foreground">4.9 / 5</strong> — opiniones de
            negocios que usan Lealtio
          </span>
        </div>
      </div>
      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-soft"
          >
            <div className="flex items-center gap-3">
              <img
                src={t.avatar}
                alt={`${t.name}, ${t.business}`}
                width={48}
                height={48}
                loading="lazy"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 text-sm font-bold">
                  {t.name}
                  <span aria-hidden="true" className="text-base leading-none">
                    {t.flag}
                  </span>
                  <BadgeCheck className="h-4 w-4 text-[color:var(--color-brand-purple)]" />
                </div>
                <div className="truncate text-xs text-muted-foreground">
                  {t.business} • {t.location}
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2">
              <span className="flex gap-0.5 rounded-md bg-[#f5b301]/10 px-1.5 py-1 text-[#f5b301]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-current"
                    strokeWidth={0}
                  />
                ))}
              </span>
              <span className="text-xs font-semibold text-muted-foreground">
                Opinión verificada
              </span>
            </div>

            <figcaption className="mt-3">
              <span className="inline-flex items-center rounded-full bg-[#eaf6ec] px-3 py-1.5 text-xs font-semibold text-[#2e7d4f]">
                {t.result}
              </span>
            </figcaption>

            <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-muted-foreground">
              “{t.quote}”
            </blockquote>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ---------- 12 WITH vs WITHOUT ---------- */

const COMPARE = [
  [
    "Pagas publicidad para conseguir al mismo cliente, una y otra vez.",
    "Tu cliente vuelve, una y otra vez — sin que gastes un peso extra.",
  ],
  [
    "No sabes quién es tu mejor cliente, ni quién está a punto de irse.",
    "Sabes quién es tu mejor cliente, y quién está a punto de irse — a tiempo.",
  ],
  [
    "Un cliente nuevo compra una vez y desaparece. No sabes si fue la última.",
    "Un cliente nuevo se lleva su propia tarjeta digital, hecha para traerlo de vuelta.",
  ],
  [
    "Cada mes vuelves a empezar, persiguiendo a los mismos de siempre.",
    "Cada mes construyes sobre lo que ya tienes. Tu base crece, no se reinicia.",
  ],
  [
    "Adivinas si lo que haces para atraer clientes está funcionando.",
    "Ves en tiempo real cuántas visitas, canjes y clientes activos tienes.",
  ],
  [
    "Tu negocio se ve igual que el de la competencia — todos peleando por precio.",
    "Tienes algo que la competencia no puede copiar: clientes que dejaron de buscar.",
  ],
];

function Compare() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="mx-auto max-w-3xl text-center">
        <SectionTag>Con vs. Sin Lealtio</SectionTag>
        <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
          Una tarjeta de cartón se queda callada.{" "}
          <span className="text-brand-gradient">La tuya trabaja.</span>
        </h2>
      </div>

      <div className="mt-14 overflow-hidden rounded-3xl border border-border shadow-card">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-muted p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-muted-foreground/20 text-muted-foreground">
                <X className="h-5 w-5" strokeWidth={3} />
              </span>
              <h3 className="text-xl font-black text-muted-foreground">
                Sin Lealtio
              </h3>
            </div>
            <ul className="mt-6 space-y-4">
              {COMPARE.map(([bad]) => (
                <li key={bad} className="flex gap-3 text-muted-foreground">
                  <X className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={2.5} />
                  <span>{bad}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden bg-brand-gradient p-8 text-white sm:p-10">
            <div
              aria-hidden
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(400px 200px at 80% 20%, rgba(255,255,255,0.35), transparent 60%)",
              }}
            />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white/20">
                  <Check className="h-5 w-5" strokeWidth={3} />
                </span>
                <h3 className="text-xl font-black">Con Lealtio</h3>
              </div>
              <ul className="mt-6 space-y-4">
                {COMPARE.map(([, good]) => (
                  <li key={good} className="flex gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={3} />
                    <span>{good}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 13 FAQ ---------- */

const FAQS = [
  {
    q: "¿Es difícil de usar?",
    a: "No. Todo se reduce a un paso: buscas a tu cliente o escaneas su tarjeta, tocas un botón y la visita queda registrada. Tu equipo lo aprende en su primer turno.",
  },
  {
    q: "¿Mi cliente necesita descargar algo?",
    a: "No. La tarjeta se guarda directo en el Wallet que ya viene en su celular — el mismo lugar donde guarda su tarjeta de banco, sus boletos de avión y las entradas al cine.",
  },
  {
    q: "¿Funciona igual en iPhone y Android?",
    a: "Sí. Se guarda en Apple Wallet o Google Wallet según el celular de tu cliente — sin ninguna diferencia.",
  },
  {
    q: "¿Necesito comprar algún lector o equipo especial?",
    a: "No. Escaneas y registras las visitas de tus clientes desde cualquier celular, tablet o computadora.",
  },
  {
    q: "¿Cuánto tiempo toma configurarlo?",
    a: "Menos de 5 minutos una vez que tienes tu logo listo.",
  },
  {
    q: "¿Hay algún contrato de permanencia?",
    a: "No. Puedes cancelar cuando quieras, sin penalización, directamente desde tu panel.",
  },
  {
    q: "¿Sirve si tengo varias sucursales?",
    a: "Sí. El plan Cohete está diseñado para negocios con mayor volumen — hasta 10 ubicaciones administradas desde un solo sistema.",
  },
  {
    q: "¿Qué pasa si un cliente cambia de celular?",
    a: "No pierde su tarjeta ni sus beneficios. Puede restaurarla fácilmente en su nuevo dispositivo y seguir acumulando recompensas.",
  },
  {
    q: "¿Puedo importar mi base de clientes actual?",
    a: "Sí. Importa fácilmente tu base desde un archivo Excel o CSV, sin tener que registrarlos uno por uno.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-28">
      <div className="text-center">
        <SectionTag>Preguntas frecuentes</SectionTag>
        <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
          Todo lo que quieres saber{" "}
          <span className="text-brand-gradient">antes de empezar.</span>
        </h2>
      </div>

      <div className="mt-12 space-y-3">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.q}
              className="rounded-2xl border border-border bg-card shadow-soft"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
              >
                <span className="text-base font-bold sm:text-lg">{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-brand-purple transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  strokeWidth={2.5}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-6 text-muted-foreground">{f.a}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- 14 CLOSE ---------- */

function Close() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 pt-4">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-8 py-24 text-center text-white shadow-glow sm:px-16">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(600px 400px at 20% 20%, rgba(123,47,247,0.45), transparent 60%), radial-gradient(600px 400px at 80% 80%, rgba(23,201,255,0.35), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl">
          <SectionTag>Es el momento</SectionTag>
          <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Tu próximo cliente que vuelve solo empieza con la primera{" "}
            <span className="text-brand-gradient">tarjeta digital</span> que
            crees hoy.
          </h2>
          <p className="mt-6 text-lg text-white/70 sm:text-xl">
            Cada día que pasa sin este sistema es un cliente más que quizás no
            vuelvas a ver.
          </p>
          <div className="mt-10">
            <CTA size="lg">Sí, quiero mi sistema de fidelización</CTA>
          </div>
          <div className="mt-8 text-white/90">
            <TrustLine
              className="text-white/90"
              items={[
                "Sin conocimientos técnicos",
                "14 días de prueba",
                "Sin compromiso",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- footer ---------- */

function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center">
          <img
            src="/lealtio-logo.webp"
            alt="Lealtio"
            width={600}
            height={300}
            loading="lazy"
            decoding="async"
            className="h-10 w-auto shrink-0 object-contain sm:h-11"
          />
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Lealtio — Fidelización sin fricción.
        </p>
      </div>
    </footer>
  );
}

/* ---------- page ---------- */

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />

        <HowItWorks />
        <NoNewApp />
        <Mechanics />
        <Features />

        <Pricing />
        <Testimonials />
        <Compare />
        <Guarantee />
        <FAQ />
        <Close />
      </main>
      <Footer />
    </div>
  );
}
