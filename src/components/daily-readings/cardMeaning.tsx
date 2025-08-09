"use client"
import React from "react";
import 'swiper/css/bundle';
import Image from "next/image";
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
interface CardMeaningProps {
    title: string;
}

const CardMeaning: React.FC<CardMeaningProps> = ({ title }) => {
    useFlashlightAnimation();

    const accordion = [
        {
            accordingId: "dailyLesson",
            collpseId: "daily-lesson",
            cardTitle: "Daily Lesson - Page of Wands",
            coreTheme: "<h6>Core Theme :</h6> Conflict, tension, competition, inner struggle",
            description: `<h6>Meaning :</h6> This shows inner and outer conflict or tension. There may be chaotic energies, competition for
attention or space (especially emotional space). It could reflect your own emotional push-pull or the
presence of others (like Radhika) stirring things indirectly.`,
            message: "<h6>Lesson:</h6> Stay centered despite outer chaos. Choose inner peace over reactive action.",
            image: 18
        },
        {
            accordingId: "dailyChallenge",
            collpseId: "daily-challenge",
            cardTitle: "Daily Challenge - Seven of Swords",
            coreTheme: "<h6>Core Theme :</h6> Deception, secrecy, avoidance, strategy",
            description: `<h6>Meaning :</h6> This is the card of secrets, strategy, avoidance, or hidden moves. Someone is likely not being fully
honest or upfront — this could be Chandrashekar avoiding a clear stance, or Radhika operating behind
the scenes.`,
            message: "<h6>Challenge:</h6> You may not be seeing the full truth — so move with caution and don’t act blindly.",
            image: 12
        },
        {
            accordingId: "dailySituation",
            collpseId: "daily-situation",
            cardTitle: "Situation - Seven of Pentacles",
            coreTheme: "<h6>Core Theme :</h6> Patience, slow growth, waiting for results",
            description: `<h6>Meaning :</h6> This is a card of long-term investments, especially emotionally or financially. You’ve been nurturing
something that still hasn’t bloomed, but it is growing. This applies to both your love life and second
income streams.`,
            message: "<h6>Core Message:</h6> Be patient. Your seeds are sprouting, just not visible yet.",
            image: 22,
        },
        {
            accordingId: "dailyAdvice",
            collpseId: "daily-advice",
            cardTitle: "Advice - Ten of Cups",
            coreTheme: "<h6>Core Theme :</h6> Emotional fulfillment, harmony, lasting joy",
            description: `<h6>Meaning :</h6> This card represents the ideal emotional future — a loving family, union, joy, and soul peace. It tells you:
hold the vision. Don’t settle for a lesser outcome. What you desire emotionally can be yours, but only if
you don’t give up too soon.`,
            message: "<h6>Advice:</h6> Stay aligned with emotional wholeness and love, not pain or revenge.",
            image: 13
        },
        {
            accordingId: "dailyNearFuture",
            collpseId: "daily-near-future",
            cardTitle: "Near Future - King of Cups",
            coreTheme: "<h6>Core Theme :</h6> Deep feelings, emotional maturity, love with restraint",
            description: `<h6>Meaning :</h6> This is often Chandrashekar’s energy in your spreads. It shows a man with deep love but emotional
control. He feels, but doesn’t express. In the near future, he will be emotionally stirred—but may stay
silent.`,
            message: "<h6>Prediction:</h6> Deep emotions will rise in him by late evening or tomorrow—but he’ll act subtly.",
            image: 31
        }
    ];

    return (
        <>
            <div className="about-info-wrapper mb-30">
                <div className="accordion accordion-general" id="cardMeaning">
                    {accordion.map((itm, index) => (
                        <div key={index} className="accordion-item light-effect">
                            <h2
                                className="accordion-header"
                                id={itm.accordingId}
                            >
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
                                data-bs-parent="#cardMeaning"
                            >
                                <div className="accordion-body">
                                    <div className="row">
                                        <div className="col-10">
                                            <div className="row">
                                                <div className="col-12 m-2" dangerouslySetInnerHTML={{ __html: itm.coreTheme }}>
                                                </div>
                                                <div className="col-12 m-2" dangerouslySetInnerHTML={{ __html: itm.description }}>

                                                </div>
                                                <div className="col-12 m-2" dangerouslySetInnerHTML={{ __html: itm.message }}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="flex flex-col md:items-end m-4 p-4">
                                                <div className="flex justify-center md:justify-end gap-2 mb-4">
                                                    <Image
                                                        src={`/cards/${itm.image}.jpg`}
                                                        alt={`Card ${itm.image}`}
                                                        width={90}
                                                        height={120}
                                                        className="m-2"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CardMeaning;
