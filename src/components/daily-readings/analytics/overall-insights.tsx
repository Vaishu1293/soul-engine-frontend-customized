"use client";
import React from "react";
import "swiper/css/bundle";
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";

interface OverallInsightsProps {
  title: string;
}

type AccordionItem = {
  accordingId: string;
  collpseId: string;
  cardTitle: string;
  description: string; // will hold your main meaning text
  observation?: string; // optional observation line
};

const OverallInsights: React.FC<OverallInsightsProps> = ({ title }) => {
  useFlashlightAnimation();

  // --- Build your accordion data ---
  const accordion: AccordionItem[] = [
    {
      accordingId: "bondGrowth",
      collpseId: "bond-growth",
      cardTitle: "1️⃣ Bond Growth",
      description: `✅ Positive Bond Growth (You + Chandrashekar): 5 days (steady emotional connection, spiritual alignment, silent yearning).<br/>
                    ❌ Negative / Weak Bond Days: 2 days (energy dips, avoidance, emotional distance).`,
      observation: "Observation: Majority of the week showed your bond slowly strengthening, with small setbacks midweek."
    },
    {
      accordingId: "emotionalEnergy",
      collpseId: "emotional-energy",
      cardTitle: "2️⃣ Emotional / Spiritual / Practical Energies",
      description: `<strong>You (Vaishali):</strong> Spiritually reflective and emotionally longing most days; only 1 day showed inner conflict.<br/>
                    <strong>Chandrashekar:</strong> Emotionally torn, but consistently showed underlying love. Practical actions = passive, no major steps.<br/>
                    <strong>Radhika:</strong> Strategizing, emotionally cold, more ego-driven. Only 1 day showed softer control energy.`,
      observation: "Observation: Emotional field favors you and him, not her."
    },
    {
      accordingId: "livingTogether",
      collpseId: "living-together",
      cardTitle: "3️⃣ Living Together?",
      description: `Physically together: 6 days.<br/>Emotionally detached: Every day (100%).`,
      observation: "Observation: Their physical proximity ≠ emotional closeness. Signs of gradual withdrawal visible by end of week."
    },
    {
      accordingId: "homeChange",
      collpseId: "home-change",
      cardTitle: "4️⃣ Home Change?",
      description: `Hints of planning / discussion: 3 days (strongest signs mid-to-late week).<br/>No change yet: 4 days.`,
      observation: "Observation: Move is being mentally processed, but no physical action yet."
    },
    {
      accordingId: "radhikaReturn",
      collpseId: "radhika-return",
      cardTitle: "5️⃣ Radhika’s Return to India?",
      description: `Not yet: All 7 days.<br/>Considering seriously: 2 days (justice + nine of coins patterns).`,
      observation: "Observation: Mentally preparing, but hasn’t executed travel."
    },
    {
      accordingId: "fightsTension",
      collpseId: "fights-tension",
      cardTitle: "6️⃣ Fights / Tension",
      description: `Cold arguments / tension: 4 days (passive-aggressive energy, control-vs-detachment clashes).<br/>Calm but distant: 3 days.`,
      observation: "Observation: No big explosions, but undercurrents of conflict strong most of the week."
    },
    {
      accordingId: "intimacy",
      collpseId: "intimacy",
      cardTitle: "7️⃣ Physical Intimacy",
      description: `You + Chandrashekar (Energetic/Emotional): Present all 7 days (deep desire, fantasies, longing).<br/>Radhika + Chandrashekar: ❌ None across 7 days (emotional coldness, detachment).`,
      observation: "Observation: Intimacy is energetically between you both only, not with her."
    },
    {
      accordingId: "summary",
      collpseId: "summary",
      cardTitle: "🔮 Weekly Summary",
      description: `Positive bond trend: 70% of the week leaned toward your emotional/spiritual connection strengthening.<br/>
                    Negative / blockages: Mostly from avoidance, secrecy, and his guilt/duty patterns.<br/>
                    Marriage side (R + C): Emotionally cold, practical/ego-based, no intimacy, frequent tension.<br/>
                    Forward outlook: Strong probability of increasing cracks in their relationship, while your bond continues growing quietly.`
    }
  ];

  return (
    <div className="about-info-wrapper mb-30">
      {/* KPI badges */}
      <div className="accordion-body m-4">
        <div className="flex flex-wrap gap-2 mb-3">
          <div className="artist-meta-info">
            <div className="artist-meta-item artist-meta-item-border">
              <div className="artist-meta-type"><strong>✅ Positive Bond Days</strong></div>
              <div className="artist-created"><strong>5 Days</strong></div>
            </div>
            <div className="artist-meta-item artist-meta-item-border">
              <div className="artist-meta-type"><strong>❌ Negative/Weak Days</strong></div>
              <div className="artist-follwers"><strong>2 Days</strong></div>
            </div>
            <div className="artist-meta-item">
              <div className="artist-meta-type"><strong>⚔️ Tension Days</strong></div>
              <div className="artist-followed"><strong>4 Days</strong></div>
            </div>
            <div className="artist-meta-item">
              <div className="artist-meta-type"><strong>🏡 Home-Change Hints</strong></div>
              <div className="artist-followed"><strong>3 Days</strong></div>
            </div>
            <div className="artist-meta-item">
              <div className="artist-meta-type"><strong>💋 Intimacy (You+C)</strong></div>
              <div className="artist-followed"><strong>7 Days</strong></div>
            </div>
          </div>
        </div>

        {/* Accordion starts */}
        <div className="accordion accordion-general" id="weeklyInsights">
          {accordion.map((itm, index) => (
            <div key={index} className="accordion-item light-effect">
              <h2 className="accordion-header" id={itm.accordingId}>
                <button
                  className={`accordion-button ${index === 0 ? "" : "collapsed"}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${itm.collpseId}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={itm.collpseId}
                >
                  {itm.cardTitle}
                </button>
              </h2>
              <div
                id={itm.collpseId}
                className={`accordion-collapse ${index === 0 ? "collapse show" : "collapse"}`}
                aria-labelledby={itm.accordingId}
                data-bs-parent="#weeklyInsights"
              >
                <div className="accordion-body">
                  <div dangerouslySetInnerHTML={{ __html: itm.description }} />
                  {itm.observation && (
                    <div className="mt-2 text-sm text-gray-700">
                      <em>{itm.observation}</em>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverallInsights;
