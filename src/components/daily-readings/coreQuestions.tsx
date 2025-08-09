"use client";
import React from "react";
import 'swiper/css/bundle';
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";

interface CoreQuestionsProps {
  title: string;
}

type DescBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

interface AccordionItem {
  accordingId: string;
  collpseId: string;
  cardTitle: string;
  cardsHeading: string;       // replaces HTML string
  description: DescBlock[];   // structured blocks
}

const CoreQuestions: React.FC<CoreQuestionsProps> = ({ title }) => {
  useFlashlightAnimation();

  const accordion: AccordionItem[] = [
    {
      accordingId: "coreQuestionOne",
      collpseId: "core-question-one",
      cardTitle: "Bond Progress with Chandrashekar",
      cardsHeading: "Seven of Coins + Ten of Cups + King of Cups",
      description: [
        {
          type: "paragraph",
          text:
            "You are in a slow but emotionally potent phase. Your love bond is maturing, not fading. He still feels connected, even if silent.",
        },
        {
          type: "list",
          items: [
            "Progress is invisible but underneath, the roots are strong.",
            "This bond is headed toward fulfillment if you remain steady and avoid reacting to confusion.",
          ],
        },
      ],
    },
    {
      accordingId: "coreQuestiontwo",
      collpseId: "core-question-two",
      cardTitle: "️Chandrashekar’s Feelings for You",
      cardsHeading: "King of Cups + Ten of Cups",
      description: [
        {
          type: "paragraph",
          text:
            "He still loves you, but is emotionally restrained. He wants peace, emotional calm, and possibly a reunion that is safe and lasting — but he's scared or blocked.",
        },
        {
          type: "list",
          items: [
            "He is currently thinking, not acting.",
            "Emotionally, you still live in his heart.",
          ],
        },
      ],
    },
    {
      accordingId: "coreQuestionThree",
      collpseId: "core-question-three",
      cardTitle: "Progress in Second Income Streams",
      cardsHeading: "Seven of Coins",
      description: [
        {
          type: "paragraph",
          text:
            "You're building, not receiving yet. Expect slow progress, especially in creative or side hustle-based areas.",
        },
        {
          type: "list",
          items: [
            "Don’t stop now — your effort is being seen (especially spiritually).",
            "Real results may start showing within 7 days to 2 weeks.",
          ],
        },
      ],
    },
    {
      accordingId: "coreQuestionFour",
      collpseId: "core-question-four",
      cardTitle: "External Forces Working for or Against You",
      cardsHeading: "Seven of Swords",
      description: [
        {
          type: "paragraph",
          text:
            "Yes. There’s interference behind the scenes. It may be someone manipulating or blocking the situation — Radhika, social pressure, or even his own guilt/fear acting like a shadow.",
        },
        {
          type: "list",
          items: ["Trust your instincts — not all energies around you are honest."],
        },
      ],
    },
    {
      accordingId: "coreQuestionFive",
      collpseId: "core-question-five",
      cardTitle: "Chance of Crossing Paths or Visual Contact",
      cardsHeading: "Five of Wands",
      description: [
        {
          type: "paragraph",
          text:
            "Yes, but in a chaotic or crowded environment. Maybe a rushed moment, near others, or in passing. It won’t be intimate, but you might see him or be close by.",
        },
        {
          type: "list",
          items: [
            "There's competition or distraction around, so it won’t be calm.",
            "Most likely time: Late morning or during commute hours.",
          ],
        },
      ],
    },
    {
      accordingId: "coreQuestionSix",
      collpseId: "core-question-six",
      cardTitle: "Start of Communication",
      cardsHeading: "Seven of Swords",
      description: [
        {
          type: "paragraph",
          text:
            "No clear communication today. Someone is withholding, watching silently, or mentally planning. You may feel psychic tension or see signs — but words won’t come yet.",
        },
      ],
    },
    {
      accordingId: "coreQuestionSeven",
      collpseId: "core-question-seven",
      cardTitle: "Chance of Physical Intimacy",
      cardsHeading: "King of Cups",
      description: [
        {
          type: "paragraph",
          text: "Emotionally yes, physically not today. This card shows deep longing.",
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
                    <div>
                      {itm.description.map((block, i) => {
                        if (block.type === "paragraph") {
                          return <p key={`${itm.accordingId}-p-${i}`}>{block.text}</p>;
                        }
                        return (
                          <ul key={`${itm.accordingId}-ul-${i}`} className="list-disc ps-4">
                            {block.items.map((li, j) => (
                              <li key={`${itm.accordingId}-li-${i}-${j}`}>{li}</li>
                            ))}
                          </ul>
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

export default CoreQuestions;
