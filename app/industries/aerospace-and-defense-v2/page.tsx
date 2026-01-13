import Link from 'next/link';
import { ChevronRight, ArrowRight, ShieldCheck, Activity, Globe, Cpu, Zap, Layers } from 'lucide-react';
import Image from 'next/image';

export default function AerospaceV2Page() {
    return (
        <main className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">

            {/* 
                SECTION 1: IMMERSIVE HERO
                "Starfield" aesthetic, technical typography.
            */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">

                {/* Background Effects */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 z-0"></div>
                <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

                {/* Animated Grid/Starfield Placeholder */}
                <div className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono tracking-widest mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        MISSION CRITICAL SYSTEMS
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                            Aerospace
                        </span>
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                            Reimagined
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                        The next-gen MES for <strong className="text-slate-200 font-medium">mission-critical</strong> discrete assembly.
                        Control <strong className="text-slate-200 font-medium">As-Built</strong> configurations and eliminate <strong className="text-slate-200 font-medium">FOD</strong> risk.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <button className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all overflow-hidden">
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                            <span className="relative flex items-center gap-2">
                                Request Flight Plan
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                        <Link href="/demo" className="text-slate-400 hover:text-white transition-colors font-mono text-sm underline decoration-slate-700 underline-offset-4">
                            Explore Technical Specs
                        </Link>
                    </div>

                </div>
            </section>


            {/* 
                SECTION 2: BENTO GRID (CAPABILITIES)
                Masonry layout, glassmorphism, dark cards.
            */}
            <section className="py-32 bg-slate-950 relative">
                <div className="container mx-auto px-4">

                    <div className="mb-20 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
                            System Capabilities
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Engineered for the demands of modern aerospace. Modular, scalable, and secure.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto grid-flow-dense">

                        {/* Large Card: AS9100 */}
                        <div className="md:col-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-8 hover:border-blue-500/50 transition-colors duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10">
                                <ShieldCheck className="w-10 h-10 text-blue-400 mb-6" />
                                <h3 className="text-2xl font-bold text-white mb-2">Native AS9100D Compliance</h3>
                                <p className="text-slate-400 max-w-md">Automated quality gates, integrated <strong className="text-slate-300">NCR</strong> & <strong className="text-slate-300">CAPA</strong> workflows, and electronic signature capture. Audit-ready, always.</p>
                            </div>
                            {/* Decorative Grid Line */}
                            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] mask-gradient-to-t"></div>
                        </div>

                        {/* Tall Card: Digital Thread */}
                        <div className="md:row-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-8 hover:border-purple-500/50 transition-colors duration-500 flex flex-col justify-between">
                            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div>
                                <Activity className="w-10 h-10 text-purple-400 mb-6" />
                                <h3 className="text-2xl font-bold text-white mb-2">Unbroken Digital Thread</h3>
                                <p className="text-slate-400 text-sm">Reconcile <strong className="text-slate-300">As-Designed</strong> BOMs with <strong className="text-slate-300">As-Built</strong> records. Full genealogy for every tail number.</p>
                            </div>
                            <div className="mt-8 border-t border-white/10 pt-6">
                                <div className="space-y-3 font-mono text-xs text-slate-500">
                                    <div className="flex justify-between"><span>TRACE_ID</span> <span className="text-purple-400">#AX-9920</span></div>
                                    <div className="flex justify-between"><span>STATUS</span> <span className="text-green-400">CLEARED</span></div>
                                    <div className="flex justify-between"><span>TIMESTAMP</span> <span>14:02:55Z</span></div>
                                </div>
                            </div>
                        </div>

                        {/* Standard Card: Supply Chain */}
                        <div className="relative group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-8 hover:border-indigo-500/50 transition-colors duration-500">
                            <Globe className="w-8 h-8 text-indigo-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Global Supply Chain</h3>
                            <p className="text-slate-400 text-sm">Connect with suppliers in real-time. Anti-counterfeit tracking built-in.</p>
                        </div>

                        {/* Standard Card: AI Insights -> Tooling Control */}
                        <div className="relative group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-8 hover:border-cyan-500/50 transition-colors duration-500">
                            <Cpu className="w-8 h-8 text-cyan-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Tooling & FOD Control</h3>
                            <p className="text-slate-400 text-sm">Track tool usage cycles and enforce FOD checklists before closeout.</p>
                        </div>

                        {/* Wide Card: Speed / Velocity */}
                        <div className="md:col-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-8 hover:border-emerald-500/50 transition-colors duration-500 flex items-center justify-between gap-8">
                            <div className="relative z-10">
                                <Zap className="w-10 h-10 text-emerald-400 mb-6" />
                                <h3 className="text-2xl font-bold text-white mb-2">Hyper-Velocity Execution</h3>
                                <p className="text-slate-400 max-w-sm">Deploy changes to the shop floor in seconds, not weeks. Modular architecture removes the upgrade pain.</p>
                            </div>
                            <div className="hidden md:block w-32 h-32 relative">
                                <div className="absolute inset-0 border-4 border-emerald-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                                <div className="absolute inset-2 border-4 border-emerald-500/40 rounded-full border-t-emerald-400 animate-[spin_3s_linear_infinite]"></div>
                                <div className="absolute inset-0 flex items-center justify-center font-mono text-emerald-400 font-bold">10x</div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 
                SECTION 3: LIFECYCLE TRACEABILITY (TIMELINE)
                Vertical timeline with glowing nodes.
            */}
            <section className="py-32 bg-slate-950 relative overflow-hidden">
                {/* Background Beam */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-900/50 to-transparent"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-block px-3 py-1 mb-4 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-mono">
                            DIGITAL GENEALOGY
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
                            From Design to Flight
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-24">

                        {/* Step 1 */}
                        <div className="flex flex-col md:flex-row items-center gap-8 group">
                            <div className="md:w-1/2 md:text-right">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">1. Engineering Release</h3>
                                <p className="text-slate-400">PLM integration imports BOMs and specs automatically. Revision control is locked.</p>
                            </div>
                            <div className="relative">
                                <div className="w-12 h-12 rounded-full bg-slate-900 border border-blue-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10 relative">
                                    <Layers className="w-5 h-5 text-blue-400" />
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                            </div>
                            <div className="md:w-1/2 opacity-50 group-hover:opacity-100 transition-opacity">
                                <div className="font-mono text-xs text-blue-500 bg-blue-950/30 p-4 rounded border border-blue-900/50">
                                    &gt; SYNCING PLM DATA...<br />
                                    &gt; BOM_REV: A.02<br />
                                    &gt; STATUS: OK
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col md:flex-row-reverse items-center gap-8 group">
                            <div className="md:w-1/2 md:text-left">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">2. Material Intake</h3>
                                <p className="text-slate-400">Raw materials are scanned, verified, and linked to the digital thread upon arrival.</p>
                            </div>
                            <div className="relative">
                                <div className="w-12 h-12 rounded-full bg-slate-900 border border-purple-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.5)] z-10 relative">
                                    <Cpu className="w-5 h-5 text-purple-400" />
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse delayed-pulse"></div>
                            </div>
                            <div className="md:w-1/2 opacity-50 group-hover:opacity-100 transition-opacity md:text-right">
                                <div className="font-mono text-xs text-purple-500 bg-purple-950/30 p-4 rounded border border-purple-900/50 inline-block text-left">
                                    &gt; MATERIAL_SCAN<br />
                                    &gt; CERT_MATCH: 100%<br />
                                    &gt; EXPIRY: 2029-01
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col md:flex-row items-center gap-8 group">
                            <div className="md:w-1/2 md:text-right">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">3. Assembly & Test</h3>
                                <p className="text-slate-400">Operators follow guided work instructions. All torque values and measurements are captured.</p>
                            </div>
                            <div className="relative">
                                <div className="w-12 h-12 rounded-full bg-slate-900 border border-cyan-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.5)] z-10 relative">
                                    <Zap className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
                            </div>
                            <div className="md:w-1/2 opacity-50 group-hover:opacity-100 transition-opacity">
                                <div className="font-mono text-xs text-cyan-500 bg-cyan-950/30 p-4 rounded border border-cyan-900/50">
                                    &gt; TORQUE_VAL: 45.2 Nm<br />
                                    &gt; LIMITS: [44.0 - 46.0]<br />
                                    &gt; PASS
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 
                SECTION 4: DEFENSE-GRADE SECURITY
                ITAR, EAR, FedRAMP
            */}
            <section className="py-24 bg-slate-950 relative border-t border-slate-900">
                <div className="container mx-auto px-4">

                    <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

                        <div className="order-2 md:order-1 relative">
                            {/* Visual: Lock/Shield graphic */}
                            <div className="aspect-square max-w-md mx-auto relative rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden flex items-center justify-center group">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 to-transparent"></div>

                                {/* Central Shield */}
                                <div className="relative z-10 w-32 h-32 md:w-48 md:h-48 border-2 border-slate-700 rounded-2xl flex items-center justify-center transform rotate-45 group-hover:rotate-0 transition-transform duration-700 ease-out">
                                    <div className="w-24 h-24 md:w-36 md:h-36 border border-blue-500/30 bg-blue-500/5 backdrop-blur-md rounded-xl flex items-center justify-center">
                                        <ShieldCheck className="w-12 h-12 text-blue-400" />
                                    </div>
                                </div>

                                {/* Orbiting Badges */}
                                <div className="absolute top-8 left-8 bg-slate-800/80 backdrop-blur border border-slate-700 px-3 py-1 rounded text-xs font-mono text-slate-300">ITAR_COMPLIANT</div>
                                <div className="absolute bottom-8 right-8 bg-slate-800/80 backdrop-blur border border-slate-700 px-3 py-1 rounded text-xs font-mono text-slate-300">GOVCLOUD_READY</div>
                                <div className="absolute bottom-12 left-12 bg-red-900/20 backdrop-blur border border-red-900/30 px-3 py-1 rounded text-xs font-mono text-red-400">RESTRICTED_ACCESS</div>
                            </div>
                        </div>

                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Defense-Grade Security. <br />
                                <span className="text-slate-500">Built for the Classified Floor.</span>
                            </h2>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                Deploy with confidence in high-security environments. Railes MES is architected to exceed strict government and defense cybersecurity frameworks.
                            </p>

                            <div className="space-y-6">
                                {/* Feature 1 */}
                                <div className="flex gap-4">
                                    <div className="mt-1 w-10 h-10 rounded-lg bg-blue-900/20 border border-blue-800/50 flex items-center justify-center shrink-0">
                                        <Globe className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">ITAR & EAR Ready</h4>
                                        <p className="text-sm text-slate-400">Strict data access controls based on citizenship and clearance levels. Prevent unauthorized export of technical data.</p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="flex gap-4">
                                    <div className="mt-1 w-10 h-10 rounded-lg bg-indigo-900/20 border border-indigo-800/50 flex items-center justify-center shrink-0">
                                        <ShieldCheck className="w-5 h-5 text-indigo-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">FedRAMP High Baseline</h4>
                                        <p className="text-sm text-slate-400">Available deployment on AWS GovCloud (US) or Azure Government to meet federal cloud security standards.</p>
                                    </div>
                                </div>

                                {/* Feature 3 */}
                                <div className="flex gap-4">
                                    <div className="mt-1 w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                                        <Layers className="w-5 h-5 text-slate-300" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Air-Gapped Deployment</h4>
                                        <p className="text-sm text-slate-400">Optional on-premise deployment for completely isolated secure facilities (SCIFs).</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* 
                SECTION 5: HIGH-IMPACT CTA
                Simple, bold, starfield background.
            */}
            <section className="relative py-32 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-blue-950 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-slate-950 to-slate-950"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                        Ready for Takeoff?
                    </h2>
                    <p className="text-xl text-blue-200/60 mb-12 max-w-xl mx-auto">
                        Join the aerospace pioneers using Railes MES to build the future of flight.
                    </p>
                    <button className="bg-white text-blue-950 hover:bg-blue-50 font-bold px-10 py-5 rounded-full text-lg shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all transform hover:-translate-y-1">
                        Book a Technical Demo
                    </button>
                    <p className="mt-8 text-sm text-slate-500 font-mono">
                        SECURE TRANSMISSION // ENCRYPTED
                    </p>
                </div>
            </section>

        </main >
    );
}
