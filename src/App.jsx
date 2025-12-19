import { useState } from 'react';

// Icons
const AppleLogo = () => (
  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-.35-.16-1-.23-1.69-.23-1.01 0-1.87.18-2.58.53-.88.42-2.17.65-3.1 0-1.07-.73-2.14-2.14-2.14-4.5 0-3.32 1.83-5.22 4.41-5.22 1.15 0 2.03.54 2.7.54.58 0 1.63-.56 2.87-.56 1.18 0 2.06.49 2.65.92-1.35.8-2.22 2.37-2.22 3.86 0 2.89 2.37 4.15 2.5 4.22-.05.15-.35 1.17-1.32 2.63l-1 .44zM14.93 6.64c.59-.72 1.02-1.74 1.02-2.63 0-.15-.01-.29-.03-.43-1.01.04-2.25.68-2.95 1.52-.59.7-1.07 1.77-1.07 2.62 0 .14.02.28.04.42.97.07 2.33-.53 2.99-1.5z" />
  </svg>
);

const GooglePlayLogo = () => (
  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4.14 0C3.39 0 2.7.35 2.25.96L12.56 11.27 4.14 0zm-2.8 1.96C1.09 2.6.96 3.32.96 4.13v15.74c0 .81.13 1.53.38 2.17L11.83 11.53 1.34 1.96zm12.3 10.3l-5.69 5.69 8.52-4.9c1.68-.97 1.68-2.55 0-3.52l-2.83-1.27z" />
  </svg>
);

const AppGalleryLogo = () => (
  <svg className="w-6 h-6 mr-2" fill="#E60012" viewBox="0 0 24 24" aria-hidden="true">
    {/* Simplified Huawei Logo Placeholder */}
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z" fill="white" />
  </svg>
);

function App() {
  return (
    <div className="min-h-screen bg-diski-dark text-white font-sans selection:bg-diski-green selection:text-white">
      {/* Navigation */}
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-center items-center relative">
          <div className="h-12 w-auto">
            <img src="/logo.png" alt="DiskiChat Logo" className="h-full w-auto object-contain" />
          </div>
          <a href="#download" className="hidden md:flex absolute right-6 bg-diski-green text-white px-6 py-2 rounded-full font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.5)]">
            Get the App
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-diski-purple rounded-full blur-[128px] opacity-30 animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-diski-green rounded-full blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left z-10">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              The Ultimate <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-diski-green to-emerald-300">Second Screen</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-lg mx-auto md:mx-0">
              For the love of the game. Join the banter, place your bets, and follow live matches with thousands of other South African soccer fans.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="flex items-center justify-center px-6 py-3 bg-white text-black rounded-xl hover:scale-105 transition-transform font-bold">
                <AppleLogo />
                <span>App Store</span>
              </button>
              <button className="flex items-center justify-center px-6 py-3 bg-white text-black rounded-xl hover:scale-105 transition-transform font-bold">
                <GooglePlayLogo />
                <span>Google Play</span>
              </button>
              {/* AppGallery Button */}
              <button className="flex items-center justify-center px-6 py-3 bg-white text-black rounded-xl hover:scale-105 transition-transform font-bold">
                <AppGalleryLogo />
                <span>AppGallery</span>
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center md:justify-start gap-6 text-sm text-slate-400">
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-diski-green mr-2 shadow-[0_0_8px_#10b981]"></span>
                Live Scores
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-diski-purple mr-2 shadow-[0_0_8px_#6d28d9]"></span>
                Community Chat
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-orange-500 mr-2 shadow-[0_0_8px_#f97316]"></span>
                Betting
              </div>
            </div>
          </div>

          <div className="md:w-1/2 mt-16 md:mt-0 relative group">
            {/* Phone Mockup Placeholder */}
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
              <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800 relative">
                {/* Simulated Screen Content */}
                {/* Simulated Screen Content */}
                <div className="bg-diski-dark w-full h-full flex flex-col">
                  <div className="bg-diski-surface h-16 flex items-end p-4 shadow-lg z-10 border-b border-white/5">
                    <div className="font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 bg-diski-green rounded-full animate-pulse"></span>
                      Live Match
                    </div>
                  </div>
                  <div className="flex-1 p-4 space-y-4 overflow-hidden bg-gradient-to-b from-diski-dark to-[#050b14]">
                    <div className="glass p-4 rounded-xl border border-white/10 bg-diski-surface/50">
                      <div className="text-xs text-diski-green font-bold mb-2 flex justify-between">
                        <span>LIVE • 45'</span>
                        <span className="text-white/50">PSL</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg">Chiefs</span>
                        <div className="px-3 py-1 bg-diski-dark rounded-md border border-white/10 font-mono text-xl text-diski-green">1 - 0</div>
                        <span className="font-bold text-lg">Pirates</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-diski-surface p-3 rounded-2xl text-sm rounded-tl-none border border-white/5">
                        <span className="text-diski-purple font-bold text-xs block mb-1">@Lebo_M</span>
                        What a goal! Shabba requires respect! 🔥
                      </div>
                      <div className="bg-diski-green/20 p-3 rounded-2xl text-sm rounded-tr-none text-right ml-auto border border-diski-green/20">
                        <span className="text-diski-green font-bold text-xs block mb-1">You</span>
                        Absolutely electric atmosphere!
                      </div>
                      <div className="bg-diski-surface p-3 rounded-2xl text-sm rounded-tl-none border border-white/5">
                        <span className="text-orange-400 font-bold text-xs block mb-1">@BetKing</span>
                        Odds shift: Chiefs to win now 1.15
                      </div>
                    </div>
                  </div>
                  {/* Tab Bar */}
                  <div className="h-16 bg-diski-surface border-t border-white/5 flex justify-around items-center text-slate-400">
                    <div className="text-diski-green flex flex-col items-center gap-1">
                      <div className="w-5 h-5 bg-white/10 rounded-full"></div>
                      <span className="text-[10px]">Home</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-5 h-5 bg-white/5 rounded-full"></div>
                      <span className="text-[10px]">Fixtures</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-5 h-5 bg-white/5 rounded-full"></div>
                      <span className="text-[10px]">Chat</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-5 h-5 bg-white/5 rounded-full"></div>
                      <span className="text-[10px]">Profile</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute top-1/2 left-0 -translate-x-12 translate-y-12 glass p-4 rounded-xl animate-bounce border border-diski-green/30" style={{ animationDuration: '3s' }}>
              <div className="text-diski-green font-bold flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                Live Stats
              </div>
              <div className="text-sm mt-1 text-slate-300">Possession: 60% - 40%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">No More Scattered Platforms</h2>
            <p className="text-slate-400 text-lg">Everything you need in one place.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-700 to-slate-800 border border-slate-600 hover:border-emerald-500 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 mb-6 text-2xl">
                💬
              </div>
              <h3 className="text-xl font-bold mb-4">Match Day Banter</h3>
              <p className="text-slate-400">
                Join dedicated rooms for every PSL match. Debate calls, celebrate goals, and connect with fans who share your passion.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-700 to-slate-800 border border-slate-600 hover:border-purple-500 transition-colors">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mb-6 text-2xl">
                💰
              </div>
              <h3 className="text-xl font-bold mb-4">Integrated Betting</h3>
              <p className="text-slate-400">
                See live odds updates without leaving the chat. Smarter betting with community insights at your fingertips.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-700 to-slate-800 border border-slate-600 hover:border-orange-500 transition-colors">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 mb-6 text-2xl">
                🏆
              </div>
              <h3 className="text-xl font-bold mb-4">Rankings & Stats</h3>
              <p className="text-slate-400">
                Track team performance, player stats, and your own prediction rankings within the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Download CTA */}
      <section id="download" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-900/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8">Ready to join the conversation?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center px-8 py-4 bg-white text-black rounded-xl hover:scale-105 transition-transform font-bold text-lg">
              <AppleLogo />
              <span>App Store</span>
            </button>
            <button className="flex items-center justify-center px-8 py-4 bg-white text-black rounded-xl hover:scale-105 transition-transform font-bold text-lg">
              <GooglePlayLogo />
              <span>Google Play</span>
            </button>
            <button className="flex items-center justify-center px-8 py-4 bg-white text-black rounded-xl hover:scale-105 transition-transform font-bold text-lg">
              <AppGalleryLogo />
              <span>AppGallery</span>
            </button>
          </div>
          <p className="mt-8 text-slate-500 text-sm">
            © 2025 DiskiChat. All Data Rights Reserved.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
