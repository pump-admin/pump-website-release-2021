import styled from "styled-components";

import PumpDigest from "../../public/home/pump-digest.png";
import ImpactReport from "../../public/home/impact-report.png";
import { CardCarousel, Text } from "../../components";
import { baseTheme } from "../../theme";
import { media } from "../../utils";

export const WhatsHappening = ({ ...props }) => (
  <Wrapper {...props}>
    <Title size={baseTheme.size.h1} bold="true">
      What&apos;s Happening?
    </Title>
    <CarouselWrapper>
      <CardCarousel
        slides={[
          {
            title: "PuMP Digest",
            description:
              "Check out our blog to explore our articles on research, student life, post-secondary education, careers in medicine, and more!",
            thumbnail: PumpDigest,
          },
          {
            title: "Impact Report",
            description:
              "We are heading into our third year of operations! Read about our projects from the 2020-21 fiscal year in our first ever impact report.",
            thumbnail: ImpactReport,
          },
          {
            title: "PowerUp Mentorship",
            description:
              "Explore articles on research, student life, PuMP has partnered up with The STEM Fellowship to launch our mentorship program, PowerUp!",
            thumbnail: PumpDigest,
          },
          {
            title: "PuMP Digest 2",
            description:
              "Check out our blog to explore our articles on research, student life, post-secondary education, careers in medicine, and more!",
            thumbnail: PumpDigest,
          },
          {
            title: "Impact Report 2",
            description:
              "We are heading into our third year of operations! Read about our projects from the 2020-21 fiscal year in our first ever impact report.",
            thumbnail: ImpactReport,
          },
        ]}
      />
    </CarouselWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  margin-bottom: 10vh;
  padding: 0 2%;
  ${media(
    1400,
    `   
            padding: 0 6%;
        `
  )};
`;
const CarouselWrapper = styled.div`
  margin: 0 6%;
  ${media(
    1400,
    `   
            margin: auto;
        `
  )};
`;
const Title = styled(Text)`
  padding: 0 5%;
  ${({ theme }) => `
      font-family: ${theme.font.josefin};
      color: ${theme.colors.navy};
  `};
`;
