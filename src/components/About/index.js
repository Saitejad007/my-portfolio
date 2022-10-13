import {
  AboutContainer,
  Card,
  ByteText,
  Image,
  TextContainer,
  AvatarContainer,
  Button,
  Span,
  Title,
} from "./styles";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const About = () => {
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

      y: 0,
      transition: {
        type: "spring",
        ease: "easeInOut",
        duration: 0.6,
        mass: 2,
        stiffness: 100,
      },
    },
    hidden: { opacity: 0, y: 200 },
  };

  return (
    <AboutContainer id="about">
      <Title
        as={motion.h5}
        ref={ref}
        variants={scrollMotionAnime}
        initial="hidden"
        animate={control}
      >
        Know Who I am
      </Title>
      <Card>
        <AvatarContainer>
          <Image
            as={motion.img}
            ref={ref}
            variants={scrollMotionAnime}
            initial="hidden"
            animate={control}
            alt="saiteja avatar"
            src="https://res.cloudinary.com/dzdh52ops/image/upload/v1663340263/Portfolio%20resources/DSC_0976_fyisbr.jpg"
          />
          <Button
            as={motion.a}
            ref={ref}
            variants={scrollMotionAnime}
            initial="hidden"
            animate={control}
            href="https://drive.google.com/file/d/19H-6KJU5ZBn-XoiEImr71etlzMtQiId0/view?usp=sharing"
            download
            target="_blank"
          >
            <Span>
              Download Resume
              <FileDownloadIcon
                sx={{
                  fontSize: "1.1rem",
                }}
              />
            </Span>
          </Button>
        </AvatarContainer>
        <TextContainer>
          <ByteText
            as={motion.p}
            ref={ref}
            variants={scrollMotionAnime}
            initial="hidden"
            animate={control}
          >
            Hey, I'm Sai Teja. I am a frontend web developer with 2.8 years
            experience in the industry. I am capable of writing efficient code
            and building performant websites using web technologies such as
            ReactJs, CSS and Bootstrap and also comfortable working with backend
            technologies NodeJS, Express and MySql.
          </ByteText>
          <ByteText
            as={motion.p}
            ref={ref}
            variants={scrollMotionAnime}
            initial="hidden"
            animate={control}
          >
            I am passionate about building user - friendly websites,
            applications and modern web applications. I actively seek out new
            technologies and stay up-to-date on industry trends and
            advancements. My passion for my work greatly assists me in learning
            quickly and delivering exceptional work.
          </ByteText>
        </TextContainer>
      </Card>
    </AboutContainer>
  );
};

export default About;
