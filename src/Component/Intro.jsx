import React from "react";
import styled from "styled-components";

function Intro() {
  return (
    <div>
      <StyledHeading className="Center text-center text-[2.4rem] md:text-[2.2rem] font-bold mb-5">
        Yogas in Astrology
      </StyledHeading>
      <StyledContent>
        <p>
          Best yogas in kundli or bad yogas in kundli, whatever you are trying
          to find, your search comes to an end here.
        </p>
        <p>
          Yogas in kundli are one of the most sought elements when it comes to
          kundli prediction by astrologers. Yogas (planetary combination) in
          kundli either form at the time of your birth or owing to planetary
          transits, conjunction, etc., as you happen to live your life. To
          explain in very simple words, any yoga in kundli forms when one
          planet, house or sign enters into a relationship with another planet,
          house or sign through transit, aspect or conjunction. What is
          necessary here is to note down whether the yoga forming in kundli is a
          positive yoga or a negative yoga. Based on the positivity or
          negativity of yoga an astrologer can predict your future.
        </p>
        <p>
          For example, people usually are aware of Raj Yoga in kundli. If you
          have a Raj Yoga in kundli, it means you shall enjoy prosperity and an
          abundance of wealth. However, on the other hand, if you have Daridra
          Yoga, it could bring inauspiciousness or poverty.
        </p>
        <p>
          Apart from Raj Yoga and Daridra Yoga, there are close to 300 more
          yogas that can form in your kundli. Having said that, here is the list
          of all Yogas is astrology.
        </p>
      </StyledContent>
    </div>
  );
}

const StyledHeading = styled.h1`
  font-size: 2.4rem;

  @media (max-width: 1024px) {
    font-size: 2.4rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 660px) {
    font-size: 1.9rem;
  }
  @media (max-width: 600px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }

  @media (max-width: 375px) {
    font-size: 1.2rem;
  }

  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 1.1rem;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 660px) {
    font-size: 12px;
  }
  @media (max-width: 600px) {
    font-size: 11px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
  @media (max-width: 425px) {
    font-size: 9px;
  }

  @media (max-width: 375px) {
    font-size: 9px;
  }

  @media (max-width: 320px) {
    font-size: 9px;
  }
`;

export default Intro;
