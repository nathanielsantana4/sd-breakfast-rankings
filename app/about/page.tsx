export default function About() {
  return (
    <main className="min-h-screen bg-[#FFF8EE] px-6 py-20">
      <div className="max-w-3xl mx-auto">

        <p className="text-orange-600 font-bold tracking-widest">
          ABOUT US
        </p>

        <h1 className="mt-3 text-5xl font-black text-stone-900">
          Brunch Out of Seven
        </h1>

        <p className="mt-6 text-xl leading-8 text-stone-600">
          We&apos;re three friends exploring breakfast and brunch spots
          throughout San Diego and rating every place on a seven-point scale.
        </p>

        <p className="mt-5 text-xl leading-8 text-stone-600">
          After each meal, all three of us give our own score. Those scores are
          combined to create the official Brunch Out of Seven rating.
        </p>

        <div className="mt-12 rounded-3xl bg-white p-8 shadow-md">
          <h2 className="text-3xl font-bold text-stone-900">
            Why Seven?
          </h2>

          <p className="mt-4 text-lg leading-8 text-stone-600">
            Seven gives us more room to separate a good breakfast from a great
            one without making the system overly complicated.
          </p>
        </div>

      </div>
    </main>
  );
}