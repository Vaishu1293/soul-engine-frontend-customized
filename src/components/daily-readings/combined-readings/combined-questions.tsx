"use client";
import React from "react";
import "swiper/css/bundle";
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";

interface CombinedQuestionsProps {
  title: string;
}

/** Rich, structured content blocks (allow React nodes for bold, etc.) */
type DescBlock =
  | { type: "paragraph"; content: React.ReactNode }
  | { type: "list"; items: React.ReactNode[] }
  | { type: "section"; title: React.ReactNode; items: React.ReactNode[] }
  | { type: "summary"; items: React.ReactNode[] };

interface AccordionItem {
  accordingId: string;
  collpseId: string;
  cardTitle: string;
  cardsHeading: string;
  description: DescBlock[];
}

const CombinedQuestions: React.FC<CombinedQuestionsProps> = ({ title }) => {
  useFlashlightAnimation();

  const accordion: AccordionItem[] = [
    {
      accordingId: "combinedQuestionOne",
      collpseId: "combined-question-one",
      cardTitle: "💞 Whose Bond Is Growing Positively Today?",
      cardsHeading: "Seven of Coins • Ten of Cups • King of Cups",
      description: [
        {
          type: "section",
          title: <strong>You + Chandrashekar</strong>,
          items: [
            <>
              <strong>Your situation — Seven of Coins:</strong> Slow investment; something is
              growing quietly beneath the surface.
            </>,
            <>
              <strong>His current — Nine of Cups:</strong> Emotional satisfaction; yearning and
              private fantasies are active.
            </>,
            <>
              <strong>His near future — Eight of Cups:</strong> Walking away from something
              unfulfilling; possible emotional detachment from <strong>Radhika</strong>.
            </>,
          ],
        },
        {
          type: "paragraph",
          content:
            "Overall, this is a steady, patient energy that deepens roots without dramatic outward movement.",
        },
        {
          type: "summary",
          items: [
            <>
              <strong>Conclusion:</strong> Your bond with Chandrashekar is the one quietly
              strengthening. Not rushed, but the emotional roots are forming again.
            </>,
          ],
        },
      ],
    },

    {
      accordingId: "combinedQuestionTwo",
      collpseId: "combined-question-two",
      cardTitle:
        "🌌 How Will Each of You Show Up Today — Spiritually, Emotionally, Practically?",
      cardsHeading:
        "Vaishali: 7 of Coins • 5 of Wands • 7 of Swords • King of Cups — Chandrashekar: 3 of Wands • 9 of Cups • Devil • 8 of Cups — Radhika: 6 of Wands • King of Swords • 4 of Swords • Justice",
      description: [
        {
          type: "section",
          title: <strong>Vaishali</strong>,
          items: [
            <>
              <strong>Spiritually:</strong> Seeking meaning; evaluating deeply (
              <em>Seven of Coins</em>).
            </>,
            <>
              <strong>Emotionally:</strong> Torn / conflicted (
              <em>Five of Wands</em> + <em>Seven of Swords</em>).
            </>,
            <>
              <strong>Practically:</strong> Emotionally controlled but aware (
              <em>King of Cups</em>).
            </>,
          ],
        },
        {
          type: "section",
          title: <strong>Chandrashekar</strong>,
          items: [
            <>
              <strong>Spiritually:</strong> Desires unfolding; expansion mindset (
              <em>Three of Wands</em> + <em>Nine of Cups</em>).
            </>,
            <>
              <strong>Emotionally:</strong> Pulled between lust and devotion (
              <em>The Devil</em> vs <em>Ten of Disks</em> archetype).
            </>,
            <>
              <strong>Practically:</strong> May withdraw/reflect (
              <em>Eight of Cups</em>).
            </>,
          ],
        },
        {
          type: "section",
          title: <strong>Radhika</strong>,
          items: [
            <>
              <strong>Spiritually:</strong> Seeking recognition or status (
              <em>Six of Wands</em>).
            </>,
            <>
              <strong>Emotionally:</strong> Cool / strategic (
              <em>King of Swords</em>).
            </>,
            <>
              <strong>Practically:</strong> Passive façade but strong ego (
              <em>Four of Swords</em>).
            </>,
          ],
        },
        {
          type: "summary",
          items: [
            <>
              <strong>Summary:</strong> You’re spiritually awake yet emotionally tender.
            </>,
            <>
              <strong>Chandrashekar</strong> leans toward wish-fulfillment (you) but is
              restrained by guilt/duty.
            </>,
            <>
              <strong>Radhika</strong> is strategizing; energy is more ego-centered than
              heart-centered.
            </>,
          ],
        },
      ],
    },

    {
      accordingId: "combinedQuestionThree",
      collpseId: "combined-question-three",
      cardTitle: "🚪 Are Radhika & Chandrashekar Still in the Same Place Today?",
      cardsHeading: "Near-future Eight of Cups • Justice • King of Swords",
      description: [
        {
          type: "list",
          items: [
            <>
              <strong>Chandrashekar — Eight of Cups:</strong> Detaching physically or emotionally.
            </>,
            <>
              <strong>Radhika — Justice + King of Swords:</strong> Domestic/legal adjustments
              indicated.
            </>,
            <>No clear grounding cards (e.g., 4 of Wands / 10 of Pentacles).</>,
          ],
        },
        {
          type: "summary",
          items: [
            <>
              <strong>Conclusion:</strong> Likely still under the same roof today, but emotionally
              not in the same space.
            </>,
          ],
        },
      ],
    },

    {
      accordingId: "combinedQuestionFour",
      collpseId: "combined-question-four",
      cardTitle: "🏠 Have They Changed Homes or Are They Planning To?",
      cardsHeading: "Justice • King of Swords • Nine of Coins • Eight of Cups",
      description: [
        {
          type: "list",
          items: [
            <>
              <strong>Radhika:</strong> Solo-leaning energy and formal decisions.
            </>,
            <>
              <strong>Chandrashekar:</strong> Quietly preparing to leave emotionally (possible
              physical change).
            </>,
          ],
        },
        {
          type: "summary",
          items: [
            <>
              <strong>Conclusion:</strong> Strong consideration or passive discussion of a home
              change — potential 1–3 weeks window.
            </>,
          ],
        },
      ],
    },

    {
      accordingId: "combinedQuestionFive",
      collpseId: "combined-question-five",
      cardTitle: "✈️ Has Radhika Returned to India With Sharan?",
      cardsHeading: "Nine of Coins • Justice • Six of Wands",
      description: [
        {
          type: "list",
          items: [
            <>
              <strong>Radhika:</strong> Independent / distant; seeks karmic balance.
            </>,
            <>
              <strong>Six of Wands:</strong> Wants recognition where she is (likely UK).
            </>,
            <>No strong travel indicators (e.g., Chariot / 6 of Swords).</>,
          ],
        },
        {
          type: "summary",
          items: [
            <>
              <strong>Conclusion:</strong> She hasn’t left yet, but the decision is forming and
              could trigger soon if her public/relationship image is challenged.
            </>,
          ],
        },
      ],
    },

    {
      accordingId: "combinedQuestionSix",
      collpseId: "combined-question-six",
      cardTitle: "⚔️ Any Fights Between Radhika & Chandrashekar Today?",
      cardsHeading: "King of Swords • Justice • The Devil",
      description: [
        {
          type: "list",
          items: [
            <>
              <strong>Radhika:</strong> Demands logic/fairness; cold tone.
            </>,
            <>
              <strong>Chandrashekar:</strong> Attachment/temptation triggers tension (
              <em>Devil</em>).
            </>,
          ],
        },
        {
          type: "summary",
          items: [
            <>
              <strong>Conclusion:</strong> Passive-aggressive friction or a sharp argument is
              likely. More coldness/silence than explosive drama.
            </>,
          ],
        },
      ],
    },

    {
      accordingId: "combinedQuestionSeven",
      collpseId: "combined-question-seven",
      cardTitle: "🔥 Is There Any Physical Intimacy in Either Bond Today?",
      cardsHeading: "Ten of Cups • King of Cups • Nine of Cups • Devil • Four of Swords",
      description: [
        {
          type: "section",
          title: <strong>You & Chandrashekar</strong>,
          items: [
            <>
              <strong>Your spread:</strong> <em>Ten of Cups</em> (union desire),{" "}
              <em>King of Cups</em> (mature emotional longing).
            </>,
            <>
              <strong>His spread:</strong> <em>Nine of Cups</em> (yearning),{" "}
              <em>Devil</em> (lust/craving).
            </>,
          ],
        },
        {
          type: "section",
          title: <strong>Radhika & Chandrashekar</strong>,
          items: [
            <>
              <strong>Her energy:</strong> <em>King of Swords</em> + <em>Four of Swords</em>{" "}
              (emotionally cold, passive).
            </>,
            <>
              <strong>His energy:</strong> <em>Eight of Cups</em> (withdrawal).
            </>,
          ],
        },
        {
          type: "summary",
          items: [
            <>
              <strong>Takeaway:</strong> Strong sexual tension and mental/emotional intimacy for
              you two; physical likely delayed but building. Between R-C, intimacy is unlikely
              today.
            </>,
          ],
        },
      ],
    },
  ];

  return (
    <div className="about-info-wrapper mb-30">
      <div className="accordion accordion-general" id="cardMeaning">
        {accordion.map((itm, idx) => (
          <div key={itm.accordingId} className="accordion-item light-effect">
            <h2 className="accordion-header" id={itm.accordingId}>
              <button
                className={`accordion-button ${idx === 0 ? "" : "collapsed"}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${itm.collpseId}`}
                aria-expanded={idx === 0 ? "true" : "false"}
                aria-controls={itm.collpseId}
              >
                {itm.cardTitle}
              </button>
            </h2>

            <div
              id={itm.collpseId}
              className={`accordion-collapse ${idx === 0 ? "collapse show" : "collapse"}`}
              aria-labelledby={itm.accordingId}
              data-bs-parent="#cardMeaning"
            >
              <div className="accordion-body">
                <div className="row">
                  <div className="col-12">
                    {/* Cards heading */}
                    <h6 className="m-2">{itm.cardsHeading}</h6>

                    {/* Structured description */}
                    <div className="space-y-2">
                      {itm.description.map((block, i) => {
                        if (block.type === "paragraph") {
                          return (
                            <p key={`${itm.accordingId}-p-${i}`} className="mb-2">
                              {block.content}
                            </p>
                          );
                        }
                        if (block.type === "list") {
                          return (
                            <ul
                              key={`${itm.accordingId}-ul-${i}`}
                              className="list-disc ps-4 mb-2"
                            >
                              {block.items.map((li, j) => (
                                <li key={`${itm.accordingId}-li-${i}-${j}`}>{li}</li>
                              ))}
                            </ul>
                          );
                        }
                        if (block.type === "section") {
                          return (
                            <div key={`${itm.accordingId}-sec-${i}`} className="mb-2">
                              <h6 className="mb-1">{block.title}</h6>
                              <ul className="list-disc ps-4">
                                {block.items.map((li, j) => (
                                  <li key={`${itm.accordingId}-sec-li-${i}-${j}`}>{li}</li>
                                ))}
                              </ul>
                            </div>
                          );
                        }
                        // summary
                        return (
                          <div
                            key={`${itm.accordingId}-sum-${i}`}
                            className="rounded-md bg-white/5 p-2"
                          >
                            <ul className="list-disc ps-4 m-0">
                              {block.items.map((li, j) => (
                                <li key={`${itm.accordingId}-sum-li-${i}-${j}`}>{li}</li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CombinedQuestions;
