"use client";

import { useState, type CSSProperties } from "react";

type Restaurant = {
  name: string;
  total: number;
  malcolm: number | null;
  ami: number | null;
  nathaniel: number | null;
  description: string;
  photos: string[];

  accent: string;
  secondary: string;
  brandText: string;
  brandFont: string;
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
        "A solid San Diego breakfast spot with a relaxed neighborhood feel.",
      photos: [],
      accent: "#556B2F",
      secondary: "#C6A15B",
      brandText: "#34431D",
      brandFont: "Georgia, serif",
    },
    {
      name: "Caroline’s",
      total: 5.33,
      malcolm: 5,
      ami: 5,
      nathaniel: 6,
      description:
        "A scenic La Jolla breakfast spot with ocean views and a relaxed coastal atmosphere.",
      photos: [],
      accent: "#247BA0",
      secondary: "#79C7C5",
      brandText: "#17566F",
      brandFont: "Georgia, serif",
    },
    {
      name: "Broken Yolk",
      total: 3.33,
      malcolm: 3,
      ami: 3,
      nathaniel: 4,
      description:
        "A traditional breakfast restaurant with a huge menu of familiar favorites.",
      photos: [],
      accent: "#E6B800",
      secondary: "#222222",
      brandText: "#181818",
      brandFont: "'Arial Black', Impact, sans-serif",
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
      accent: "#D98CA3",
      secondary: "#77545E",
      brandText: "#68404D",
      brandFont: "'Lucida Handwriting', 'Brush Script MT', cursive",
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
      accent: "#B76546",
      secondary: "#D7B98A",
      brandText: "#75402D",
      brandFont: "Georgia, serif",
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
      accent: "#135A7A",
      secondary: "#4DB7C5",
      brandText: "#10475F",
      brandFont: "'Trebuchet MS', Arial, sans-serif",
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
      accent: "#005DAA",
      secondary: "#E31837",
      brandText: "#005DAA",
      brandFont: "'Arial Rounded MT Bold', Arial, sans-serif",
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
      accent: "#558B2F",
      secondary: "#F39C38",
      brandText: "#375D21",
      brandFont: "'Trebuchet MS', Arial, sans-serif",
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
      accent: "#315845",
      secondary: "#D7C49E",
      brandText: "#274737",
      brandFont: "Georgia, serif",
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
      accent: "#7E2435",
      secondary: "#C8A45B",
      brandText: "#651C2A",
      brandFont: "Georgia, serif",
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
      accent: "#E9769A",
      secondary: "#111111",
      brandText: "#C5446D",
      brandFont: "'Arial Black', Arial, sans-serif",
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
      accent: "#7D9A78",
      secondary: "#D6B990",
      brandText: "#546952",
      brandFont: "Georgia, serif",
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
      accent: "#D71920",
      secondary: "#FFD200",
      brandText: "#D71920",
      brandFont:
        "'Futura Condensed Bold', 'Futura Condensed', 'Arial Narrow', Impact, sans-serif",
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
      accent: "#D98091",
      secondary: "#F4CE9B",
      brandText: "#9A5260",
      brandFont: "Georgia, serif",
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
      accent: "#2D8692",
      secondary: "#DAB97C",
      brandText: "#20616A",
      brandFont: "'Trebuchet MS', Arial, sans-serif",
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
      accent: "#4FAAD2",
      secondary: "#F1C94B",
      brandText: "#267899",
      brandFont: "'Trebuchet MS', Arial, sans-serif",
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
      accent: "#8A4338",
      secondary: "#C9974B",
      brandText: "#6D332B",
      brandFont: "Georgia, serif",
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
      accent: "#E8733E",
      secondary: "#466B4C",
      brandText: "#B04F27",
      brandFont: "'Trebuchet MS', Arial, sans-serif",
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
      accent: "#285843",
      secondary: "#D87A3E",
      brandText: "#214A38",
      brandFont: "Georgia, serif",
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
      accent: "#292929",
      secondary: "#BB9963",
      brandText: "#242424",
      brandFont: "'Arial Black', Arial, sans-serif",
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
      accent: "#159A9C",
      secondary: "#ED7F72",
      brandText: "#147577",
      brandFont: "'Trebuchet MS', Arial, sans-serif",
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
      accent: "#667A3B",
      secondary: "#CDAA68",
      brandText: "#4D5C2C",
      brandFont: "Georgia, serif",
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
      accent: "#6653A3",
      secondary: "#D58DB8",
      brandText: "#514181",
      brandFont: "'Trebuchet MS', Arial, sans-serif",
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
      accent: "#253A5E",
      secondary: "#C6A160",
      brandText: "#253A5E",
      brandFont: "Georgia, serif",
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
      accent: "#A65A70",
      secondary: "#D9B99B",
      brandText: "#7C4053",
      brandFont: "Georgia, serif",
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
      accent: "#B52B32",
      secondary: "#397A47",
      brandText: "#8E2026",
      brandFont: "Georgia, serif",
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
      accent: "#307C9B",
      secondary: "#CCB37C",
      brandText: "#245F78",
      brandFont: "'Trebuchet MS', Arial, sans-serif",
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
      accent: "#183B65",
      secondary: "#C9474C",
      brandText: "#183B65",
      brandFont: "Georgia, serif",
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
      accent: "#C84646",
      secondary: "#5DAEB0",
      brandText: "#A33636",
      brandFont: "'Arial Rounded MT Bold', Arial, sans-serif",
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
      accent: "#D09B26",
      secondary: "#694B31",
      brandText: "#815D1B",
      brandFont: "'Arial Black', Arial, sans-serif",
    },
  ];

  const rankedRestaurants = [...restaurants].sort(
    (a, b) => b.total - a.total
  );

  const topThree = rankedRestaurants.slice(0, 3);
  const remainingRestaurants = rankedRestaurants.slice(3);

  function displayScore(score: number | null) {
    return score === null ? "—" : score.toString();
  }

  function toggleRestaurant(name: string) {
    setOpenRestaurant(openRestaurant === name ? null : name);
  }

  function RestaurantDetails({
    restaurant,
    open,
  }: {
    restaurant: Restaurant;
    open: boolean;
  }) {
    return (
      <div className={`details ${open ? "details-open" : ""}`}>
        <div className="details-content">
          <div className="review-copy">
            <span className="take-label">OUR TAKE</span>

            <p>{restaurant.description}</p>

            <div className="individual-ratings">
              <div>
                <span>Malcolm</span>
                <strong>{displayScore(restaurant.malcolm)}</strong>
              </div>

              <div>
                <span>Amarissa</span>
                <strong>{displayScore(restaurant.ami)}</strong>
              </div>

              <div>
                <span>Nathaniel</span>
                <strong>{displayScore(restaurant.nathaniel)}</strong>
              </div>
            </div>
          </div>

          <div className="photo-grid">
            {restaurant.photos.length > 0 ? (
              restaurant.photos.slice(0, 2).map((photo, index) => (
                <img
                  src={photo}
                  alt={`${restaurant.name} ${index + 1}`}
                  key={photo}
                />
              ))
            ) : (
              <>
                <div className="photo-empty">
                  <span>Photo coming soon</span>
                </div>

                <div className="photo-empty">
                  <span>Photo coming soon</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="page">
        {/* HERO */}

        <section className="hero">
          <div className="hero-number">07</div>

          <div className="hero-copy">
            <span>BRUNCH OUT OF SEVEN</span>

            <h1>San Diego<br />Brunch Rankings</h1>

            <p>
              Thirty spots. Three reviewers. One continuously evolving
              ranking.
            </p>
          </div>
        </section>

        {/* TOP THREE */}

        <section className="top-section">
          <div className="section-heading">
            <span>THE CURRENT PODIUM</span>
            <h2>Top Three</h2>
          </div>

          <div className="podium">
            {topThree.map((restaurant, index) => {
              const open = openRestaurant === restaurant.name;

              const style = {
                "--accent": restaurant.accent,
                "--secondary": restaurant.secondary,
                "--brand": restaurant.brandText,
                "--brand-font": restaurant.brandFont,
              } as CSSProperties;

              return (
                <div
                  className="podium-item"
                  style={style}
                  key={restaurant.name}
                >
                  <button
                    onClick={() => toggleRestaurant(restaurant.name)}
                    className="podium-button"
                  >
                    <div className="podium-top">
                      <span className="podium-rank">
                        0{index + 1}
                      </span>

                      <span className="podium-score">
                        {restaurant.total.toFixed(2).replace(/0$/, "")}
                        <small>/7</small>
                      </span>
                    </div>

                    <div className="podium-middle">
                      <h3>{restaurant.name}</h3>
                    </div>

                    <div className="podium-bottom">
                      <span>
                        Malcolm {displayScore(restaurant.malcolm)}
                      </span>

                      <span>
                        Ami {displayScore(restaurant.ami)}
                      </span>

                      <span>
                        Nathaniel {displayScore(restaurant.nathaniel)}
                      </span>

                      <span className="open-text">
                        {open ? "CLOSE ↑" : "VIEW ↓"}
                      </span>
                    </div>
                  </button>

                  <RestaurantDetails
                    restaurant={restaurant}
                    open={open}
                  />
                </div>
              );
            })}
          </div>
        </section>

        {/* REST OF RANKINGS */}

        <section className="full-ranking">
          <div className="ranking-heading">
            <span>FULL LIST</span>
            <h2>The Rankings</h2>
          </div>

          <div className="column-labels">
            <span>RANK</span>
            <span>RESTAURANT</span>
            <span>REVIEWERS</span>
            <span>SCORE</span>
          </div>

          <div className="restaurant-list">
            {remainingRestaurants.map((restaurant, index) => {
              const rank = index + 4;
              const open = openRestaurant === restaurant.name;

              const style = {
                "--accent": restaurant.accent,
                "--secondary": restaurant.secondary,
                "--brand": restaurant.brandText,
                "--brand-font": restaurant.brandFont,
              } as CSSProperties;

              return (
                <div
                  className="restaurant-entry"
                  key={restaurant.name}
                  style={style}
                >
                  <button
                    className="restaurant-row"
                    onClick={() => toggleRestaurant(restaurant.name)}
                  >
                    <span className="list-rank">
                      {String(rank).padStart(2, "0")}
                    </span>

                    <div className="list-name">
                      <h3>{restaurant.name}</h3>

                      <span
                        className="restaurant-accent"
                      ></span>
                    </div>

                    <div className="list-reviewers">
                      <span>
                        M
                        <strong>
                          {displayScore(restaurant.malcolm)}
                        </strong>
                      </span>

                      <span>
                        A
                        <strong>
                          {displayScore(restaurant.ami)}
                        </strong>
                      </span>

                      <span>
                        N
                        <strong>
                          {displayScore(restaurant.nathaniel)}
                        </strong>
                      </span>
                    </div>

                    <div className="list-score">
                      <strong>
                        {restaurant.total
                          .toFixed(2)
                          .replace(/0$/, "")}
                      </strong>

                      <small>/7</small>

                      <span className={open ? "rotate" : ""}>
                        ↓
                      </span>
                    </div>
                  </button>

                  <RestaurantDetails
                    restaurant={restaurant}
                    open={open}
                  />
                </div>
              );
            })}
          </div>
        </section>

        <footer className="ranking-footer">
          <span>BRUNCH OUT OF SEVEN</span>
          <span>SAN DIEGO, CALIFORNIA</span>
        </footer>
      </main>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .page {
          min-height: 100vh;
          background: #f1efe9;
          color: #171717;
          font-family: Arial, Helvetica, sans-serif;
          padding-top: 130px;
        }

        /* HERO */

        .hero {
          width: min(1250px, calc(100% - 60px));
          margin: 0 auto;
          min-height: 470px;

          display: grid;
          grid-template-columns: 0.55fr 1.45fr;
          align-items: end;

          padding: 40px 0 75px;

          border-bottom: 1px solid #aaa69d;
        }

        .hero-number {
          font-family: Georgia, serif;
          font-size: clamp(130px, 18vw, 260px);
          line-height: 0.72;
          color: #d5d1c7;
          letter-spacing: -15px;
          user-select: none;
        }

        .hero-copy {
          padding-left: 45px;
        }

        .hero-copy > span {
          font-size: 11px;
          letter-spacing: 5px;
          font-weight: 700;
          color: #6c6a65;
        }

        .hero-copy h1 {
          margin: 20px 0 0;

          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(55px, 7vw, 96px);
          line-height: 0.92;
          font-weight: 500;
          letter-spacing: -5px;
        }

        .hero-copy p {
          max-width: 480px;
          margin: 30px 0 0;

          color: #66635d;
          font-size: 17px;
          line-height: 1.6;
        }

        /* TOP THREE */

        .top-section {
          width: min(1250px, calc(100% - 60px));
          margin: 0 auto;
          padding: 90px 0;
        }

        .section-heading span,
        .ranking-heading span {
          font-size: 10px;
          letter-spacing: 4px;
          font-weight: 700;
          color: #7e7b74;
        }

        .section-heading h2,
        .ranking-heading h2 {
          margin: 10px 0 45px;

          font-family: Georgia, "Times New Roman", serif;
          font-size: 48px;
          font-weight: 500;
          letter-spacing: -2px;
        }

        .podium {
          display: grid;
          grid-template-columns: repeat(3, 1fr);

          border-top: 1px solid #97938a;
          border-bottom: 1px solid #97938a;
        }

        .podium-item {
          min-width: 0;
          border-right: 1px solid #b6b2a9;
        }

        .podium-item:last-child {
          border-right: none;
        }

        .podium-button {
          width: 100%;
          min-height: 320px;

          display: flex;
          flex-direction: column;

          padding: 28px;

          border: none;
          background: transparent;
          text-align: left;

          cursor: pointer;

          transition: background 0.25s ease;
        }

        .podium-button:hover {
          background: rgba(255, 255, 255, 0.38);
        }

        .podium-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }

        .podium-rank {
          font-family: Georgia, serif;
          font-size: 60px;
          line-height: 1;
          color: var(--accent);
        }

        .podium-score {
          font-family: Georgia, serif;
          font-size: 39px;
          color: var(--accent);
        }

        .podium-score small {
          margin-left: 3px;
          font-family: Arial, sans-serif;
          font-size: 14px;
          color: #8b8880;
        }

        .podium-middle {
          flex: 1;

          display: flex;
          align-items: center;
        }

        .podium-middle h3 {
          margin: 25px 0;

          color: var(--brand);

          font-family: var(--brand-font);
          font-size: 32px;
          line-height: 1.1;
        }

        .podium-bottom {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 18px;

          padding-top: 20px;

          border-top: 3px solid var(--accent);

          color: #706d67;
          font-size: 11px;
          letter-spacing: 0.3px;
        }

        .open-text {
          margin-left: auto;
          color: var(--accent);
          font-weight: 800;
          letter-spacing: 1px;
        }

        /* FULL LIST */

        .full-ranking {
          background: #181818;
          color: white;

          padding: 95px max(30px, calc((100% - 1250px) / 2));
        }

        .ranking-heading span {
          color: #8d8d8d;
        }

        .ranking-heading h2 {
          color: white;
        }

        .column-labels {
          display: grid;
          grid-template-columns: 100px 1fr 330px 150px;
          gap: 20px;

          padding: 0 15px 15px;

          color: #777;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;

          border-bottom: 1px solid #3f3f3f;
        }

        .restaurant-entry {
          border-bottom: 1px solid #363636;
        }

        .restaurant-row {
          width: 100%;

          display: grid;
          grid-template-columns: 100px 1fr 330px 150px;
          align-items: center;
          gap: 20px;

          padding: 29px 15px;

          border: none;
          background: transparent;

          text-align: left;
          cursor: pointer;

          transition:
            background 0.25s ease,
            padding 0.25s ease;
        }

        .restaurant-row:hover {
          background: #222;
          padding-left: 23px;
          padding-right: 23px;
        }

        .list-rank {
          font-family: Georgia, serif;
          color: #737373;
          font-size: 31px;
        }

        .list-name {
          position: relative;
          padding-bottom: 7px;
        }

        .list-name h3 {
          margin: 0;

          color: var(--brand);

          font-family: var(--brand-font);
          font-size: 27px;
        }

        .restaurant-accent {
          position: absolute;
          bottom: 0;
          left: 0;

          width: 45px;
          height: 2px;

          background: var(--accent);

          transition: width 0.3s ease;
        }

        .restaurant-row:hover .restaurant-accent {
          width: 110px;
        }

        .list-reviewers {
          display: flex;
          gap: 30px;
        }

        .list-reviewers span {
          color: #777;
          font-size: 10px;
          letter-spacing: 1px;
        }

        .list-reviewers strong {
          margin-left: 7px;

          color: #ccc;

          font-size: 14px;
        }

        .list-score {
          display: flex;
          align-items: baseline;
          justify-content: flex-end;

          color: var(--accent);
        }

        .list-score strong {
          font-family: Georgia, serif;
          font-size: 36px;
          font-weight: 500;
        }

        .list-score small {
          margin-left: 3px;
          color: #777;
          font-size: 13px;
        }

        .list-score > span {
          margin-left: 20px;

          color: #aaa;
          font-size: 16px;

          transition: transform 0.3s ease;
        }

        .list-score > span.rotate {
          transform: rotate(180deg);
        }

        /* EXPANDED DETAILS */

        .details {
          display: grid;
          grid-template-rows: 0fr;

          overflow: hidden;

          transition: grid-template-rows 0.45s ease;
        }

        .details-open {
          grid-template-rows: 1fr;
        }

        .details-content {
          min-height: 0;
          overflow: hidden;

          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 45px;

          padding: 0 30px;

          opacity: 0;

          transition:
            padding 0.4s ease,
            opacity 0.3s ease;
        }

        .details-open .details-content {
          padding: 20px 30px 45px;
          opacity: 1;
        }

        .full-ranking .details-content {
          border-left: 2px solid var(--accent);
        }

        .take-label {
          color: var(--accent);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .review-copy > p {
          max-width: 560px;

          margin: 15px 0 0;

          color: #9a9a9a;
          font-size: 15px;
          line-height: 1.8;
        }

        .top-section .review-copy > p {
          color: #68655f;
        }

        .individual-ratings {
          display: flex;
          gap: 40px;

          margin-top: 30px;
        }

        .individual-ratings div {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .individual-ratings span {
          color: #777;
          font-size: 10px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .individual-ratings strong {
          color: var(--accent);
          font-family: Georgia, serif;
          font-size: 25px;
          font-weight: 500;
        }

        .photo-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .photo-grid img,
        .photo-empty {
          width: 100%;
          height: 210px;

          object-fit: cover;

          border-radius: 0;
        }

        .photo-empty {
          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid #555;

          color: #777;
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .top-section .photo-empty {
          border-color: #c6c1b6;
          color: #837f77;
        }

        /* FOOTER */

        .ranking-footer {
          display: flex;
          justify-content: space-between;

          padding: 35px max(30px, calc((100% - 1250px) / 2));

          background: #0e0e0e;

          color: #686868;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        /* MOBILE */

        @media (max-width: 900px) {
          .page {
            padding-top: 120px;
          }

          .hero {
            grid-template-columns: 1fr;
          }

          .hero-number {
            font-size: 130px;
            letter-spacing: -8px;
          }

          .hero-copy {
            padding: 40px 0 0;
          }

          .podium {
            grid-template-columns: 1fr;
          }

          .podium-item {
            border-right: none;
            border-bottom: 1px solid #b6b2a9;
          }

          .column-labels {
            display: none;
          }

          .restaurant-row {
            grid-template-columns: 60px 1fr auto;
          }

          .list-reviewers {
            display: none;
          }

          .list-score {
            grid-column: 3;
          }

          .details-content {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .hero,
          .top-section {
            width: calc(100% - 32px);
          }

          .hero-copy h1 {
            font-size: 50px;
            letter-spacing: -2px;
          }

          .full-ranking {
            padding-left: 16px;
            padding-right: 16px;
          }

          .restaurant-row {
            grid-template-columns: 45px 1fr;
            gap: 12px;
            padding: 24px 4px;
          }

          .list-rank {
            font-size: 23px;
          }

          .list-name h3 {
            font-size: 21px;
          }

          .list-score {
            grid-column: 2;
            justify-content: flex-start;
            margin-top: 5px;
          }

          .list-score strong {
            font-size: 28px;
          }

          .photo-grid {
            grid-template-columns: 1fr;
          }

          .photo-grid .photo-empty:nth-child(2),
          .photo-grid img:nth-child(2) {
            display: none;
          }

          .details-open .details-content {
            padding-left: 12px;
            padding-right: 12px;
          }

          .individual-ratings {
            gap: 22px;
          }

          .ranking-footer {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </>
  );
}