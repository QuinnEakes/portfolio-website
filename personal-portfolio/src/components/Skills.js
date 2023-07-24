import meter1 from "../assets/img/meter1.svg";
import cppLogo from "../assets/img/cpp-logo.png";
import unityLogo from "../assets/img/unity-logo.png";
import csharpLogo from "../assets/img/csharp-logo.png";
import gitLogo from "../assets/img/git-logo.png";
import reactLogo from "../assets/img/react-logo.png";
import tsLogo from "../assets/img/ts-logo.png";
import ue5Logo from "../assets/img/ue5-logo.png";
import mayaLogo from "../assets/img/maya-logo.png";
import photoLogo from "../assets/img/photopea-logo.png";
import pythonLogo from "../assets/img/python-logo.png";
import sqlLogo from "../assets/img/sql-logo.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p><br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={unityLogo} alt="Image" />
                                <h5>Unity Engine</h5>
                            </div>
                            <div className="item">
                                <img src={csharpLogo} alt="Image" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={gitLogo} alt="Image" />
                                <h5>Git (Source Control)</h5>
                            </div>
                            <div className="item">
                                <img src={ue5Logo} alt="Image" />
                                <h5>Unreal Engine 5</h5>
                            </div>
                            <div className="item">
                                <img src={cppLogo} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={reactLogo} alt="Image" />
                                <h5>React Framework</h5>
                            </div>
                            <div className="item">
                                <img src={tsLogo} alt="Image" />
                                <h5>Typescript</h5>
                            </div>
                            <div className="item">
                                <img src={mayaLogo} alt="Image" />
                                <h5>Autodesk Maya</h5>
                            </div>
                            <div className="item">
                                <img src={photoLogo} alt="Image" />
                                <h5>Photo Editing</h5>
                            </div>
                            <div className="item">
                                <img src={pythonLogo} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={sqlLogo} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
