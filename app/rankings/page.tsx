"use client";

import { useState } from "react";

type Restaurant = {
  name: string;
  total: number;
  malcolm: number | null;
  ami: number | null;
  nathaniel: number | null;
  description: string;
  photos: string[];
};

export default function Rankings() {
  const [openRestaurant, setOpenRestaurant] = useState<string | null>(null);

  const restaurants: Restaurant[] = [
    {
      name: "Trails Eatery",
      total: 5,
      malcolm: 5,
      ami: 5,
      nathaniel: 5,
      description:
        "A solid San Diego breakfast spot with a classic neighborhood feel.",
      photos: [],
    },
    {
      name: "Caroline’s",
      total: 5.33,
      malcolm: 5,
      ami: 5,
      nathaniel: 6,
      description:
        "A scenic breakfast spot with ocean views and a relaxed La Jolla atmosphere.",
      photos: [],
    },
    {
      name: "Broken Yolk",
      total: 3.33,
      malcolm: 3,
      ami: 3,
      nathaniel: 4,
      description:
        "A traditional breakfast restaurant with a large menu of familiar favorites.",
      photos: [],
    },
    {
      name: "Sugar and Scribe",
      total: 6.5,
      malcolm: 6.5,
      ami: 6.5,
      nathaniel: 6.5,
      description:
        "One of our highest-rated brunch experiences so far, with standout food and a memorable overall experience.",
      photos: [],
    },
    {
      name: "Brockton Villa Restaurant",
      total: 5.33,
      malcolm: 5.5,
      ami: 5,
      nathaniel: 5.5,
      description:
        "A La Jolla breakfast destination combining coastal views with a unique historic setting.",
      photos: [],
    },
    {
      name: "Blue Whale",
      total: 4,
      malcolm: 4,
      ami: 4,
      nathaniel: 4,
      description:
        "A middle-of-the-pack experience for the group, earning the exact same score from all three reviewers.",
      photos: [],
    },
    {
      name: "IHOP",
      total: 4.67,
      malcolm: 5,
      ami: 4,
      nathaniel: 5,
      description:
        "The familiar breakfast chain provides a useful benchmark for comparing the independent restaurants we visit.",
      photos: [],
    },
    {
      name: "Swami’s",
      total: 5.5,
      malcolm: 5.5,
      ami: 5.5,
      nathaniel: 5.5,
      description:
        "A consistently good breakfast experience that earned complete agreement from all three reviewers.",
      photos: [],
    },
    {
      name: "Stratford Court Cafe",
      total: 6.18,
      malcolm: 6,
      ami: 6,
      nathaniel: 6.5,
      description:
        "One of our stronger-rated breakfast spots, scoring above six from the group.",
      photos: [],
    },
    {
      name: "O'Brien's Boulangerie",
      total: 5.33,
      malcolm: 5.5,
      ami: 5,
      nathaniel: 5.5,
      description:
        "A well-rounded breakfast experience that landed comfortably above the midpoint of our scale.",
      photos: [],
    },
    {
      name: "Morning Glory (Little Italy)",
      total: 6,
      malcolm: 6,
      ami: 6,
      nathaniel: 6,
      description:
        "A memorable Little Italy brunch destination that received a unanimous six from the group.",
      photos: [],
    },
    {
      name: "The Cottage (La Jolla)",
      total: 5.67,
      malcolm: 6,
      ami: 5.5,
      nathaniel: 5.5,
      description:
        "A popular La Jolla breakfast spot with a comfortable atmosphere and strong overall showing.",
      photos: [],
    },
    {
      name: "Denny’s",
      total: 4,
      malcolm: 4,
      ami: null,
      nathaniel: 4,
      description:
        "A classic diner benchmark. Two reviewers scored this visit while Ami did not submit a rating.",
      photos: [],
    },
    {
      name: "Patty’s Cafe",
      total: 4.67,
      malcolm: 5,
      ami: 4,
      nathaniel: 5,
      description:
        "A straightforward cafe experience with generally positive but mixed scores.",
      photos: [],
    },
    {
      name: "Destiny Coast",
      total: 5.33,
      malcolm: 5,
      ami: 5,
      nathaniel: 6,
      description:
        "A good overall breakfast showing, with Nathaniel rating it slightly higher than the rest of the group.",
      photos: [],
    },
    {
      name: "Early Birds",
      total: 5.5,
      malcolm: 5.5,
      ami: 5.5,
      nathaniel: 5.5,
      description:
        "A unanimously rated 5.5 and one of the most agreed-upon restaurants on the list.",
      photos: [],
    },
    {
      name: "Great Maple",
      total: 6.18,
      malcolm: 6.5,
      ami: 5.5,
      nathaniel: 6.5,
      description:
        "A high-scoring brunch destination with especially strong ratings from Malcolm and Nathaniel.",
      photos: [],
    },
    {
      name: "Cocina",
      total: 4.67,
      malcolm: 5,
      ami: 5,
      nathaniel: 4,
      description:
        "A mixed but respectable experience, landing just under five overall.",
      photos: [],
    },
    {
      name: "Dunedin",
      total: 6.33,
      malcolm: 6.5,
      ami: 6,
      nathaniel: 6.5,
      description:
        "One of our top-rated brunch spots, with all three reviewers scoring it six or higher.",
      photos: [],
    },
    {
      name: "Trust",
      total: 5.5,
      malcolm: 5.5,
      ami: 5.5,
      nathaniel: 5.5,
      description:
        "Another rare unanimous rating, earning exactly 5.5 from every reviewer.",
      photos: [],
    },
    {
      name: "Leilani’s Cafe",
      total: 5.5,
      malcolm: 6,
      ami: 5,
      nathaniel: 5.5,
      description:
        "A good overall showing with Malcolm giving the strongest score of the three.",
      photos: [],
    },
    {
      name: "Farmers Table",
      total: 5.75,
      malcolm: null,
      ami: 5.5,
      nathaniel: 6,
      description:
        "A strong breakfast showing based on Ami and Nathaniel's ratings.",
      photos: [],
    },
    {
      name: "The Vibe",
      total: 5.18,
      malcolm: 5.5,
      ami: 5,
      nathaniel: 5,
      description:
        "A good but not elite breakfast experience with fairly consistent scores.",
      photos: [],
    },
    {
      name: "A Louest",
      total: 6,
      malcolm: 6,
      ami: 6,
      nathaniel: 6,
      description:
        "A unanimous six out of seven, putting it among our strongest-rated brunch experiences.",
      photos: [],
    },
    {
      name: "Between Us",
      total: 4.83,
      malcolm: 4.5,
      ami: 4.5,
      nathaniel: 5.5,
      description:
        "A more divided review, with Nathaniel enjoying the experience more than Malcolm and Ami.",
      photos: [],
    },
    {
      name: "Vincenzo",
      total: 2.67,
      malcolm: 2,
      ami: 3,
      nathaniel: 3,
      description:
        "Currently one of the lowest-rated restaurants on our list.",
      photos: [],
    },
    {
      name: "Cody’s",
      total: 4.16,
      malcolm: 4,
      ami: 4,
      nathaniel: 4.5,
      description:
        "A fairly consistent middle-to-lower score from all three reviewers.",
      photos: [],
    },
    {
      name: "Little Frenchie’s",
      total: 6,
      malcolm: 6,
      ami: 6,
      nathaniel: 6,
      description:
        "Another unanimous six and one of our most consistently praised spots.",
      photos: [],
    },
    {
      name: "Fay’s Diner",
      total: 6.18,
      malcolm: 6.5,
      ami: 6,
      nathaniel: 6,
      description:
        "One of the highest-rated diners on our list with strong scores across the board.",
      photos: [],
    },
    {
      name: "Sunny Boy Biscuits Co",
      total: 5.5,
      malcolm: 5.5,
      ami: 5.5,
      nathaniel: 5.5,
      description:
        "A completely unanimous 5.5 from all three reviewers.",
      photos: [],
    },
  ];

  const rankedRestaurants = [...restaurants].sort(
    (a, b) => b.total - a.total
  );

  function displayScore(score: number | null) {
    return score === null ? "N/A" : score.toString();
  }

  function toggleRestaurant(name: string) {
    setOpenRestaurant(openRestaurant === name ? null : name);
  }

  return (
    <>
      <main className="rankings-page">
        <div className="rankings-container">

          <section className="rankings-header">
            <p className="eyebrow">THE OFFICIAL LIST</p>

            <h1>Brunch Rankings</h1>

            <p className="header-description">
              Every breakfast and brunch spot we&apos;ve rated in San Diego,
              ranked by our combined score.
            </p>

            <div className="restaurant-count">
              {restaurants.length} spots rated
            </div>
          </section>

          <section className="ranking-list">
            {rankedRestaurants.map((restaurant, index) => {
              const isOpen = openRestaurant === restaurant.name;

              return (
                <article
                  className={`restaurant-wrapper ${
                    index < 3 ? "top-three" : ""
                  }`}
                  key={restaurant.name}
                >
                  <button
                    className="ranking-card"
                    onClick={() => toggleRestaurant(restaurant.name)}
                    aria-expanded={isOpen}
                  >
                    <div className="rank">
                      {index + 1}
                    </div>

                    <div className="restaurant-info">
                      <h2>{restaurant.name}</h2>

                      <div className="reviewer-scores">
                        <span>
                          Malcolm
                          <strong>
                            {displayScore(restaurant.malcolm)}
                          </strong>
                        </span>

                        <span>
                          Ami
                          <strong>
                            {displayScore(restaurant.ami)}
                          </strong>
                        </span>

                        <span>
                          Nathaniel
                          <strong>
                            {displayScore(restaurant.nathaniel)}
                          </strong>
                        </span>
                      </div>
                    </div>

                    <div className="right-section">
                      <div className="overall-score">
                        <strong>
                          {restaurant.total
                            .toFixed(2)
                            .replace(/\.00$/, "")}
                        </strong>

                        <span>/7</span>
                      </div>

                      <div
                        className={`arrow ${
                          isOpen ? "arrow-open" : ""
                        }`}
                      >
                        ↓
                      </div>
                    </div>
                  </button>

                  <div
                    className={`restaurant-details ${
                      isOpen ? "details-open" : ""
                    }`}
                  >
                    <div className="details-inner">

                      <div className="description-area">
                        <p className="details-label">
                          OUR TAKE
                        </p>

                        <h3>{restaurant.name}</h3>

                        <p className="restaurant-description">
                          {restaurant.description}
                        </p>

                        <div className="score-summary">
                          <div>
                            <span>Malcolm</span>
                            <strong>
                              {displayScore(restaurant.malcolm)}
                            </strong>
                          </div>

                          <div>
                            <span>Ami</span>
                            <strong>
                              {displayScore(restaurant.ami)}
                            </strong>
                          </div>

                          <div>
                            <span>Nathaniel</span>
                            <strong>
                              {displayScore(restaurant.nathaniel)}
                            </strong>
                          </div>
                        </div>
                      </div>

                      <div className="photos-area">
                        {restaurant.photos.length > 0 ? (
                          restaurant.photos.slice(0, 2).map((photo, i) => (
                            <img
                              key={photo}
                              src={photo}
                              alt={`${restaurant.name} photo ${i + 1}`}
                              className="restaurant-photo"
                            />
                          ))
                        ) : (
                          <>
                            <div className="photo-placeholder">
                              <span>📷</span>
                              <p>Photo coming soon</p>
                            </div>

                            <div className="photo-placeholder second-photo">
                              <span>🍳</span>
                              <p>Photo coming soon</p>
                            </div>
                          </>
                        )}
                      </div>

                    </div>
                  </div>
                </article>
              );
            })}
          </section>

        </div>
      </main>

      <style>{`
        .rankings-page {
          min-height: 100vh;
          background: #dbeaf0;
          padding: 180px 30px 100px;
          box-sizing: border-box;
        }

        .rankings-container {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
        }

        .rankings-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .eyebrow {
          margin: 0;
          color: #0e7490;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 4px;
        }

        .rankings-header h1 {
          margin: 16px 0 0;
          color: #181818;
          font-size: 62px;
          line-height: 1;
          font-weight: 800;
        }

        .header-description {
          max-width: 700px;
          margin: 25px auto 0;
          color: #52656c;
          font-size: 19px;
          line-height: 1.7;
        }

        .restaurant-count {
          display: inline-block;
          margin-top: 25px;
          padding: 9px 17px;

          background: rgba(255, 255, 255, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 999px;

          color: #164e63;
          font-size: 13px;
          font-weight: 700;
        }

        .ranking-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .restaurant-wrapper {
          background: rgba(255, 255, 255, 0.86);

          border: 1px solid rgba(255, 255, 255, 0.75);
          border-radius: 24px;

          overflow: hidden;

          box-shadow:
            0 8px 25px rgba(20, 50, 60, 0.07);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .restaurant-wrapper:hover {
          box-shadow:
            0 15px 35px rgba(20, 50, 60, 0.14);
        }

        .restaurant-wrapper.top-three {
          border: 1px solid rgba(14, 116, 144, 0.3);
        }

        .ranking-card {
          width: 100%;

          display: grid;
          grid-template-columns: 75px 1fr 150px;
          align-items: center;

          gap: 20px;

          padding: 22px 26px;

          background: transparent;
          border: none;

          text-align: left;
          font-family: inherit;

          cursor: pointer;
        }

        .ranking-card:hover {
          background: rgba(255, 255, 255, 0.35);
        }

        .rank {
          width: 58px;
          height: 58px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #164e63;
          color: white;

          border-radius: 18px;

          font-size: 22px;
          font-weight: 800;
        }

        .top-three .rank {
          background: #0e7490;
        }

        .restaurant-info {
          min-width: 0;
        }

        .restaurant-info h2 {
          margin: 0;

          color: #181818;

          font-size: 22px;
          font-weight: 750;
        }

        .reviewer-scores {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;

          margin-top: 10px;
        }

        .reviewer-scores span {
          color: #718087;
          font-size: 13px;
        }

        .reviewer-scores strong {
          margin-left: 6px;
          color: #33454c;
        }

        .right-section {
          display: flex;
          align-items: center;
          justify-content: flex-end;

          gap: 18px;
        }

        .overall-score {
          text-align: right;
          white-space: nowrap;
        }

        .overall-score strong {
          color: #164e63;

          font-size: 34px;
          font-weight: 800;
        }

        .overall-score span {
          margin-left: 3px;

          color: #849399;

          font-size: 16px;
        }

        .arrow {
          color: #164e63;

          font-size: 20px;
          font-weight: 800;

          transition: transform 0.3s ease;
        }

        .arrow-open {
          transform: rotate(180deg);
        }

        .restaurant-details {
          display: grid;
          grid-template-rows: 0fr;

          background: rgba(242, 249, 251, 0.85);

          border-top: 1px solid transparent;

          transition:
            grid-template-rows 0.4s ease,
            border-color 0.3s ease;
        }

        .details-open {
          grid-template-rows: 1fr;
          border-top-color: rgba(22, 78, 99, 0.12);
        }

        .details-inner {
          min-height: 0;
          overflow: hidden;

          display: grid;
          grid-template-columns: 1.2fr 1fr;

          gap: 35px;

          padding: 0 28px;

          opacity: 0;

          transition:
            padding 0.4s ease,
            opacity 0.25s ease;
        }

        .details-open .details-inner {
          padding: 30px 28px;
          opacity: 1;
        }

        .details-label {
          margin: 0;

          color: #0e7490;

          font-size: 11px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .description-area h3 {
          margin: 10px 0 0;

          color: #181818;

          font-size: 25px;
        }

        .restaurant-description {
          max-width: 580px;

          margin: 14px 0 0;

          color: #5d6a6f;

          font-size: 15px;
          line-height: 1.7;
        }

        .score-summary {
          display: flex;
          gap: 12px;

          margin-top: 25px;
        }

        .score-summary div {
          min-width: 90px;

          padding: 12px 15px;

          background: rgba(255, 255, 255, 0.8);

          border-radius: 15px;
        }

        .score-summary span {
          display: block;

          color: #77868c;

          font-size: 11px;
        }

        .score-summary strong {
          display: block;

          margin-top: 3px;

          color: #164e63;

          font-size: 20px;
        }

        .photos-area {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .restaurant-photo,
        .photo-placeholder {
          width: 100%;
          height: 190px;

          border-radius: 18px;

          object-fit: cover;
        }

        .photo-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          background: #d5e6eb;

          color: #55747f;
        }

        .photo-placeholder span {
          font-size: 30px;
        }

        .photo-placeholder p {
          margin: 8px 0 0;

          font-size: 12px;
          font-weight: 700;
        }

        @media (max-width: 800px) {
          .rankings-page {
            padding: 150px 16px 70px;
          }

          .rankings-header h1 {
            font-size: 44px;
          }

          .ranking-card {
            grid-template-columns: 55px 1fr;
          }

          .rank {
            width: 48px;
            height: 48px;

            border-radius: 15px;

            font-size: 18px;
          }

          .right-section {
            grid-column: 2;

            justify-content: flex-start;
          }

          .overall-score strong {
            font-size: 28px;
          }

          .details-inner {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 550px) {
          .reviewer-scores {
            gap: 8px 14px;
          }

          .score-summary {
            flex-wrap: wrap;
          }

          .photos-area {
            grid-template-columns: 1fr;
          }

          .second-photo {
            display: none;
          }
        }
      `}</style>
    </>
  );
}