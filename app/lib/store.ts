"use client";
import { FUNDRAISER } from "./data";

interface Contribution {
  id: string;
  name: string;
  amount: number;
  message: string;
  timestamp: Date;
}

// We'll use a simple module-level store instead of zustand to avoid SSR issues
let globalRaised = FUNDRAISER.raised;
let globalContributions: Contribution[] = [
  { id: "1", name: "Imran Shah", amount: 25000, message: "Best of luck team! 🔥", timestamp: new Date(Date.now() - 86400000 * 2) },
  { id: "2", name: "Nadia Farooq", amount: 10000, message: "Baku here we come!", timestamp: new Date(Date.now() - 86400000) },
  { id: "3", name: "Kamran Asif", amount: 15000, message: "Can't wait for this trip!", timestamp: new Date(Date.now() - 3600000 * 5) },
];

type Listener = () => void;
const listeners: Set<Listener> = new Set();

function notify() {
  listeners.forEach((l) => l());
}

export function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getRaised() {
  return globalRaised;
}

export function getContributions() {
  return globalContributions;
}

export function addContribution(name: string, amount: number, message: string) {
  const contrib: Contribution = {
    id: Date.now().toString(),
    name,
    amount,
    message,
    timestamp: new Date(),
  };
  globalContributions = [contrib, ...globalContributions];
  globalRaised += amount;
  notify();
  return contrib;
}

export const TARGET = FUNDRAISER.target;
