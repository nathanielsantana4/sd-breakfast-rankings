import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="glass-navbar">

        <Link href="/" className="brand">
          Brunch Out of Seven
        </Link>

        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/reviewers">Reviewers</Link>
          <Link href="/scale">Scale</Link>
          <Link href="/specialties">Specialties</Link>
          <Link href="/about">About</Link>
        </div>

        <Link href="/rankings" className="ranking-button">
          Rankings
        </Link>

      </nav>

      <style>{`
        .glass-navbar {
          position: fixed;
          top: 22px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;

          width: 90%;
          max-width: 1000px;
          height: 58px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 6px 8px 6px 20px;

          background: rgba(10, 20, 25, 0.32);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);

          border: 1px solid rgba(255, 255, 255, 0.28);
          border-radius: 999px;

          box-shadow:
            0 10px 35px rgba(0, 0, 0, 0.20),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        .brand {
          color: white;
          text-decoration: none;

          font-size: 15px;
          font-weight: 600;

          white-space: nowrap;

          transition: opacity 0.25s ease;
        }

        .brand:hover {
          opacity: 0.75;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .nav-links a {
          color: rgba(255, 255, 255, 0.82);
          text-decoration: none;

          font-size: 13px;
          font-weight: 500;

          padding: 9px 12px;

          border-radius: 999px;

          transition:
            background 0.25s ease,
            color 0.25s ease,
            transform 0.25s ease;
        }

        .nav-links a:hover {
          background: rgba(255, 255, 255, 0.13);
          color: white;
          transform: translateY(-1px);
        }

        .ranking-button {
          background: rgba(255, 255, 255, 0.95);
          color: #111;

          text-decoration: none;

          font-size: 13px;
          font-weight: 700;

          padding: 11px 19px;

          border-radius: 999px;

          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);

          transition:
            transform 0.25s ease,
            background 0.25s ease;
        }

        .ranking-button:hover {
          transform: scale(1.04);
          background: white;
        }

        @media (max-width: 850px) {
          .nav-links {
            display: none;
          }

          .glass-navbar {
            width: calc(100% - 30px);
          }

          .brand {
            font-size: 13px;
          }
        }
      `}</style>
    </>
  );
}