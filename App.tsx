import React from 'react';
import { 
  CheckCircle2, 
  Activity, 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Wifi, 
  Server,
  Zap,
  Globe
} from 'lucide-react';
import UtilitiesTile from './components/UtilitiesTile';

// --- STYLES FOR HEX PATTERN BACKGROUND ---
const HexBackground = () => (
  <div 
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundColor: '#020408',
      backgroundImage: `
        radial-gradient(circle at center, rgba(38, 70, 83, 0.15) 0%, transparent 70%),
        url("data:image/svg+xml,%3Csvg width='40' height='69.28' viewBox='0 0 40 69.28' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0l20 11.54v23.09L20 46.17 0 34.63V11.54L20 0zM20 46.17l20 11.54v11.57H0V57.71l20-11.54z' fill='%23264653' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E")
      `,
      backgroundSize: 'cover, 80px 138.56px'
    }}
  />
);

// --- HEADER COMPONENT ---
const Header = () => (
  <header className="w-full border-b border-[#264653]/30 bg-[#020408]/80 backdrop-blur-md px-6 py-4 flex flex-col md:flex-row justify-between items-center z-50 sticky top-0">
    <div className="flex items-center gap-4 mb-4 md:mb-0">
      <div className="w-2 h-8 bg-[#E9C46A] shadow-[0_0_15px_rgba(233,196,106,0.6)]"></div>
      <div>
        <h1 className="text-xl font-bold tracking-tighter uppercase font-display text-white">
          Grid Master <span className="text-[#264653] font-light">//</span> v2.0.4
        </h1>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#2A9D8F] animate-pulse rounded-full"></div>
          <span className="text-[10px] font-mono text-[#2A9D8F] tracking-widest uppercase">System Operational</span>
        </div>
      </div>
    </div>
    <div className="flex gap-8 font-mono text-[11px] text-white/50">
      <div className="flex flex-col">
        <span className="text-[#264653] font-bold uppercase">Uplink Status</span>
        <span className="text-white">ENCRYPTED_SSL</span>
      </div>
      <div className="flex flex-col">
        <span className="text-[#264653] font-bold uppercase">Latency</span>
        <span className="text-white">12.4ms</span>
      </div>
      <div className="flex flex-col">
        <span className="text-[#264653] font-bold uppercase">Timestamp</span>
        <span className="text-white">2023.10.24 // 14:22:01</span>
      </div>
    </div>
  </header>
);

// --- MARQUEE FOOTER COMPONENT ---
const FooterMarquee = () => (
  <div className="fixed bottom-0 left-0 right-0 h-10 border-t border-[#264653]/30 bg-[#020408]/95 backdrop-blur-md z-50 flex items-center px-6 overflow-hidden">
    <div className="flex items-center gap-3 shrink-0 mr-12 border-r border-[#264653]/30 pr-6 h-full">
      <div className="w-2 h-2 bg-[#2A9D8F] rounded-full animate-pulse shadow-[0_0_8px_#2A9D8F]"></div>
      <span className="text-[10px] font-black text-[#2A9D8F] font-mono uppercase tracking-[0.1em]">Stream Active</span>
    </div>
    
    <div className="relative overflow-hidden w-full h-full flex items-center">
        {/* Simple CSS animation implementation for Marquee */}
        <style>
            {`
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-marquee {
                animation: marquee 30s linear infinite;
            }
            `}
        </style>
        <div className="flex gap-12 font-mono text-[10px] text-white/40 whitespace-nowrap animate-marquee">
            <span>NODE_ALPHA: 102.4MW [STABLE]</span>
            <span>NODE_BRAVO: 88.1MW [STABLE]</span>
            <span>NODE_CHARLIE: 145.2MW [PEAK_LOAD]</span>
            <span>NODE_DELTA: 92.0MW [STABLE]</span>
            <span>NODE_ECHO: 11.4MW [IDLE]</span>
            <span>NODE_FOXTROT: 201.9MW [HEAVY]</span>
            <span>GRID_TOTAL: 641.0MW [NORMAL_OPERATIONS]</span>
            {/* Duplicate for infinite loop */}
            <span>NODE_ALPHA: 102.4MW [STABLE]</span>
            <span>NODE_BRAVO: 88.1MW [STABLE]</span>
            <span>NODE_CHARLIE: 145.2MW [PEAK_LOAD]</span>
            <span>NODE_DELTA: 92.0MW [STABLE]</span>
            <span>NODE_ECHO: 11.4MW [IDLE]</span>
            <span>NODE_FOXTROT: 201.9MW [HEAVY]</span>
            <span>GRID_TOTAL: 641.0MW [NORMAL_OPERATIONS]</span>
        </div>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col font-sans bg-[#020408] text-white overflow-x-hidden selection:bg-[#E9C46A] selection:text-black">
      <HexBackground />
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center p-6 md:p-12 relative z-10 pb-24">
        
        {/* REPLACED ORIGINAL GRAPHIC WITH COMPONENT */}
        <div className="w-full max-w-[900px] flex justify-center mb-16">
          <UtilitiesTile className="border border-[#264653]/20 shadow-2xl" />
        </div>

        {/* --- LOWER STATS GRID --- */}
        <div className="w-full max-w-[900px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#264653]/30 bg-[#264653]/5 backdrop-blur-sm">
            
            {/* Stat Box 1 */}
            <div className="p-8 border-r border-[#264653]/30 flex flex-col justify-center">
              <h2 className="text-3xl font-black text-white tracking-tighter uppercase mb-2">Active <br/>Infrastructure</h2>
              <p className="text-white/40 font-mono text-[11px] leading-relaxed">System-wide synchronization of municipal energy distribution assets via high-frequency duplex uplink.</p>
            </div>

            {/* Stat Box 2 */}
            <div className="p-8 border-r border-[#264653]/30 group hover:bg-[#264653]/10 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#2A9D8F] shadow-[0_0_8px_#2A9D8F]"></div>
                <span className="text-[10px] font-mono font-bold text-white/60 uppercase tracking-[0.2em]">Health Status</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-white uppercase tracking-tighter mb-1">99.9%</span>
                <div className="flex items-center gap-2">
                  <span className="text-[#2A9D8F] font-mono text-[11px] font-bold">STABLE_UPTIME</span>
                  <CheckCircle2 className="w-4 h-4 text-[#2A9D8F]" />
                </div>
              </div>
            </div>

            {/* Stat Box 3 */}
            <div className="p-8 group hover:bg-[#264653]/10 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#E9C46A] shadow-[0_0_8px_#E9C46A]"></div>
                <span className="text-[10px] font-mono font-bold text-white/60 uppercase tracking-[0.2em]">Active Nodes</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-white tracking-tighter mb-1">1,284</span>
                <div className="flex items-center gap-2">
                  <span className="text-[#E9C46A] font-mono text-[11px] font-bold">+12 DEPLOYED</span>
                  <Activity className="w-4 h-4 text-[#E9C46A]" />
                </div>
              </div>
            </div>
          </div>

          {/* --- CONTROL BAR --- */}
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center bg-[#020408] border border-[#264653]/30 p-2 pl-6 gap-4">
            <div className="flex gap-4 font-mono text-[10px] text-white/30 uppercase">
              <span className="hover:text-[#E9C46A] cursor-pointer transition-colors">/ Diagnostics</span>
              <span className="hover:text-[#E9C46A] cursor-pointer transition-colors">/ Node Map</span>
              <span className="hover:text-[#E9C46A] cursor-pointer transition-colors">/ Security Logs</span>
            </div>
            <button className="w-full md:w-auto bg-[#7139fb] text-white px-10 py-4 font-black transition-all flex items-center justify-center gap-4 hover:brightness-110 active:scale-95 group">
              <span className="text-[12px] uppercase tracking-widest">Access Control Center</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </main>

      <FooterMarquee />
    </div>
  );
}