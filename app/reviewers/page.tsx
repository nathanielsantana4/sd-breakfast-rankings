import Image from "next/image";

export default function reviewers() {
  return (
    <>
      <main className="reviewers-page">

        {/* HEADER */}
        <section className="reviewers-header">
          <p className="eyebrow">MEET THE TEAM</p>

          <h1>The Reviewers</h1>

          <p className="intro">
            Three friends. One brunch table. A lot of opinions.
          </p>
        </section>

        {/* GROUP PHOTO */}
        <section className="photo-container">
          <Image
            src="/reviewers.jpg"
            alt="Brunch Out of Seven reviewers"
            width={1600}
            height={1067}
            className="group-photo"
            priority
          />

          <div className="photo-gradient"></div>

          <div className="photo-caption">
            <h2>Brunch Out of Seven</h2>
            <p>San Diego, California</p>
          </div>
        </section>

        {/* REVIEWERS */}
        <section className="reviewer-grid">

          {/* MALCOLM */}
          <article className="reviewer-card">
            <p className="reviewer-number">01</p>

            <h2>Malcolm Cleare</h2>

            <p className="role">Brunch Critic</p>

            <div className="average">
              <span>Average Rating</span>
              <strong>4.93 / 7</strong>
            </div>

            <p className="description">
              The toughest grader of the group so far. Malcolm&apos;s ratings
              tend to sit slightly below the group average.
            </p>
          </article>

          {/* AMARISSA */}
          <article className="reviewer-card">
            <p className="reviewer-number">02</p>

            <h2>Amarissa Ailey</h2>

            <p className="role">Brunch Critic</p>

            <div className="average">
              <span>Average Rating</span>
              <strong>5.09 / 7</strong>
            </div>

            <p className="description">
              Sitting right in the middle of the group, Amarissa provides a
              balanced perspective across the restaurants we visit.
            </p>
          </article>

          {/* NATHANIEL */}
          <article className="reviewer-card">
            <p className="reviewer-number">03</p>

            <h2>Nathaniel Santana</h2>

            <p className="role">Brunch Critic</p>

            <div className="average">
              <span>Average Rating</span>
              <strong>5.37 / 7</strong>
            </div>

            <p className="description">
              Currently the most generous reviewer of the three, with the
              highest average score across the restaurants we&apos;ve rated.
            </p>
          </article>

        </section>
      </main>

      <style>{`
        .reviewers-page {
          min-height: 100vh;
          background: #dbeaf0;
          padding: 170px 30px 100px;
          box-sizing: border-box;
        }

        .reviewers-header {
          max-width: 900px;
          margin: 0 auto 55px;
          text-align: center;
        }

        .eyebrow {
          margin: 0;
          color: #0e7490;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 4px;
        }

        .reviewers-header h1 {
          margin: 15px 0 0;
          color: #181818;
          font-size: 64px;
          line-height: 1;
          font-weight: 800;
        }

        .intro {
          margin: 24px auto 0;
          color: #52656c;
          font-size: 20px;
          line-height: 1.6;
        }

        .photo-container {
          position: relative;

          width: 100%;
          max-width: 1200px;
          height: 620px;

          margin: 0 auto;

          overflow: hidden;

          border-radius: 34px;

          box-shadow:
            0 25px 60px rgba(20, 50, 60, 0.22);
        }

        .group-photo {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
          object-position: center;
        }

        .photo-gradient {
          position: absolute;
          inset: 0;

          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.62),
            rgba(0, 0, 0, 0.05) 55%,
            transparent
          );
        }

        .photo-caption {
          position: absolute;

          left: 38px;
          bottom: 32px;

          color: white;
        }

        .photo-caption h2 {
          margin: 0;

          font-size: 34px;
          font-weight: 750;
        }

        .photo-caption p {
          margin: 6px 0 0;

          color: rgba(255, 255, 255, 0.8);

          font-size: 15px;
        }

        .reviewer-grid {
          width: 100%;
          max-width: 1200px;

          margin: 42px auto 0;

          display: grid;
          grid-template-columns: repeat(3, 1fr);

          gap: 22px;
        }

        .reviewer-card {
          padding: 34px;

          background: rgba(255, 255, 255, 0.88);

          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 28px;

          box-shadow:
            0 10px 30px rgba(20, 50, 60, 0.08);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .reviewer-card:hover {
          transform: translateY(-6px);

          box-shadow:
            0 18px 40px rgba(20, 50, 60, 0.15);
        }

        .reviewer-number {
          margin: 0;

          color: #0e7490;

          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .reviewer-card h2 {
          margin: 14px 0 0;

          color: #181818;

          font-size: 28px;
          font-weight: 750;
        }

        .role {
          margin: 6px 0 0;

          color: #0e7490;

          font-size: 14px;
          font-weight: 700;
        }

        .average {
          margin-top: 28px;
          padding: 18px 20px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          background: #e9f3f6;

          border-radius: 18px;
        }

        .average span {
          color: #65777e;

          font-size: 12px;
          font-weight: 600;
        }

        .average strong {
          color: #164e63;

          font-size: 21px;
        }

        .description {
          margin: 24px 0 0;

          color: #5d6a6f;

          font-size: 15px;
          line-height: 1.7;
        }

        @media (max-width: 900px) {
          .reviewers-page {
            padding: 145px 18px 70px;
          }

          .reviewers-header h1 {
            font-size: 48px;
          }

          .photo-container {
            height: 470px;
          }

          .reviewer-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .photo-container {
            height: 400px;
          }

          .photo-caption {
            left: 24px;
            bottom: 24px;
          }

          .photo-caption h2 {
            font-size: 27px;
          }
        }
      `}</style>
    </>
  );
}