/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showreel from "./components/Showreel";
import RecentProductions from "./components/RecentProductions";
import CreativeLab from "./components/CreativeLab";
import Awards from "./components/Awards";
import Process from "./components/Process";
import Impact from "./components/Impact";
import Creator from "./components/Creator";
import CTA, { Footer } from "./components/CTA";

export default function App() {
  return (
    <div className="min-h-screen bg-bg-dark selection:bg-brand-cyan/30 selection:text-brand-cyan">
      <Navbar />
      <main>
        <Hero />
        <Showreel />
        <RecentProductions />
        <CreativeLab />
        <Awards />
        <Process />
        <Impact />
        <Creator />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
