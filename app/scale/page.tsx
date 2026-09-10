export default function Scale() {
  const ratings = [
    {
      score: "7",
      title: "Exceptional",
      description:
        "As good as it gets. One of the best brunch experiences we have had.",
      color: "#164E63",
    },
    {
      score: "6.5",
      title: "Outstanding",
      description:
        "An incredible brunch spot with very little holding it back from perfection.",
      color: "#17657A",
    },
    {
      score: "6",
      title: "Excellent",
      description:
        "A fantastic spot that we would happily recommend and return to.",
      color: "#0E7490",
    },
    {
      score: "5.5",
      title: "Great",
      description:
        "Clearly above average and a place we would be excited to visit again.",
      color: "#087F9B",
    },
    {
      score: "5",
      title: "Very Good",
      description:
        "A very enjoyable brunch with plenty to like, but not quite elite.",
      color: "#0891B2",
    },
    {
      score: "4.5",
      title: "Good+",
      description:
        "Better than a standard brunch experience and definitely worth trying.",
      color: "#159AAD",
    },
    {
      score: "4",
      title: "Good",
      description:
        "A solid and enjoyable brunch, but nothing that really separates it.",
      color: "#22A3B5",
    },
    {
      score: "3.5",
      title: "Above Average",
      description:
        "Some strong qualities, but also enough weaknesses to keep it near the middle.",
      color: "#4AA9B4",
    },
    {
      score: "3",
      title: "Average",
      description:
        "Not bad, but not particularly memorable. A middle-of-the-road experience.",
      color: "#6BAEB5",
    },
    {
      score: "2.5",
      title: "Below Average",
      description:
        "There were some positives, but overall we expected more.",
      color: "#86B3B5",
    },
    {
      score: "2",
      title: "Poor",
      description:
        "More negatives than positives. We probably would not return.",
      color: "#A8B9B7",
    },
    {
      score: "1.5",
      title: "Very Poor",
      description:
        "A seriously disappointing brunch with very few redeeming qualities.",
      color: "#929D9C",
    },
    {
      score: "1",
      title: "Terrible",
      description:
        "The bottom of the scale. An experience we would not recommend.",
      color: "#777777",
    },
  ];

  return (
    <>
      <main className="scale-page">
        <div className="scale-container">

          <div className="scale-header">
            <p className="scale-label">OUR RATING SYSTEM</p>

            <h1>The Seven Point Scale</h1>

            <p className="scale-description">
              Every restaurant receives an independent score from each of us.
              Ratings are given in half-point increments from 1 to 7.
            </p>
          </div>

          <div className="rating-list">
            {ratings.map((rating) => (
              <div className="rating-card" key={rating.score}>

                <div
                  className="score-bubble"
                  style={{ backgroundColor: rating.color }}
                >
                  {rating.score}
                </div>

                <div className="rating-info">
                  <h2>{rating.title}</h2>
                  <p>{rating.description}</p>
                </div>

              </div>
            ))}
          </div>

          <div className="final-score">
            <p className="final-label">FINAL SCORE</p>

            <h2>Three Ratings. One Ranking.</h2>

            <p>
              After each visit, our three individual ratings are averaged
              together to create the official Brunch Out of Seven score.
            </p>
          </div>

        </div>
      </main>

      <style>{`
        .scale-page {
          min-height: 100vh;
          background: #dbeaf0;

          /*
            This pushes EVERYTHING below the floating navbar.
          */
          padding: 190px 30px 100px 30px;

          box-sizing: border-box;
        }

        .scale-container {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
        }

        .scale-header {
          text-align: center;
          margin-bottom: 70px;
        }

        .scale-label {
          margin: 0;

          color: #0e7490;

          font-size: 14px;
          font-weight: 800;

          letter-spacing: 4px;
        }

        .scale-header h1 {
          margin: 18px 0 0 0;

          color: #181818;

          font-size: 58px;
          line-height: 1.1;

          font-weight: 800;
        }

        .scale-description {
          max-width: 720px;

          margin: 25px auto 0 auto;

          color: #52656c;

          font-size: 19px;
          line-height: 1.7;
        }

        .rating-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .rating-card {
          display: flex;
          align-items: center;

          gap: 30px;

          padding: 25px;

          background: rgba(255, 255, 255, 0.88);

          border: 1px solid rgba(255, 255, 255, 0.7);
          border-radius: 28px;

          box-shadow:
            0 8px 25px rgba(20, 50, 60, 0.08);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .rating-card:hover {
          transform: translateY(-4px);

          box-shadow:
            0 15px 35px rgba(20, 50, 60, 0.15);
        }

        .score-bubble {
          width: 135px;
          height: 135px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 32px;

          color: white;

          font-size: 42px;
          font-weight: 800;

          box-shadow:
            0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .rating-info h2 {
          margin: 0;

          color: #181818;

          font-size: 27px;
          font-weight: 750;
        }

        .rating-info p {
          margin: 10px 0 0 0;

          color: #5d6a6f;

          font-size: 16px;
          line-height: 1.7;
        }

        .final-score {
          margin-top: 70px;

          padding: 45px;

          text-align: center;

          background: #164e63;

          border-radius: 30px;

          color: white;

          box-shadow:
            0 15px 35px rgba(22, 78, 99, 0.25);
        }

        .final-label {
          margin: 0;

          color: rgba(255, 255, 255, 0.7);

          font-size: 13px;
          font-weight: 800;

          letter-spacing: 4px;
        }

        .final-score h2 {
          margin: 15px 0 0 0;

          font-size: 32px;
        }

        .final-score > p:last-child {
          max-width: 650px;

          margin: 18px auto 0 auto;

          color: rgba(255, 255, 255, 0.8);

          font-size: 16px;
          line-height: 1.7;
        }

        @media (max-width: 700px) {
          .scale-page {
            padding: 150px 18px 70px 18px;
          }

          .scale-header h1 {
            font-size: 42px;
          }

          .rating-card {
            gap: 18px;
            padding: 18px;
          }

          .score-bubble {
            width: 95px;
            height: 95px;

            border-radius: 24px;

            font-size: 32px;
          }

          .rating-info h2 {
            font-size: 21px;
          }

          .rating-info p {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}