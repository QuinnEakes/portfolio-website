import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import redumpImg from "../assets/img/redump.png";
import painesImg from "../assets/img/paines.png";
import feedImg from "../assets/img/feed.png";
import bridgeImg from "../assets/img/BridgeBetween.png";
import underImg from "../assets/img/undergrowth.jpg";
import daveImg from "../assets/img/dave.png";
import dndImg from "../assets/img/dndCharacterRoller.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const unityProjects = [
    {
      title: "Redumption",
      description: "UI/UX Design & Development",
      imgUrl: redumpImg,
    },
    {
      title: "Paine's Furniture Emporium",
      description: "UI/UX Design & Development, UI/Environment Art",
      imgUrl: painesImg,
    },
    {
      title: "A Bridge Between",
      description: "UI Design, In Engine Character Animation",
      imgUrl: bridgeImg,
    },
    {
      title: "D.A.V.E.",
      description: "UX Design, 3D Environment/Enemy Artist",
      imgUrl: daveImg,
    },
  ];

  const unrealProjects = [
    {
      title: "Feed the Light",
      description: "Asset Importer",
      imgUrl: feedImg,
    },
    {
      title: "The Undergrowth",
      description: "UI Design and Development, Asset Importer",
      imgUrl: underImg,
    }
  ];

  const otherProjects = [
    {
      title: "DnD Character Creater",
      description: "Character Stat Roller",
      imgUrl: dndImg
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Unity Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Unreal Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Other Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          unityProjects.map((unityProjects, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...unityProjects}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          unrealProjects.map((unrealProjects, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...unrealProjects}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          otherProjects.map((otherProjects, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...otherProjects}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
