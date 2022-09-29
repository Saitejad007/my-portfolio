import {
  Container,
  SkillsContainer,
  SkillCard,
  Text,
  Image,
  Title,
} from "./styles";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Skills = () => {
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

      transition: { type: "tween", ease: "easeIn", duration: 0.5, dealy: 0.5 },
    },
    hidden: { opacity: 0, scale: 0.5 },
  };
  return (
    <Container id="skills">
      <Title
        as={motion.h3}
        ref={ref}
        variants={scrollMotionAnime}
        initial="hidden"
        animate={control}
      >
        Know My Skills
      </Title>
      <SkillsContainer
        as={motion.div}
        ref={ref}
        variants={scrollMotionAnime}
        initial="hidden"
        animate={control}
      >
        <SkillCard href="https://www.w3schools.com/html/" target="_blank">
          <Image
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjRTY1MTAwIiBkPSJNNDEsNUg3bDMsMzRsMTQsNGwxNC00TDQxLDVMNDEsNXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkY2RDAwIiBkPSJNMjQgOEwyNCAzOS45IDM1LjIgMzYuNyAzNy43IDh6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTI0LDI1di00aDguNmwtMC43LDExLjVMMjQsMzUuMXYtNC4ybDQuMS0xLjRsMC4zLTQuNUgyNHogTTMyLjksMTdsMC4zLTRIMjR2NEgzMi45eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNFRUUiIGQ9Ik0yNCwzMC45djQuMmwtNy45LTIuNkwxNS43LDI3aDRsMC4yLDIuNUwyNCwzMC45eiBNMTkuMSwxN0gyNHYtNGgtOS4xbDAuNywxMkgyNHYtNGgtNC42TDE5LjEsMTd6Ij48L3BhdGg+PC9zdmc+"
          />
          <Text>HTML</Text>
        </SkillCard>
        <SkillCard
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
        >
          <Image
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjMDI3N0JEIiBkPSJNNDEsNUg3bDMsMzRsMTQsNGwxNC00TDQxLDVMNDEsNXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDM5QkU1IiBkPSJNMjQgOEwyNCAzOS45IDM1LjIgMzYuNyAzNy43IDh6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTMzLjEgMTNMMjQgMTMgMjQgMTcgMjguOSAxNyAyOC42IDIxIDI0IDIxIDI0IDI1IDI4LjQgMjUgMjguMSAyOS41IDI0IDMwLjkgMjQgMzUuMSAzMS45IDMyLjUgMzIuNiAyMSAzMi42IDIxeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNFRUUiIGQ9Ik0yNCwxM3Y0aC04LjlsLTAuMy00SDI0eiBNMTkuNCwyMWwwLjIsNEgyNHYtNEgxOS40eiBNMTkuOCwyN2gtNGwwLjMsNS41bDcuOSwyLjZ2LTQuMmwtNC4xLTEuNEwxOS44LDI3eiI+PC9wYXRoPjwvc3ZnPg=="
          />
          <Text>CSS</Text>
        </SkillCard>
        <SkillCard
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
        >
          <Image
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjZmZkNjAwIiBkPSJNNiw0MlY2aDM2djM2SDZ6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzAwMDAwMSIgZD0iTTI5LjUzOCAzMi45NDdjLjY5MiAxLjEyNCAxLjQ0NCAyLjIwMSAzLjAzNyAyLjIwMSAxLjMzOCAwIDIuMDQtLjY2NSAyLjA0LTEuNTg1IDAtMS4xMDEtLjcyNi0xLjQ5Mi0yLjE5OC0yLjEzM2wtLjgwNy0uMzQ0Yy0yLjMyOS0uOTg4LTMuODc4LTIuMjI2LTMuODc4LTQuODQxIDAtMi40MSAxLjg0NS00LjI0NCA0LjcyOC00LjI0NCAyLjA1MyAwIDMuNTI4LjcxMSA0LjU5MiAyLjU3M2wtMi41MTQgMS42MDdjLS41NTMtLjk4OC0xLjE1MS0xLjM3Ny0yLjA3OC0xLjM3Ny0uOTQ2IDAtMS41NDUuNTk3LTEuNTQ1IDEuMzc3IDAgLjk2NC42IDEuMzU0IDEuOTg1IDEuOTUxbC44MDcuMzQ0QzM2LjQ1MiAyOS42NDUgMzggMzAuODM5IDM4IDMzLjUyMyAzOCAzNi40MTUgMzUuNzE2IDM4IDMyLjY1IDM4Yy0yLjk5OSAwLTQuNzAyLTEuNTA1LTUuNjUtMy4zNjhMMjkuNTM4IDMyLjk0N3pNMTcuOTUyIDMzLjAyOWMuNTA2LjkwNiAxLjI3NSAxLjYwMyAyLjM4MSAxLjYwMyAxLjA1OCAwIDEuNjY3LS40MTggMS42NjctMi4wNDNWMjJoMy4zMzN2MTEuMTAxYzAgMy4zNjctMS45NTMgNC44OTktNC44MDUgNC44OTktMi41NzcgMC00LjQzNy0xLjc0Ni01LjE5NS0zLjM2OEwxNy45NTIgMzMuMDI5eiI+PC9wYXRoPjwvc3ZnPg=="
          />
          <Text>JavaScript</Text>
        </SkillCard>
        <SkillCard href="https://reactjs.org/" target="_blank">
          <Image
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjODBkZWVhIiBkPSJNMjQsMzRDMTEuMSwzNCwxLDI5LjYsMSwyNGMwLTUuNiwxMC4xLTEwLDIzLTEwYzEyLjksMCwyMyw0LjQsMjMsMTBDNDcsMjkuNiwzNi45LDM0LDI0LDM0eiBNMjQsMTYJYy0xMi42LDAtMjEsNC4xLTIxLDhjMCwzLjksOC40LDgsMjEsOHMyMS00LjEsMjEtOEM0NSwyMC4xLDM2LjYsMTYsMjQsMTZ6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzgwZGVlYSIgZD0iTTE1LjEsNDQuNmMtMSwwLTEuOC0wLjItMi42LTAuN0M3LjYsNDEuMSw4LjksMzAuMiwxNS4zLDE5bDAsMGMzLTUuMiw2LjctOS42LDEwLjMtMTIuNGMzLjktMyw3LjQtMy45LDkuOC0yLjUJYzIuNSwxLjQsMy40LDQuOSwyLjgsOS44Yy0wLjYsNC42LTIuNiwxMC01LjYsMTUuMmMtMyw1LjItNi43LDkuNi0xMC4zLDEyLjRDMTkuNyw0My41LDE3LjIsNDQuNiwxNS4xLDQ0LjZ6IE0zMi45LDUuNAljLTEuNiwwLTMuNywwLjktNiwyLjdjLTMuNCwyLjctNi45LDYuOS05LjgsMTEuOWwwLDBjLTYuMywxMC45LTYuOSwyMC4zLTMuNiwyMi4yYzEuNywxLDQuNSwwLjEsNy42LTIuM2MzLjQtMi43LDYuOS02LjksOS44LTExLjkJYzIuOS01LDQuOC0xMC4xLDUuNC0xNC40YzAuNS00LTAuMS02LjgtMS44LTcuOEMzNCw1LjYsMzMuNSw1LjQsMzIuOSw1LjR6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzgwZGVlYSIgZD0iTTMzLDQ0LjZjLTUsMC0xMi4yLTYuMS0xNy42LTE1LjZDOC45LDE3LjgsNy42LDYuOSwxMi41LDQuMWwwLDBDMTcuNCwxLjMsMjYuMiw3LjgsMzIuNywxOQljMyw1LjIsNSwxMC42LDUuNiwxNS4yYzAuNyw0LjktMC4zLDguMy0yLjgsOS44QzM0LjcsNDQuNCwzMy45LDQ0LjYsMzMsNDQuNnogTTEzLjUsNS44Yy0zLjMsMS45LTIuNywxMS4zLDMuNiwyMi4yCWM2LjMsMTAuOSwxNC4xLDE2LjEsMTcuNCwxNC4yYzEuNy0xLDIuMy0zLjgsMS44LTcuOGMtMC42LTQuMy0yLjUtOS40LTUuNC0xNC40QzI0LjYsOS4xLDE2LjgsMy45LDEzLjUsNS44TDEzLjUsNS44eiI+PC9wYXRoPjxjaXJjbGUgY3g9IjI0IiBjeT0iMjQiIHI9IjQiIGZpbGw9IiM4MGRlZWEiPjwvY2lyY2xlPjwvc3ZnPg=="
          />
          <Text>React</Text>
        </SkillCard>
        <SkillCard href="https://nodejs.org/en/" target="_blank">
          <Image
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjMjFhMzY2IiBkPSJNMjQuMDA3LDQ1LjQxOWMtMC41NzQsMC0xLjE0My0wLjE1LTEuNjQ2LTAuNDRsLTUuMjQtMy4xMDNjLTAuNzgzLTAuNDM4LTAuNDAxLTAuNTkzLTAuMTQzLTAuNjgyCWMxLjA0NC0wLjM2NSwxLjI1NS0wLjQ0OCwyLjM2OS0xLjA4MWMwLjExNy0wLjA2NywwLjI3LTAuMDQzLDAuMzksMC4wMjhsNC4wMjYsMi4zODljMC4xNDUsMC4wNzksMC4zNTIsMC4wNzksMC40ODYsMGwxNS42OTctOS4wNjEJYzAuMTQ1LTAuMDgzLDAuMjQtMC4yNTEsMC4yNC0wLjQyNFYxNC45MzJjMC0wLjE4MS0wLjA5NC0wLjM0Mi0wLjI0My0wLjQzMkwyNC4yNTMsNS40NDZjLTAuMTQ1LTAuMDg2LTAuMzM4LTAuMDg2LTAuNDgzLDAJTDguMDgyLDE0LjQ5OWMtMC4xNTIsMC4wODYtMC4yNDksMC4yNTUtMC4yNDksMC40Mjh2MTguMTE0YzAsMC4xNzMsMC4wOTQsMC4zMzgsMC4yNDQsMC40Mmw0LjI5OSwyLjQ4MwljMi4zMzQsMS4xNjcsMy43Ni0wLjIwOCwzLjc2LTEuNTkxVjE2LjQ3NmMwLTAuMjU1LDAuMi0wLjQ1MiwwLjQ1Ni0wLjQ1MmgxLjk4OGMwLjI0OCwwLDAuNDUyLDAuMTk2LDAuNDUyLDAuNDUydjE3Ljg4NgljMCwzLjExMi0xLjY5Nyw0LjktNC42NDgsNC45Yy0wLjkwOCwwLTEuNjIzLDAtMy42MTktMC45ODJsLTQuMTE4LTIuMzczQzUuNjI5LDM1LjMxNyw1LDM0LjIxNiw1LDMzLjA0MlYxNC45MjgJYzAtMS4xNzksMC42MjktMi4yNzksMS42NDYtMi44NjFMMjIuMzYsMy4wMDJjMC45OTQtMC41NjIsMi4zMTQtMC41NjIsMy4zMDEsMGwxNS42OTQsOS4wNjlDNDIuMzY3LDEyLjY1Niw0MywxMy43NTMsNDMsMTQuOTMyCXYxOC4xMTRjMCwxLjE3NS0wLjYzMywyLjI3MS0xLjY0NiwyLjg2MUwyNS42Niw0NC45NzFjLTAuNTAzLDAuMjkxLTEuMDczLDAuNDQtMS42NTQsMC40NCI+PC9wYXRoPjxwYXRoIGZpbGw9IiMyMWEzNjYiIGQ9Ik0yOC44NTYsMzIuOTM3Yy02Ljg2OCwwLTguMzA4LTMuMTUzLTguMzA4LTUuNzk3YzAtMC4yNTEsMC4yMDMtMC40NTIsMC40NTUtMC40NTJoMi4wMjgJYzAuMjI0LDAsMC40MTMsMC4xNjMsMC40NDgsMC4zODRjMC4zMDYsMi4wNjYsMS4yMTgsMy4xMDgsNS4zNzEsMy4xMDhjMy4zMDgsMCw0LjcxNS0wLjc0Nyw0LjcxNS0yLjUwMgljMC0xLjAxLTAuNDAxLTEuNzYtNS41NC0yLjI2M2MtNC4yOTktMC40MjQtNi45NTUtMS4zNzEtNi45NTUtNC44MDljMC0zLjE2NywyLjY3Mi01LjA1Myw3LjE0Ny01LjA1MwljNS4wMjYsMCw3LjUxNywxLjc0NSw3LjgzMSw1LjQ5M2MwLjAxMiwwLjEzLTAuMDM1LDAuMjU1LTAuMTIyLDAuMzVjLTAuMDg2LDAuMDktMC4yMDgsMC4xNDUtMC4zMzQsMC4xNDVoLTIuMDM5CWMtMC4yMTIsMC0wLjM5Ny0wLjE0OS0wLjQ0LTAuMzU0Yy0wLjQ5MS0yLjE3My0xLjY3OC0yLjg2OC00LjkwNC0yLjg2OGMtMy42MTEsMC00LjAzMSwxLjI1Ny00LjAzMSwyLjIJYzAsMS4xNDMsMC40OTUsMS40NzcsNS4zNjcsMi4xMjJjNC44MjUsMC42NCw3LjExNiwxLjU0NCw3LjExNiw0LjkzNWMwLDMuNDE4LTIuODUzLDUuMzc5LTcuODI3LDUuMzc5Ij48L3BhdGg+PC9zdmc+"
          />
          <Text>Node.js</Text>
        </SkillCard>
        <SkillCard href="https://getbootstrap.com/" target="_blank">
          <Image
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjNjczYWI3IiBkPSJNNDIsMzdjMCwyLjc2Mi0yLjIzOCw1LTUsNUgxMWMtMi43NjEsMC01LTIuMjM4LTUtNVYxMWMwLTIuNzYyLDIuMjM5LTUsNS01aDI2YzIuNzYyLDAsNSwyLjIzOCw1LDUgVjM3eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zMy4wMywyNS42Yy0wLjY1LTAuOS0xLjU5LTEuNTItMi44LTEuODVjMCwwLDEuMDItMC4zNywxLjk0LTEuNzVjMC41NS0wLjg4LDAuODMtMS45NCwwLjgzLTMuMTggYzAtMi4xNS0wLjc4LTMuOC0yLjM0LTQuOTNDMjkuMSwxMi43NiwyNy4zNCwxMiwyNC4zNSwxMkgxNXYyNGgxMC40M2MyLjgzLTAuMDIsNC45Ni0wLjYzLDYuNDEtMS44YzEuNDQtMS4xOSwyLjE2LTIuOTUsMi4xNi01LjMgQzM0LDI3LjYsMzMuNjgsMjYuNSwzMy4wMywyNS42eiBNMjEsMTZjMCwwLDQuMTcsMCw0LjI1LDBjMS41MiwwLDIuNzUsMS4yMywyLjc1LDIuNzVjMCwxLjUyLTEuMjMsMi43NS0yLjc1LDIuNzUgYy0wLjA4LDAtNC4yNSwwLTQuMjUsMFYxNnogTTI2LDMyaC01di02aDVjMS42NiwwLDMsMS4zNCwzLDNDMjksMzAuNjYsMjcuNjYsMzIsMjYsMzJ6Ij48L3BhdGg+PC9zdmc+"
          />
          <Text>Bootstrap</Text>
        </SkillCard>
        <SkillCard href="https://mui.com/" target="_blank">
          <Image
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cG9seWdvbiBmaWxsPSIjMjliNmY2IiBwb2ludHM9IjEsNSA3LDkgNywyOSAxLDI1Ij48L3BvbHlnb24+PHBvbHlnb24gZmlsbD0iIzAyODhkMSIgcG9pbnRzPSI0NywyMCA0MSwyNCA0MSwzNyA0NywzMyI+PC9wb2x5Z29uPjxwb2x5Z29uIGZpbGw9IiMwMjg4ZDEiIHBvaW50cz0iNDcsNiA0MSwxMCA0MSwxNyA0NywxMyI+PC9wb2x5Z29uPjxwb2x5Z29uIGZpbGw9IiMwMjg4ZDEiIHBvaW50cz0iMzUsNSAyOSw5IDI5LDI5IDM1LDI1Ij48L3BvbHlnb24+PHBvbHlnb24gZmlsbD0iIzI5YjZmNiIgcG9pbnRzPSIxLDEyIDE4LDIzIDE4LDE2IDEsNSI+PC9wb2x5Z29uPjxwb2x5Z29uIGZpbGw9IiMwMjg4ZDEiIHBvaW50cz0iMzUsMTIgMTgsMjMgMTgsMTYgMzUsNSI+PC9wb2x5Z29uPjxwb2x5Z29uIGZpbGw9IiMwMjg4ZDEiIHBvaW50cz0iMzUsMjYgMTgsMzcgMTgsMzAgMzUsMTkiPjwvcG9seWdvbj48cG9seWdvbiBmaWxsPSIjMDI4OGQxIiBwb2ludHM9IjQ3LDM0IDMwLDQ1IDMwLDM4IDQ3LDI3Ij48L3BvbHlnb24+PHBvbHlnb24gZmlsbD0iIzI5YjZmNiIgcG9pbnRzPSIzMCwzNy43NjUgMTgsMzAgMTgsMzcgMzAsNDQuNzY1Ij48L3BvbHlnb24+PC9zdmc+"
          />
          <Text>Material UI</Text>
        </SkillCard>
        <SkillCard href="https://www.python.org/" target="_blank">
          <Image
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjMDI3N0JEIiBkPSJNMjQuMDQ3LDVjLTEuNTU1LDAuMDA1LTIuNjMzLDAuMTQyLTMuOTM2LDAuMzY3Yy0zLjg0OCwwLjY3LTQuNTQ5LDIuMDc3LTQuNTQ5LDQuNjdWMTRoOXYySDE1LjIyaC00LjM1Yy0yLjYzNiwwLTQuOTQzLDEuMjQyLTUuNjc0LDQuMjE5Yy0wLjgyNiwzLjQxNy0wLjg2Myw1LjU1NywwLDkuMTI1QzUuODUxLDMyLjAwNSw3LjI5NCwzNCw5LjkzMSwzNGgzLjYzMnYtNS4xMDRjMC0yLjk2NiwyLjY4Ni01Ljg5Niw1Ljc2NC01Ljg5Nmg3LjIzNmMyLjUyMywwLDUtMS44NjIsNS00LjM3N3YtOC41ODZjMC0yLjQzOS0xLjc1OS00LjI2My00LjIxOC00LjY3MkMyNy40MDYsNS4zNTksMjUuNTg5LDQuOTk0LDI0LjA0Nyw1eiBNMTkuMDYzLDljMC44MjEsMCwxLjUsMC42NzcsMS41LDEuNTAyYzAsMC44MzMtMC42NzksMS40OTgtMS41LDEuNDk4Yy0wLjgzNywwLTEuNS0wLjY2NC0xLjUtMS40OThDMTcuNTYzLDkuNjgsMTguMjI2LDksMTkuMDYzLDl6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0ZGQzEwNyIgZD0iTTIzLjA3OCw0M2MxLjU1NS0wLjAwNSwyLjYzMy0wLjE0MiwzLjkzNi0wLjM2N2MzLjg0OC0wLjY3LDQuNTQ5LTIuMDc3LDQuNTQ5LTQuNjdWMzRoLTl2LTJoOS4zNDNoNC4zNWMyLjYzNiwwLDQuOTQzLTEuMjQyLDUuNjc0LTQuMjE5YzAuODI2LTMuNDE3LDAuODYzLTUuNTU3LDAtOS4xMjVDNDEuMjc0LDE1Ljk5NSwzOS44MzEsMTQsMzcuMTk0LDE0aC0zLjYzMnY1LjEwNGMwLDIuOTY2LTIuNjg2LDUuODk2LTUuNzY0LDUuODk2aC03LjIzNmMtMi41MjMsMC01LDEuODYyLTUsNC4zNzd2OC41ODZjMCwyLjQzOSwxLjc1OSw0LjI2Myw0LjIxOCw0LjY3MkMxOS43MTksNDIuNjQxLDIxLjUzNiw0My4wMDYsMjMuMDc4LDQzeiBNMjguMDYzLDM5Yy0wLjgyMSwwLTEuNS0wLjY3Ny0xLjUtMS41MDJjMC0wLjgzMywwLjY3OS0xLjQ5OCwxLjUtMS40OThjMC44MzcsMCwxLjUsMC42NjQsMS41LDEuNDk4QzI5LjU2MywzOC4zMiwyOC44OTksMzksMjguMDYzLDM5eiI+PC9wYXRoPjwvc3ZnPg=="
          />
          <Text>Python</Text>
        </SkillCard>
      </SkillsContainer>
    </Container>
  );
};

export default Skills;
