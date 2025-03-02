// import React from "react";
// import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

// import Card from "../common/card";

// import "./styles/works.css";

// const Works = () => {
// 	return (
// 		<div className="works">
// 			<Card
// 				icon={faBriefcase}
// 				title="Work"
// 				body={
// 					<div className="works-body">
// 						<div className="work">
// 							<img
// 								src="./facebook.png"
// 								alt="facebook"
// 								className="work-image"
// 							/>
// 							<div className="work-title">Facebook</div>
// 							<div className="work-subtitle">
// 								Software Engineer
// 							</div>
// 							<div className="work-duration">2019 - Present</div>
// 						</div>

// 						<div className="work">
// 							<img
// 								src="./twitter.png"
// 								alt="twitter"
// 								className="work-image"
// 							/>
// 							<div className="work-title">Twitter</div>
// 							<div className="work-subtitle">
// 								Software Engineer
// 							</div>
// 							<div className="work-duration">2019 - Present</div>
// 						</div>
// 					</div>
// 				}
// 			/>
// 		</div>
// 	);
// };

// export default Works;

import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
  icon={faBriefcase}
  title="Work"
  body={
    <div className="works-body">
      <div className="work">
        <img
          src=".\download (12).jpg"
          alt="Xcrino Business Solutions"
          className="work-image"
        />
        <div className="work-title">Xcrino Business Solutions Pvt Ltd, New Delhi</div>
        <div className="work-subtitle">
          PHP Laravel Developer
          <br /> October - Present
        </div>
      </div>

      <br />

      <div className="work">
        <img
          src=".\Clglogo.png"
          alt="college"
          className="work-image"
        />
        <div className="work-title">Babu Banarasi Das University, Lucknow</div>
        <div className="work-subtitle">
          I completed my Bachelor of Technology in Computer Science <br />
          From Babu Banarasi Das University, Lucknow.
          <br /> 2019 - 2023
        </div>
      </div>
    </div>
  }
/>

			<Card
				icon={faBriefcase}
				title="Key-skills"
				body={
					<div className="family">
						<div className="work">
					PHP |
					LARAVEL |
					TAILWIND |
					GIT |
					GITHUB |
					MYSQL |
					JAVA |
					HTML |
					CSS |
					Javascript |
					ReactJS |
					Bootstrap |
					NodeJS |
					MongoDB |
					ExpresJS.
							
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;

