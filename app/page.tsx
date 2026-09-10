import HandwrittenLogo from "./components/HandwrittenLogo";
import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* FIRST SCREEN */}
      <section
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/san-diego-beach.png')",
        }}
      >
        <div className="min-h-screen bg-black/25 flex flex-col items-center justify-center text-center px-6">
          <HandwrittenLogo />

          <p className="mt-4 text-xl md:text-2xl text-white drop-shadow-lg">
            Three friends. Seven points. One breakfast ranking.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/rankings"
              className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-stone-900"
            >
              View Rankings
            </Link>

            <Link
  href="/reviewers"
  className="rounded-xl border border-white/70 bg-black/20 px-6 py-3 font-semibold text-white"
>
  Meet the Reviewers
</Link>
          </div>

          <div className="absolute bottom-8 text-white text-3xl animate-bounce">
            ↓
          </div>
        </div>
      </section>

      {/* SECOND SCREEN */}
      <section className="min-h-screen bg-[#FFF8EE] flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-stone-900">
            Current Rankings
          </h2>

          <p className="mt-4 text-xl text-stone-600">
            See every breakfast spot we've rated in San Diego.
          </p>
        </div>
      </section>

    </main>
  );
}