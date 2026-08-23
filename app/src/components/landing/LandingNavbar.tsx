"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ChevronDown, LoaderCircle, LogOut, Menu, WalletCards, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { WalletConnectModal } from "@/components/WalletConnectModal";
import { APP_NETWORK, MidnightClient } from "@/lib/midnight-client";
import type { WalletOption } from "@/lib/midnight-client";
import styles from "./Landing.module.css";

const links = [
  { href: "/#product", label: "Product" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#privacy", label: "Privacy" },
  { href: "/#technology", label: "Technology" },
];

function shortenAddress(address: string) {
  if (address.length <= 14) {
    return address;
  }

  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function LandingNavbar() {
  const clientRef = useRef<MidnightClient | null>(null);
  const walletMenuRef = useRef<HTMLDivElement | null>(null);
  const getClient = () => clientRef.current ?? (clientRef.current = new MidnightClient());
  const [menuOpen, setMenuOpen] = useState(false);
  const [wallets, setWallets] = useState<WalletOption[]>([]);
  const [walletModalOpen, setWalletModalOpen] = useState(false);
  const [walletMenuOpen, setWalletMenuOpen] = useState(false);
  const [walletConnecting, setWalletConnecting] = useState(false);
  const [selectedWalletRdns, setSelectedWalletRdns] = useState<string | null>(null);
  const [selectedWalletName, setSelectedWalletName] = useState("");
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [walletError, setWalletError] = useState("");

  useEffect(() => {
    const client = getClient();
    const updateWallets = () => setWallets(client.getInjectedWallets());
    updateWallets();
    const timer = window.setInterval(updateWallets, 750);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!walletMenuOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!walletMenuRef.current?.contains(event.target as Node)) {
        setWalletMenuOpen(false);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, [walletMenuOpen]);

  const openWalletSelector = () => {
    setMenuOpen(false);
    setWalletMenuOpen(false);
    setWalletError("");
    setWalletModalOpen(true);
  };

  const connectWallet = async (wallet: WalletOption) => {
    setWalletModalOpen(false);
    setWalletConnecting(true);
    setWalletError("");
    try {
      await getClient().disconnect();
      const session = await getClient().connectWallet(APP_NETWORK, wallet);
      setSelectedWalletRdns(wallet.rdns);
      setSelectedWalletName(wallet.name);
      setWalletAddress(session.unshieldedAddress);
    } catch (error) {
      setSelectedWalletRdns(null);
      setSelectedWalletName("");
      setWalletAddress(null);
      setWalletError(MidnightClient.messageFor(error));
    } finally {
      setWalletConnecting(false);
    }
  };

  const disconnectWallet = async () => {
    setWalletMenuOpen(false);
    setWalletError("");
    try {
      await getClient().disconnect();
    } catch (error) {
      setWalletError(MidnightClient.messageFor(error));
    } finally {
      setSelectedWalletRdns(null);
      setSelectedWalletName("");
      setWalletAddress(null);
    }
  };

  const walletLabel = walletConnecting
    ? "Connecting"
    : walletAddress
      ? shortenAddress(walletAddress)
      : "Connect Wallet";

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.brand} onClick={() => setMenuOpen(false)}>
            <span className={styles.brandMark} aria-hidden="true">
              <Image src="/logo.svg" alt="" width={20} height={20} priority />
            </span>
            <span>Kiyora</span>
          </Link>

          <nav className={styles.desktopNav} aria-label="Landing navigation">
            {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          </nav>

          <div className={styles.navActions}>
            <div className={styles.walletMenuWrap} ref={walletMenuRef}>
              <button
                type="button"
                className={`${styles.walletButton} ${walletAddress ? styles.walletConnected : ""}`}
                onClick={walletAddress ? () => setWalletMenuOpen((value) => !value) : openWalletSelector}
                disabled={walletConnecting}
                title={walletAddress ?? undefined}
              >
                {walletConnecting ? <LoaderCircle size={14} className={styles.spinner} aria-hidden="true" /> : walletAddress ? <Check size={14} aria-hidden="true" /> : <WalletCards size={14} aria-hidden="true" />}
                <span>{walletLabel}</span>
                {walletAddress && <ChevronDown size={13} aria-hidden="true" />}
              </button>
              {walletAddress && walletMenuOpen && (
                <div className={styles.walletDropdown}>
                  <small>{selectedWalletName || "Wallet"} connected</small>
                  <button type="button" onClick={() => { void disconnectWallet(); }}>
                    <LogOut size={14} aria-hidden="true" />
                    Disconnect
                  </button>
                </div>
              )}
            </div>
            <Link href="/admin" className={styles.consoleButton}>Open Console</Link>
            <button type="button" className={styles.menuButton} onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-controls="landing-mobile-nav" aria-label={menuOpen ? "Close navigation" : "Open navigation"}>
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav id="landing-mobile-nav" className={styles.mobileNav} aria-label="Mobile landing navigation">
            {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</Link>)}
            <Link href="/admin" onClick={() => setMenuOpen(false)}>Open Console</Link>
            <button type="button" onClick={walletAddress ? () => setWalletMenuOpen((value) => !value) : openWalletSelector}>{walletLabel}</button>
            {walletAddress && <button type="button" className={styles.mobileDisconnect} onClick={() => { void disconnectWallet(); }}>Disconnect</button>}
          </nav>
        )}

        {walletError && <div className={styles.walletError} role="alert">{walletError}</div>}
      </header>

      <WalletConnectModal
        open={walletModalOpen}
        wallets={wallets}
        selectedRdns={selectedWalletRdns}
        onClose={() => setWalletModalOpen(false)}
        onSelect={(wallet) => { void connectWallet(wallet); }}
      />
    </>
  );
}
