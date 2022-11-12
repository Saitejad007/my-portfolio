import Project from "./Project";
import { Container, ProjectsContainer, MainTitle } from "./styles";
import { v4 as uuidv4 } from "uuid";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import '../../assets/images/Chatify.png'

const projectsList = [
  {
    id: uuidv4(),
    name: "Chatify",
    previewUrl: 'https://res.cloudinary.com/dzdh52ops/image/upload/v1668265269/Portfolio%20resources/Chatify_rsxsjb.png',
    description: 'Chatify is a realtime chat application for ease of communication.',
    githubLink: "https://github.com/Saitejad007/Chatify-client.git",
    websiteUrl: "https://chatify-client.onrender.com",
  },
  {
    id: uuidv4(),
    name: "React Weather Station",
    previewUrl:
      "https://res.cloudinary.com/dzdh52ops/image/upload/v1665575202/Portfolio%20resources/react-weather-station-preview_kbxam9.png",
    description:
      "Nxt Watch application is a clone for YouTube where users can log in and can see a list of videos like Trending, Gaming, Saved videos, and also an search videos and view specific video details, and users can toggle the theme (Light/Dark).",
    githubLink: "https://github.com/Saitejad007/React-Weather-Application",
    websiteUrl: "https://react-weather-station.netlify.app",
  },
  {
    id: uuidv4(),
    name: "My Portfolio",
    previewUrl:
      "https://res.cloudinary.com/dzdh52ops/image/upload/v1664098978/Portfolio%20resources/portfolio_snip_zflxr1.png",
    description:
      "Nxt Watch application is a clone for YouTube where users can log in and can see a list of videos like Trending, Gaming, Saved videos, and also an search videos and view specific video details, and users can toggle the theme (Light/Dark).",
    githubLink: "https://github.com/Saitejad007/my-portfolio.git",
    websiteUrl: "https://saiteja7-portfolio.netlify.app",
  },
  {
    id: uuidv4(),
    name: "NxtTrendz - Ecommerce App",
    previewUrl:
      "https://res.cloudinary.com/dzdh52ops/image/upload/v1663340261/Portfolio%20resources/NxtTrendz_fjlnol.png",
    description:
      "Nxt Trendz application is a clone for ECommerce applications like Amazon, Flipkart where users can login and can see list of products with search, filters, sort by, etc..",
    githubLink: "https://github.com/Saitejad007",
    websiteUrl: "https://nxttrendzapp41.ccbp.tech",
  },
  {
    id: uuidv4(),
    name: "NxtWatch App",
    previewUrl:
      "https://res.cloudinary.com/dzdh52ops/image/upload/v1663340262/Portfolio%20resources/NxtWatch_qsduyh.png",
    description:
      "Nxt Watch application is a clone for YouTube where users can log in and can see a list of videos like Trending, Gaming, Saved videos, and also an search videos and view specific video details, and users can toggle the theme (Light/Dark).",
    githubLink: "https://github.com/Saitejad007/nxt-watch-app.git",
    websiteUrl: "https://nxtwatchapp41.ccbp.tech",
  },
  {
    id: uuidv4(),
    name: "MetroDelight App",
    previewUrl:
      "https://res.cloudinary.com/dzdh52ops/image/upload/v1663340263/Portfolio%20resources/MetroDelight_dlzifp.png",
    description:
      "Metro Delight application is a responsive website for Food Store where users can see a list of food items, detailed information about a food item, offers etc",
    githubLink: "https://github.com/Saitejad007",
    websiteUrl: "https://tejmetrodelight.ccbp.tech",
  },
  {
    id: uuidv4(),
    name: "Popular Github Repos App",
    previewUrl:
      "https://res.cloudinary.com/dzdh52ops/image/upload/v1663340260/Portfolio%20resources/Gitrepos_u5ou86.png",
    description:
      "Popular Github repos is a web application where user can see popular github repos and can be filtered through a selected programming language.",
    githubLink:
      "https://github.com/Saitejad007/popular-github-repos-project.git",
    websiteUrl: "https://poplrgitrepos41.ccbp.tech",
  },
  {
    id: uuidv4(),
    name: "ToDo - Task manager App",
    previewUrl:
      "https://res.cloudinary.com/dzdh52ops/image/upload/v1663340260/Portfolio%20resources/TodoApp_bml1g7.png",
    description:
      "Todos is a persistent application with CRUD operations to track list of tasks and manage day-to-day activities. We can do tasks like add Todo, delete, save and completed actions with the Todos application.",
    githubLink: "https://github.com/Saitejad007",
    websiteUrl: "https://tejtodoapp4041.ccbp.tech",
  },
];

const Work = () => {
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
        ease: "easeIn",
        duration: 0.5,
        dealy: 0.5,
      },
    },
    hidden: { opacity: 0, y: 200 },
  };

  return (
    <Container id="work">
      <MainTitle
        as={motion.h3}
        ref={ref}
        variants={scrollMotionAnime}
        initial="hidden"
        animate={control}
      >
        Work Details
      </MainTitle>
      <ProjectsContainer
        as={motion.ul}
        ref={ref}
        variants={scrollMotionAnime}
        initial="hidden"
        animate={control}
      >
        {projectsList.map((eachProject) => (
          <Project projectDetails={eachProject} key={eachProject.id} />
        ))}
      </ProjectsContainer>
    </Container>
  );
};

export default Work;
