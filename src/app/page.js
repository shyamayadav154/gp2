import LoginNav from "@/components/common/LoginNav";
import Link from "next/link";
import {
  FiMapPin,
  FiActivity,
  FiShield,
  FiPieChart,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

export default async function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-500 selection:text-white overflow-x-hidden">
      {/* 🧭 NAVIGATION WRAPPER */}
      <LoginNav />

      {/* ==================== 🚀 HERO SECTION ==================== */}
      <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
          {/* Tagline Badge */}
          <div className="mx-auto lg:mx-0 flex items-center gap-2 bg-emerald-50 border border-emerald-200/60 px-3 py-1.5 rounded-full w-fit">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700">
              MERN & Prisma Powered Geofencing
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-800 leading-[1.1]">
            Automated Shift Logs with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-600">
              Haversine Validation
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
            GeoPulse delivers foolproof workplace compliance monitoring. Workers
            can only punch their shifts if their live browser coordinates match
            the exact anchor parameters configured inside the database.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center mt-2">
            <Link
              href="/"
              className="w-full sm:w-auto rounded-xl bg-slate-900 hover:bg-slate-800 px-6 py-3 font-bold text-xs uppercase tracking-wider text-white shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 group cursor-pointer"
            >
              Get Started Console
              <FiArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={14}
              />
            </Link>

            <Link
              href="/"
              className="w-full sm:w-auto rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-6 py-3 font-bold text-xs uppercase tracking-wider text-slate-600 transition shadow-sm text-center cursor-pointer"
            >
              Explore Architecture
            </Link>
          </div>
        </div>

        {/* Hero Decorative Visual Panel */}
        <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[400px] h-[350px] bg-gradient-to-tr from-indigo-500/10 to-emerald-500/10 rounded-3xl border border-slate-200 p-6 flex flex-col justify-between shadow-xl overflow-hidden backdrop-blur-sm">
            {/* Embedded Mock Mini Card */}
            <div className="bg-white/90 border border-slate-100 p-4 rounded-2xl shadow-sm flex items-center justify-between w-full z-10">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                <div>
                  <p className="text-xs font-bold text-slate-800">
                    Sahil Solanki
                  </p>
                  <p className="text-[10px] font-mono text-slate-400">
                    Delhi Operational Grid
                  </p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-md text-[9px] font-black uppercase bg-emerald-50 text-emerald-700 border border-emerald-200/30">
                CLOCKED IN
              </span>
            </div>

            {/* Simulated Radar Matrix Grid Lines */}
            <div className="absolute inset-0 border-2 border-dashed border-slate-300/40 rounded-full scale-70 animate-spin [animation-duration:30s]" />
            <div className="absolute inset-0 border border-dashed border-slate-300/30 rounded-full scale-110 animate-spin [animation-duration:45s]" />

            <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-lg flex items-center justify-between w-full mt-auto z-10">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                  Active Geofence lock
                </span>
                <p className="text-xs font-black text-white">
                  500M Secure Perimeter
                </p>
              </div>
              <FiShield className="text-emerald-400" size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 🛠️ CORE VALUE PROPOSITION FEATURES ==================== */}
      <section
        id="features"
        className="py-20 bg-white border-t border-b border-slate-200/60 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="text-center flex flex-col gap-2 max-w-2xl mx-auto">
            <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
              System Capabilities
            </span>
            <h2 className="text-3xl font-black tracking-tight text-slate-800 sm:text-4xl">
              Asli-Time Tracking Modules
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Geofencing system components custom built using the Next.js App
              Router ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-slate-50/60 border border-slate-200/60 p-6 rounded-2xl flex flex-col gap-4 hover:border-slate-300 transition shadow-sm">
              <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 w-fit">
                <FiMapPin size={20} />
              </div>
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight">
                Leaflet Radar Core
              </h3>
              <p className="text-xs font-medium text-slate-500 leading-relaxed">
                Managers can drop custom location coordinates anchors via
                Nominatim OSM lookup APIs directly onto an interactive map
                panel.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50/60 border border-slate-200/60 p-6 rounded-2xl flex flex-col gap-4 hover:border-slate-300 transition shadow-sm">
              <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 w-fit">
                <FiActivity size={20} />
              </div>
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight">
                Live Roster Streams
              </h3>
              <p className="text-xs font-medium text-slate-500 leading-relaxed">
                Calculates live workers allocation status mix using explicit
                model mapping layers to separate `CLOCKEDIN`, `CLOCKEDOUT`, and
                `OFF_DUTY` logs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50/60 border border-slate-200/60 p-6 rounded-2xl flex flex-col gap-4 hover:border-slate-300 transition shadow-sm">
              <div className="p-3 bg-amber-50 rounded-xl text-amber-600 w-fit">
                <FiShield size={20} />
              </div>
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight">
                Access Credentials Block
              </h3>
              <p className="text-xs font-medium text-slate-500 leading-relaxed">
                Centralized switch to toggle clearance nodes dynamically between
                `GRANTED` and `DENIED` status streams on the employee
                collection.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-50/60 border border-slate-200/60 p-6 rounded-2xl flex flex-col gap-4 hover:border-slate-300 transition shadow-sm">
              <div className="p-3 bg-rose-50 rounded-xl text-rose-700 w-fit">
                <FiPieChart size={20} />
              </div>
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight">
                Chart.js Data Mix
              </h3>
              <p className="text-xs font-medium text-slate-500 leading-relaxed">
                Compiles 7-day cyclical shift averages and real-time active
                rosters into clean Doughnut visual graphs directly via state
                hooks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 🛠️ ARCHITECTURE FLOW MATRIX ==================== */}
      <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-black tracking-tight text-slate-800 uppercase">
              API Execution Flow
            </h2>
            <p className="text-xs text-slate-400 font-medium">
              How coordinates telemetry gets verified and structured under the
              hood.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-start p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <FiCheckCircle
                className="text-emerald-500 shrink-0 mt-0.5"
                size={16}
              />
              <div>
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                  1. Role & Session Validation
                </h4>
                <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">
                  Auth0 contexts protect the endpoint targets. Server pipelines
                  run unique database checks to confirm active roles before
                  accessing parameters.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <FiCheckCircle
                className="text-emerald-500 shrink-0 mt-0.5"
                size={16}
              />
              <div>
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                  2. Haversine Math Perimeter Check
                </h4>
                <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">
                  The system queries the active `LocationPerimeter` model. Earth
                  curvature formulas compare user live coordinates against the
                  manager radius meter thresholds, preventing spoof requests.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <FiCheckCircle
                className="text-emerald-500 shrink-0 mt-0.5"
                size={16}
              />
              <div>
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                  3. Descending Relational Commits
                </h4>
                <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">
                  Validated data creates fresh `Shift` rows via Prisma ORM
                  blocks. Entries are fetched using an implicit `clockIn:
                  "desc"` pattern so index 0 always exposes the latest
                  operational state.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
