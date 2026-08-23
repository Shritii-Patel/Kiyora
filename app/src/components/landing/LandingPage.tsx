import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Binary,
  Check,
  CircuitBoard,
  EyeOff,
  Fingerprint,
  KeyRound,
  LockKeyhole,
  Network,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import { LandingFooter } from "./LandingFooter";
import { LandingNavbar } from "./LandingNavbar";
import styles from "./Landing.module.css";

const heroVideo =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260613_180732_a54afbf6-b30d-470e-861f-669871f09f67.mp4";

const technologies = ["Midnight", "Compact", "Zero-Knowledge", "Lace", "1AM Wallet"];

const howSteps = [
  "Credential",
  "Local hashing",
  "Private witness",
  "ZK proof",
  "Midnight",
  "Access verified",
];

const operatorSteps = ["Configure", "Connect", "Publish", "Issue Credential"];
const memberSteps = ["Open Gate", "Connect", "Enter Credential", "Generate Proof", "Access Granted"];

const features = [
  {
    icon: LockKeyhole,
    title: "Private Gates",
    text: "Create access-controlled spaces without exposing member identity.",
  },
  {
    icon: KeyRound,
    title: "Credential Enrollment",
    text: "Issue and enroll credentials while keeping raw secrets private.",
  },
  {
    icon: Fingerprint,
    title: "Zero-Knowledge Verification",
    text: "Prove eligibility without revealing the credential.",
  },
  {
    icon: BadgeCheck,
    title: "Replay Protection",
    text: "Use nullifiers and verification rules to prevent proof reuse.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className={styles.eyebrow}>{children}</p>;
}

function CTAGroup({ className = "" }: { className?: string }) {
  return (
    <div className={`${styles.ctaGroup} ${className}`}>
      <Link href="/gate" className={styles.primaryCta}>
        <span>Launch Live Demo</span>
        <i aria-hidden="true"><ArrowRight size={17} /></i>
      </Link>
      <Link href="/admin" className={styles.secondaryCta}>
        Open Operator Console <ArrowRight size={15} aria-hidden="true" />
      </Link>
    </div>
  );
}

function Hero() {
  return (
    <section className={styles.heroSection}>
      <video className={styles.heroVideo} autoPlay muted loop playsInline preload="auto" aria-hidden="true">
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className={styles.starField} aria-hidden="true" />
      <div className={styles.heroShade} aria-hidden="true" />
      <div className={styles.heroBlueHaze} aria-hidden="true" />
      <div className={styles.heroNoise} aria-hidden="true" />

      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <div className={styles.heroEyebrow}>Private Access on Midnight</div>
          <h1 aria-label="Prove access. Reveal nothing.">
            <span><b>Prove access.</b></span>
            <span className={styles.gradientLine}><b>Reveal nothing.</b></span>
          </h1>
          <p>
            Kiyora lets users prove they are authorized without revealing their identity
            or exposing the credential behind the proof.
          </p>
          <p className={styles.heroSubline}>Private credentials. Verifiable access. Zero identity exposure.</p>
          <CTAGroup className={styles.heroActions} />
        </div>

        <div className={styles.heroType} aria-hidden="true">
          <span>PRIVATE</span>
          <span>ACCESS</span>
        </div>

        <div className={styles.microProof} aria-label="Private credential to zero-knowledge proof to access verified">
          <span>Private Credential</span>
          <i aria-hidden="true" />
          <span>Zero-Knowledge Proof</span>
          <i aria-hidden="true" />
          <span>Access Verified</span>
        </div>
      </div>
    </section>
  );
}

function TechnologyStrip() {
  return (
    <section id="product" className={styles.techStrip} aria-label="Kiyora technology foundation">
      <div className={styles.techStripInner}>
        <p>Built on privacy-first infrastructure</p>
        <div>
          {technologies.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProofVisualization() {
  return (
    <div className={styles.proofVisual} role="img" aria-label="Credential transformed into a zero-knowledge proof on Midnight">
      <div className={styles.proofGrid} aria-hidden="true" />
      <svg viewBox="0 0 680 560" aria-hidden="true">
        <defs>
          <linearGradient id="proofTrace" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.05" />
            <stop offset="0.5" stopColor="#29d9ff" stopOpacity="0.78" />
            <stop offset="1" stopColor="#2f7bff" stopOpacity="0.16" />
          </linearGradient>
        </defs>
        <path d="M100 94 C188 158 236 232 340 280 C450 330 494 398 586 468" />
        <path d="M120 438 C208 354 258 314 340 280 C436 240 488 166 566 96" />
        <path d="M340 70 L340 490" />
        <path d="M72 280 L608 280" />
        <circle cx="340" cy="280" r="78" />
        <circle cx="340" cy="280" r="132" />
      </svg>
      <div className={styles.proofCenter}>
        <CircuitBoard size={34} aria-hidden="true" />
        <strong>ZK</strong>
        <span>proof node</span>
      </div>
      {howSteps.map((step, index) => (
        <div key={step} className={`${styles.proofStep} ${styles[`proofStep${index + 1}` as keyof typeof styles]}`}>
          <small>{String(index + 1).padStart(2, "0")}</small>
          <span>{step}</span>
        </div>
      ))}
      <div className={styles.hashLabel}>hash::credential.commitment</div>
      <div className={styles.witnessLabel}>private_witness sealed locally</div>
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={`${styles.sectionInner} ${styles.howGrid} ${styles.reveal}`}>
        <div className={styles.sectionCopy}>
          <Eyebrow>How Kiyora Works</Eyebrow>
          <h2>Private access,<br />without identity exposure.</h2>
          <p>
            A member keeps credential material private, generates a proof locally,
            and exposes only the minimum public state needed for verification.
          </p>
          <div className={styles.compactList}>
            <span>Credential</span>
            <span>Local hashing</span>
            <span>Private witness</span>
            <span>ZK proof</span>
            <span>Midnight verification</span>
          </div>
        </div>
        <ProofVisualization />
      </div>
    </section>
  );
}

function Pipeline({ label, steps, icon: Icon }: { label: string; steps: string[]; icon: typeof Network }) {
  return (
    <div className={styles.pipeline}>
      <div className={styles.pipelineHeader}>
        <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
        <span>{label}</span>
      </div>
      <div className={styles.pipelineTrack}>
        <span className={styles.activePulse} aria-hidden="true" />
        {steps.map((step, index) => (
          <div key={step} className={styles.pipelineNode}>
            <i>{String(index + 1).padStart(2, "0")}</i>
            <span>{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AccessFlow() {
  return (
    <section className={styles.section}>
      <div className={`${styles.sectionInner} ${styles.reveal}`}>
        <div className={styles.splitHeading}>
          <div>
            <Eyebrow>Operator + Member Flow</Eyebrow>
            <h2>Two paths.<br />One private gate.</h2>
          </div>
          <p>
            Operators publish the gate and credential rules. Members prove eligibility
            without turning the gate into an identity collection point.
          </p>
        </div>
        <div className={styles.flowPanel}>
          <Pipeline label="Operator" icon={Network} steps={operatorSteps} />
          <Pipeline label="Member" icon={WalletCards} steps={memberSteps} />
        </div>
      </div>
    </section>
  );
}

function PrivacyArchitecture() {
  return (
    <section id="privacy" className={`${styles.section} ${styles.privacySection}`}>
      <div className={`${styles.sectionInner} ${styles.privacyGrid} ${styles.reveal}`}>
        <div className={styles.architectureVisual} role="img" aria-label="Private side, zero-knowledge proof, and public side architecture">
          <div className={styles.archColumn}>
            <strong>Private Side</strong>
            <span><KeyRound size={16} /> Credential</span>
            <span><EyeOff size={16} /> Private witness</span>
            <span><Binary size={16} /> Secret inputs</span>
          </div>
          <div className={styles.archBridge}>
            <i aria-hidden="true" />
            <div>
              <ShieldCheck size={28} aria-hidden="true" />
              <span>Zero-Knowledge Proof</span>
            </div>
            <i aria-hidden="true" />
          </div>
          <div className={styles.archColumn}>
            <strong>Public Side</strong>
            <span>Allowlist root</span>
            <span>Nullifier</span>
            <span>Verification result</span>
          </div>
        </div>
        <div className={styles.sectionCopy}>
          <Eyebrow>Privacy Architecture</Eyebrow>
          <h2>Privacy is part of<br />the architecture.</h2>
          <p>
            Raw credentials never go on-chain. Kiyora separates private witness data
            from public verification state, so applications can verify access without
            collecting unnecessary identity data.
          </p>
          <div className={styles.archNotes}>
            <span>Private credential material stays local</span>
            <span>Only proof/public verification state is exposed</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className={styles.section}>
      <div className={`${styles.sectionInner} ${styles.reveal}`}>
        <div className={styles.splitHeading}>
          <div>
            <Eyebrow>Core Product Features</Eyebrow>
            <h2>Everything needed for<br />verifiable private access.</h2>
          </div>
          <p>
            Focused primitives for credential enrollment, gated access, local proof
            generation, and replay-resistant verification.
          </p>
        </div>
        <div className={styles.featureGrid}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className={styles.featureModule}>
                <div className={styles.featureTop}>
                  <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                <div className={styles.featureTrace} aria-hidden="true" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyMidnight() {
  return (
    <section id="technology" className={`${styles.section} ${styles.midnightSection}`}>
      <div className={`${styles.sectionInner} ${styles.midnightGrid} ${styles.reveal}`}>
        <div className={styles.sectionCopy}>
          <Eyebrow>Why Midnight</Eyebrow>
          <h2>Built for privacy.<br />Verified on-chain.</h2>
          <p>
            Kiyora uses Midnight&apos;s dual-state architecture to separate private
            witness data from public verification state.
          </p>
          <div className={styles.techTags}>
            <span>Midnight</span>
            <span>Compact</span>
            <span>Preprod</span>
            <span>Zero-Knowledge</span>
          </div>
        </div>
        <div className={styles.midnightDiagram} role="img" aria-label="Private state to ZK circuit to public verification">
          <div>
            <small>01</small>
            <strong>Private State</strong>
            <span>credential witness</span>
          </div>
          <i aria-hidden="true" />
          <div className={styles.circuitNode}>
            <small>02</small>
            <strong>ZK Circuit</strong>
            <span>Compact proof rules</span>
          </div>
          <i aria-hidden="true" />
          <div>
            <small>03</small>
            <strong>Public Verification</strong>
            <span>root, nullifier, result</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Statement() {
  return (
    <section className={styles.statementSection}>
      <div className={`${styles.statementInner} ${styles.reveal}`}>
        <blockquote>
          &ldquo;Access should prove<br />eligibility - not expose<br />identity.&rdquo;
        </blockquote>
        <p>
          Kiyora separates identity from eligibility so applications can verify access
          without collecting unnecessary personal information.
        </p>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className={styles.finalSection}>
      <div className={styles.finalHorizon} aria-hidden="true" />
      <div className={`${styles.finalInner} ${styles.reveal}`}>
        <Eyebrow>Launch Kiyora</Eyebrow>
        <h2>Ready to create<br />private access?</h2>
        <p>Create a gate, issue credentials, and let members verify access privately on Midnight.</p>
        <CTAGroup />
      </div>
    </section>
  );
}

export function LandingPage() {
  return (
    <div className={styles.landingShell}>
      <LandingNavbar />
      <main>
        <Hero />
        <TechnologyStrip />
        <HowItWorks />
        <AccessFlow />
        <PrivacyArchitecture />
        <Features />
        <WhyMidnight />
        <Statement />
        <FinalCTA />
      </main>
      <LandingFooter />
    </div>
  );
}
