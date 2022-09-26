import {
  Container,
  SapnElement,
  TypeEffectCOntainer,
  NameContainer,
  Name,
  Scroller,
  Button,
} from "./styles";
import Typewriter from "typewriter-effect";
import "./index.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Home = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const scrollMotionAnime = {
    visible: {
      opacity: 1,

      scale: 1,
      transition: {
        ease: "easeIn",
        duration: 0.5,
        dealy: 0.5,
      },
    },
    hidden: { opacity: 0, scale: 0.5 },
  };

  return (
    <Container id="home">
      <NameContainer
        as={motion.div}
        ref={ref}
        variants={scrollMotionAnime}
        initial="hidden"
        animate={control}
      >
        <Name>
          Hi there! I'm <SapnElement> Sai Teja</SapnElement>
        </Name>
        <div id="target">👋🏻</div>
      </NameContainer>
      <TypeEffectCOntainer
        as={motion.div}
        ref={ref}
        variants={scrollMotionAnime}
        initial="hidden"
        animate={control}
      >
        <Scroller>I'm a </Scroller>
        <Typewriter
          options={{
            strings: [
              "Software Engineer",
              "Frontend Developer",
              "Web Developer",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </TypeEffectCOntainer>
      <Button href="https://linkedin.com/in/saiteja-devineni" target="_blank">
        Hire me
      </Button>
    </Container>
  );
};

export default Home;
