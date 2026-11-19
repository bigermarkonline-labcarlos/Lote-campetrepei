import { useState } from 'react';
import { CommercialLotPlan } from './components/CommercialLotPlan';
import { CondominiumSecurity } from './components/CondominiumSecurity';
import { EnvironmentAndArchitecture } from './components/EnvironmentAndArchitecture';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ImageModal } from './components/ImageModal';
import { LocationAndContact } from './components/LocationAndContact';
import { Navbar } from './components/Navbar';
import type { MediaAsset } from './data/propertyData';

export default function App() {
  const [inspectedAsset, setInspectedAsset] = useState<MediaAsset | null>(null);

  return (
    <div className="min-h-screen bg-[#F7F7F4] text-[#16241B]">
      <Navbar />
      <main>
        <Hero onInspectImage={setInspectedAsset} />
        <EnvironmentAndArchitecture onInspectImage={setInspectedAsset} />
        <CommercialLotPlan />
        <CondominiumSecurity onInspectImage={setInspectedAsset} />
        <LocationAndContact />
      </main>
      <Footer />
      <ImageModal asset={inspectedAsset} onClose={() => setInspectedAsset(null)} />
    </div>
  );
}
