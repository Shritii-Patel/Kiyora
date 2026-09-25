"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Binary,
  Check,
  CircuitBoard,
  Cpu,
  EyeOff,
  Fingerprint,
  KeyRound,
  LockKeyhole,
  Network,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { LandingFooter } from "./LandingFooter";
import { LandingNavbar } from "./LandingNavbar";
import styles from "./Landing.module.css";

const heroVideo =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260613_180732_a54afbf6-b30d-470e-861f-669871f09f67.mp4";

const technologies = [
  { name: "Midnight", tag: "Privacy L1" },
  { name: "Compact", tag: "ZK Language" },
  { name: "Zero-Knowledge", tag: "SNARKs" },
  { name: "Lace", tag: "DApp Wallet" },
  { name: "1AM Wallet", tag: "Confidential Signer" },
];

const howSteps = [
  {
    step: "01",
    title: "Credential",
    desc: "Private secret key held strictly in client memory",
    tag: "SECRET_INPUT",
    status: "CONFIDENTIAL",
  },
  {
    step: "02",
    title: "Local Hashing",
    desc: "Deterministic Poseidon commitment derived locally",
    tag: "POSEIDON_HASH",
    status: "LOCAL_ONLY",
  },
  {
    step: "03",
    title: "Private Witness",
    desc: "Compact circuit evaluates witness in user browser",
    tag: "CLIENT_WITNESS",
    status: "SEALED",
  },
  {
    step: "04",
    title: "ZK Proof",
    desc: "Zero-Knowledge SNARK compiled without leaking input",
    tag: "ZK_SNARK",
    status: "MATHEMATICAL",
  },
  {
    step: "05",
    title: "Midnight",
    desc: "Preprod ledger receives public proof & nullifier",
    tag: "ON_CHAIN",
    status: "VERIFIABLE",
  },
  {
    step: "06",
    title: "Access Verified",
    desc: "Boolean gate unlocked without identity storage",
    tag: "VERIFIED",
    status: "COMPLETE",
  },
];

const operatorSteps = [
  { num: "01", name: "Configure", desc: "Define rules & access criteria", status: "RULESET" },
  { num: "02", name: "Connect", desc: "Authorize Lace / 1AM Wallet", status: "WALLET" },
  { num: "03", name: "Publish", desc: "Deploy confidential gate on Midnight", status: "CONTRACT" },
  { num: "04", name: "Issue Credential", desc: "Enroll confidential member commitments", status: "ENROLLMENT" },
];

const memberSteps = [
  { num: "01", name: "Open Gate", desc: "Access the protected portal", status: "GATEWAY" },
  { num: "02", name: "Connect", desc: "Connect confidential wallet", status: "SIGNER" },
  { num: "03", name: "Enter Credential", desc: "Provide secret locally in-memory", status: "LOCAL" },
  { num: "04", name: "Generate Proof", desc: "Execute Compact circuit locally", status: "ZK_PROVE" },
  { num: "05", name: "Access Granted", desc: "Verified on Midnight ledger", status: "CONFIRMED" },
];

const features = [
  {
    icon: LockKeyhole,
    title: "Private Gates",
    text: "Create access-controlled spaces without exposing member identity or wallet transaction history.",
    tag: "ZERO_IDENTITY",
  },
  {
    icon: KeyRound,
    title: "Credential Enrollment",
    text: "Issue and enroll cryptographic commitments while raw credentials remain strictly on the user machine.",
    tag: "LOCAL_SEAL",
  },
  {
    icon: Fingerprint,
    title: "Zero-Knowledge Verification",
    text: "Prove eligibility mathematically using Midnight Compact circuits without revealing private witness data.",
    tag: "COMPACT_ZK",
  },
  {
    icon: BadgeCheck,
    title: "Replay Protection",
    text: "Enforce cryptographic nullifiers to prevent proof reuse while preserving permanent member anonymity.",
    tag: "NULLIFIERS",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className={styles.eyebrow}>
      <span className={styles.eyebrowDot} aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
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
      <div className={styles.techStripScanLine} aria-hidden="true" />
      <div className={styles.techStripInner}>
        <div className={styles.techBeacon}>
          <span className={styles.techBeaconDot} aria-hidden="true" />
          <span>Privacy-First Infrastructure</span>
        </div>
        <div className={styles.techBadgesWrap}>
          {technologies.map((tech) => (
            <div key={tech.name} className={styles.techBadge}>
              <span>{tech.name}</span>
              <span className={styles.techBadgeSub}>{tech.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProofVisualization({ activeIndex, onSelectStep }: { activeIndex: number; onSelectStep: (idx: number) => void }) {
  return (
    <div className={styles.proofVisual} role="img" aria-label="Credential transformed into a zero-knowledge proof on Midnight">
      <div className={styles.proofGrid} aria-hidden="true" />
      <svg viewBox="0 0 680 560" aria-hidden="true">
        <defs>
          <linearGradient id="proofTrace" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.08" />
            <stop offset="0.5" stopColor="#29d9ff" stopOpacity="0.85" />
            <stop offset="1" stopColor="#2f7bff" stopOpacity="0.22" />
          </linearGradient>
        </defs>
        <path d="M100 94 C188 158 236 232 340 280 C450 330 494 398 586 468" className={styles.proofPathStatic} />
        <path d="M120 438 C208 354 258 314 340 280 C436 240 488 166 566 96" className={styles.proofPathStatic} />
        <path d="M340 70 L340 490" className={styles.proofPathStatic} />
        <path d="M72 280 L608 280" className={styles.proofPathStatic} />
        <circle cx="340" cy="280" r="78" className={styles.proofPathStatic} />
        <circle cx="340" cy="280" r="132" className={styles.proofPathStatic} />

        <path d="M100 94 C188 158 236 232 340 280 C450 330 494 398 586 468" className={styles.proofPathAnimated} />
        <path d="M120 438 C208 354 258 314 340 280 C436 240 488 166 566 96" className={styles.proofPathAnimated} />
        <path d="M340 70 L340 490" className={styles.proofPathPulse} />
      </svg>

      <div className={styles.proofCenter}>
        <div className={styles.proofCenterRadar} aria-hidden="true" />
        <div className={styles.proofCenterRadarOuter} aria-hidden="true" />
        <CircuitBoard size={34} aria-hidden="true" />
        <strong>ZK</strong>
        <span>proof node</span>
      </div>

      {howSteps.map((step, index) => {
        const isActive = activeIndex === index;
        return (
          <button
            type="button"
            key={step.title}
            onClick={() => onSelectStep(index)}
            className={`${styles.proofStep} ${styles[`proofStep${index + 1}` as keyof typeof styles]} ${isActive ? styles.proofStepActiveNode : ""}`}
            aria-label={`Step ${step.step}: ${step.title}`}
          >
            <small>{step.step}</small>
            <span>{step.title}</span>
          </button>
        );
      })}

      <div className={styles.hashLabel}>
        <span>COMMITMENT:</span> {activeIndex >= 1 ? "0x8f2a...c391 (SEALED)" : "0x0000...0000"}
      </div>
      <div className={styles.witnessLabel}>
        <span>LOCAL WITNESS:</span> {activeIndex >= 2 ? "COMPILED OK" : "STANDBY"}
      </div>
    </div>
  );
}

function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const autoCycleRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    autoCycleRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % howSteps.length);
    }, 3800);
    return () => {
      if (autoCycleRef.current) clearInterval(autoCycleRef.current);
    };
  }, []);

  const handleManualSelect = (idx: number) => {
    setActiveStep(idx);
    if (autoCycleRef.current) {
      clearInterval(autoCycleRef.current);
      autoCycleRef.current = null;
    }
  };

  return (
    <section id="how-it-works" className={styles.section}>
      <div className={`${styles.sectionInner} ${styles.howGrid} ${styles.reveal}`}>
        <div className={styles.sectionCopy}>
          <Eyebrow>How Kiyora Works</Eyebrow>
          <h2>
            <span><b>Private access,</b></span>
            <span className={styles.gradientText}><b>without identity exposure.</b></span>
          </h2>
          <p>
            A member keeps credential material private, generates a proof locally,
            and exposes only the minimum public state needed for verification.
          </p>

          <div className={styles.stepNavigation}>
            {howSteps.slice(0, 5).map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  type="button"
                  key={step.title}
                  onClick={() => handleManualSelect(idx)}
                  className={`${styles.stepNavItem} ${isActive ? styles.stepNavItemActive : ""}`}
                >
                  <div className={styles.stepNavLeft}>
                    <span className={styles.stepNavNum}>{step.step}</span>
                    <div>
                      <span className={styles.stepNavTitle}>{step.title}</span>
                      <span className={styles.stepNavDesc}>{step.desc}</span>
                    </div>
                  </div>
                  <span className={styles.stepNavTag}>{step.status}</span>
                </button>
              );
            })}
          </div>
        </div>

        <ProofVisualization activeIndex={activeStep} onSelectStep={handleManualSelect} />
      </div>
    </section>
  );
}

function Pipeline({
  label,
  badge,
  steps,
  icon: Icon,
}: {
  label: string;
  badge: string;
  steps: { num: string; name: string; desc: string; status: string }[];
  icon: typeof Network;
}) {
  return (
    <div className={styles.pipeline}>
      <div className={styles.pipelineHeader}>
        <div className={styles.pipelineHeaderTitle}>
          <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
          <span>{label}</span>
        </div>
        <span className={styles.pipelineBadge}>{badge}</span>
      </div>

      <div className={styles.pipelineTrack}>
        <div className={styles.pipelineLaser} aria-hidden="true" />
        {steps.map((step) => (
          <div key={step.name} className={styles.pipelineNode}>
            <div className={styles.pipelineNodeBadge}>{step.num}</div>
            <div className={styles.pipelineNodeText}>
              <span className={styles.pipelineNodeName}>{step.name}</span>
              <span className={styles.pipelineNodeDesc}>{step.desc}</span>
            </div>
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
            <h2>
              <span><b>Two paths.</b></span>
              <span className={styles.gradientText}><b>One private gate.</b></span>
            </h2>
          </div>
          <p>
            Operators publish the gate and credential rules. Members prove eligibility
            without turning the gate into an identity collection point.
          </p>
        </div>

        <div className={styles.flowPanel}>
          <Pipeline label="Operator" badge="4 Stages" icon={Network} steps={operatorSteps} />
          <Pipeline label="Member" badge="5 Stages" icon={WalletCards} steps={memberSteps} />
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
            <div className={styles.archHeader}>
              <strong>Private Realm</strong>
              <span className={styles.archHeaderPill}>Local Client</span>
            </div>
            <div className={styles.archCard}>
              <div className={styles.archCardLeft}>
                <KeyRound size={16} aria-hidden="true" />
                <span>Raw Credential</span>
              </div>
              <span className={styles.archCardStatus}>LOCAL ONLY</span>
            </div>
            <div className={styles.archCard}>
              <div className={styles.archCardLeft}>
                <EyeOff size={16} aria-hidden="true" />
                <span>Private Witness</span>
              </div>
              <span className={styles.archCardStatus}>SEALED</span>
            </div>
            <div className={styles.archCard}>
              <div className={styles.archCardLeft}>
                <Binary size={16} aria-hidden="true" />
                <span>Secret Preimage</span>
              </div>
              <span className={styles.archCardStatus}>CONFIDENTIAL</span>
            </div>
          </div>

          <div className={styles.archBridge}>
            <div className={styles.archBridgeLine} aria-hidden="true" />
            <div className={styles.archShield}>
              <ShieldCheck size={30} aria-hidden="true" />
              <span>Compact ZK Prover</span>
            </div>
            <div className={styles.archBridgeLine} aria-hidden="true" />
          </div>

          <div className={styles.archColumn}>
            <div className={styles.archHeader}>
              <strong>Public Realm</strong>
              <span className={styles.archHeaderPill}>Midnight Ledger</span>
            </div>
            <div className={styles.archCard}>
              <div className={styles.archCardLeft}>
                <Cpu size={16} aria-hidden="true" />
                <span>Allowlist Root</span>
              </div>
              <span className={styles.archCardStatus}>ON-CHAIN</span>
            </div>
            <div className={styles.archCard}>
              <div className={styles.archCardLeft}>
                <Fingerprint size={16} aria-hidden="true" />
                <span>Unique Nullifier</span>
              </div>
              <span className={styles.archCardStatus}>REPLAY SAFE</span>
            </div>
            <div className={styles.archCard}>
              <div className={styles.archCardLeft}>
                <Check size={16} aria-hidden="true" />
                <span>Verification State</span>
              </div>
              <span className={styles.archCardStatus}>VERIFIED</span>
            </div>
          </div>
        </div>

        <div className={styles.sectionCopy}>
          <Eyebrow>Privacy Architecture</Eyebrow>
          <h2>
            <span><b>Privacy is part of</b></span>
            <span className={styles.gradientText}><b>the architecture.</b></span>
          </h2>
          <p>
            Raw credentials never go on-chain. Kiyora separates private witness data
            from public verification state, so applications can verify access without
            collecting unnecessary identity data.
          </p>

          <div className={styles.archNotes}>
            <div className={styles.archNoteItem}>
              <Check size={16} aria-hidden="true" />
              <span>Private credential material stays in browser memory only</span>
            </div>
            <div className={styles.archNoteItem}>
              <Check size={16} aria-hidden="true" />
              <span>Only mathematical proof & single-use nullifier are verified on Midnight</span>
            </div>
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
            <h2>
              <span><b>Everything needed for</b></span>
              <span className={styles.gradientText}><b>verifiable private access.</b></span>
            </h2>
          </div>
          <p>
            Focused cryptographic primitives for credential enrollment, gated access,
            local proof generation, and replay-resistant verification.
          </p>
        </div>

        <div className={styles.featureGrid}>
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className={styles.featureModule}>
                <div className={styles.featureTop}>
                  <div className={styles.featureIconWrap}>
                    <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                  </div>
                  <span className={styles.featureBadge}>{feature.tag}</span>
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
          <h2>
            <span><b>Built for privacy.</b></span>
            <span className={styles.gradientText}><b>Verified on-chain.</b></span>
          </h2>
          <p>
            Kiyora uses Midnight&apos;s dual-state architecture to separate private
            witness data from public verification state.
          </p>

          <div className={styles.techTags}>
            <span className={styles.techTagPill}>Midnight Preprod</span>
            <span className={styles.techTagPill}>Compact Circuit</span>
            <span className={styles.techTagPill}>Zero-Knowledge SNARK</span>
            <span className={styles.techTagPill}>Confidential Computing</span>
          </div>
        </div>

        <div className={styles.midnightDiagram} role="img" aria-label="Private state to ZK circuit to public verification">
          <div className={styles.diagramNode}>
            <small>01</small>
            <div>
              <strong>Private State</strong>
              <span>Credential witness stays within browser memory</span>
            </div>
          </div>

          <div className={styles.diagramArrow} aria-hidden="true" />

          <div className={`${styles.diagramNode} ${styles.circuitNodeHighlight}`}>
            <small>02</small>
            <div>
              <strong>ZK Circuit</strong>
              <span>Compact rules compiled into zero-knowledge proof</span>
            </div>
          </div>

          <div className={styles.diagramArrow} aria-hidden="true" />

          <div className={styles.diagramNode}>
            <small>03</small>
            <div>
              <strong>Public Ledger</strong>
              <span>Nullifier & verification status recorded on Midnight</span>
            </div>
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
          &ldquo;Access should prove <span className={styles.gradientText}>eligibility</span> &mdash; not expose <span className={styles.gradientText}>identity</span>.&rdquo;
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
        <h2>
          <span><b>Ready to create</b></span>
          <span className={styles.gradientText}><b>private access?</b></span>
        </h2>
        <p>Create a gate, issue credentials, and let members verify access privately on Midnight.</p>
        <CTAGroup />

        <div className={styles.finalAssurance}>
          <div className={styles.finalAssuranceItem}>
            <Sparkles size={14} aria-hidden="true" />
            <span>Midnight Preprod Ready</span>
          </div>
          <div className={styles.finalAssuranceItem}>
            <ShieldCheck size={14} aria-hidden="true" />
            <span>100% Client-Side ZK</span>
          </div>
          <div className={styles.finalAssuranceItem}>
            <Cpu size={14} aria-hidden="true" />
            <span>Open Source Compact Contracts</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LandingPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.isRevealed);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const revealElements = document.querySelectorAll(`.${styles.reveal}`);
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
