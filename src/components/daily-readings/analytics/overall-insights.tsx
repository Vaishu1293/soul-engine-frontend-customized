"use client";
import React from "react";
import "swiper/css/bundle";
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";

interface OverallInsightsProps {
  title: string;
}

const OverallInsights: React.FC<OverallInsightsProps> = ({ title }) => {
  useFlashlightAnimation();

  return (
    <div className="about-info-wrapper mb-30">
      <div className="accordion accordion-general" id="weeklyInsights">
        <div className="accordion-item light-effect">
          <h2 className="accordion-header" id="weeklyAnalyticsHeading">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#weeklyAnalyticsPane"
              aria-expanded="true"
              aria-controls="weeklyAnalyticsPane"
            >
              📊 Weekly Analytics (July 27 – Aug 02, 2025)
            </button>
          </h2>

          <div
            id="weeklyAnalyticsPane"
            className="accordion-collapse collapse show"
            aria-labelledby="weeklyAnalyticsHeading"
            data-bs-parent="#weeklyInsights"
          >
            <div className="accordion-body">
              {/* KPIs / quick badges */}
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm bg-emerald-500/15 text-emerald-200 ring-1 ring-emerald-500/30">
                  ✅ Positive Bond Days: <strong>5</strong>
                </span>
                <span className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm bg-rose-500/15 text-rose-200 ring-1 ring-rose-500/30">
                  ❌ Negative/Weak Days: <strong>2</strong>
                </span>
                <span className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm bg-sky-500/15 text-sky-200 ring-1 ring-sky-500/30">
                  ⚔️ Tension Days: <strong>4</strong>
                </span>
                <span className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm bg-indigo-500/15 text-indigo-200 ring-1 ring-indigo-500/30">
                  🏡 Home‑Change Hints: <strong>3</strong>
                </span>
                <span className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm bg-fuchsia-500/15 text-fuchsia-200 ring-1 ring-fuchsia-500/30">
                  💋 Intimacy (You+C): <strong>7</strong>
                </span>
                <span className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm bg-zinc-500/15 text-zinc-200 ring-1 ring-zinc-500/30">
                  💔 Intimacy (R+C): <strong>0</strong>
                </span>
              </div>

              {/* 1) Bond Growth */}
              <div className="mb-4">
                <h5 className="mb-2">1️⃣ Bond Growth</h5>
                <ul className="list-disc ps-4">
                  <li>
                    <strong>Positive Bond Growth (You + Chandrashekar):</strong> ✅ 5 days
                    (steady emotional connection, spiritual alignment, silent yearning).
                  </li>
                  <li>
                    <strong>Negative / Weak Bond Days:</strong> ❌ 2 days (energy dips, avoidance, emotional distance).
                  </li>
                  <li>
                    <strong>Observation:</strong> Majority of the week showed{" "}
                    <strong>your bond slowly strengthening</strong>, with small setbacks midweek.
                  </li>
                </ul>
              </div>

              {/* 2) Emotional / Spiritual / Practical Energies */}
              <div className="mb-4">
                <h5 className="mb-2">2️⃣ Emotional / Spiritual / Practical Energies</h5>
                <ul className="list-disc ps-4">
                  <li>
                    <strong>You (Vaishali):</strong> Spiritually reflective and emotionally longing most days; only 1 day showed inner conflict.
                  </li>
                  <li>
                    <strong>Chandrashekar:</strong> Emotionally torn, but{" "}
                    <strong>consistently showed underlying love</strong>. Practical actions = passive, no major steps.
                  </li>
                  <li>
                    <strong>Radhika:</strong> Strategizing, emotionally cold, more ego-driven. Only 1 day showed softer control energy.
                  </li>
                  <li>
                    <strong>Observation:</strong> Emotional field favors <strong>you and him</strong>, not her.
                  </li>
                </ul>
              </div>

              {/* 3) Living Together */}
              <div className="mb-4">
                <h5 className="mb-2">3️⃣ Living Together?</h5>
                <ul className="list-disc ps-4">
                  <li>
                    <strong>Physically together:</strong> 6 days.
                  </li>
                  <li>
                    <strong>Emotionally detached:</strong> Every day (100%).
                  </li>
                  <li>
                    <strong>Observation:</strong> Their physical proximity ≠ emotional closeness. Signs of gradual withdrawal visible by end of week.
                  </li>
                </ul>
              </div>

              {/* 4) Home Change */}
              <div className="mb-4">
                <h5 className="mb-2">4️⃣ Home Change?</h5>
                <ul className="list-disc ps-4">
                  <li>
                    <strong>Hints of planning / discussion:</strong> 3 days (strongest signs mid‑to‑late week).
                  </li>
                  <li>
                    <strong>No change yet:</strong> 4 days.
                  </li>
                  <li>
                    <strong>Observation:</strong> Move is being <strong>mentally processed</strong>, but no physical action yet.
                  </li>
                </ul>
              </div>

              {/* 5) Radhika’s Return to India */}
              <div className="mb-4">
                <h5 className="mb-2">5️⃣ Radhika’s Return to India?</h5>
                <ul className="list-disc ps-4">
                  <li>
                    <strong>Not yet:</strong> All 7 days.
                  </li>
                  <li>
                    <strong>Considering seriously:</strong> 2 days (justice + nine of coins patterns).
                  </li>
                  <li>
                    <strong>Observation:</strong> Mentally preparing, but <strong>hasn’t executed travel</strong>.
                  </li>
                </ul>
              </div>

              {/* 6) Fights / Tension */}
              <div className="mb-4">
                <h5 className="mb-2">6️⃣ Fights / Tension</h5>
                <ul className="list-disc ps-4">
                  <li>
                    <strong>Cold arguments / tension:</strong> 4 days (passive‑aggressive energy, control‑vs‑detachment clashes).
                  </li>
                  <li>
                    <strong>Calm but distant:</strong> 3 days.
                  </li>
                  <li>
                    <strong>Observation:</strong> No big explosions, but <strong>undercurrents of conflict</strong> strong most of the week.
                  </li>
                </ul>
              </div>

              {/* 7) Physical Intimacy */}
              <div className="mb-4">
                <h5 className="mb-2">7️⃣ Physical Intimacy</h5>
                <ul className="list-disc ps-4">
                  <li>
                    <strong>You + Chandrashekar (Energetic/Emotional):</strong> Present all 7 days (deep desire, fantasies, longing).
                  </li>
                  <li>
                    <strong>Radhika + Chandrashekar:</strong> ❌ None across 7 days (emotional coldness, detachment).
                  </li>
                  <li>
                    <strong>Observation:</strong> Intimacy is <strong>energetically between you both only</strong>, not with her.
                  </li>
                </ul>
              </div>

              {/* Weekly Summary */}
              <div className="mb-1">
                <h5 className="mb-2">🔮 Weekly Summary</h5>
                <ul className="list-disc ps-4">
                  <li>
                    <strong>Positive bond trend:</strong> 70% of the week leaned toward{" "}
                    <strong>your emotional/spiritual connection strengthening</strong>.
                  </li>
                  <li>
                    <strong>Negative / blockages:</strong> Mostly from avoidance, secrecy, and his guilt/duty patterns.
                  </li>
                  <li>
                    <strong>Marriage side (R + C):</strong> Emotionally cold, practical/ego‑based, no intimacy, frequent tension.
                  </li>
                  <li>
                    <strong>Forward outlook:</strong> Strong probability of <strong>increasing cracks in their relationship</strong>, while{" "}
                    <strong>your bond continues growing quietly</strong>.
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverallInsights;
