import React from "react";

import {
  faClock,
  faUserCircle,
  faCheckCircle,
  faHandPointer
} from "@fortawesome/free-regular-svg-icons";

import {
  IntroductionContainer,
  IntroductionHeader,
  IntroductionFooter
} from "../../components/HomePageComponent/IntroductionComponent/IntroductionComponent";

import {
  DisplayApp,
  DisplayAppContainer
} from "../../components/HomePageComponent/DisplayAppComponent/DisplayAppComponent";

const HomePage = () => {
  return (
    <>
      <IntroductionContainer>
        <IntroductionHeader />
      </IntroductionContainer>

      <DisplayAppContainer>
        <DisplayApp icon={faUserCircle} app="UserApp">
          Involves communication with API https://randomuser.me/api
        </DisplayApp>
        <DisplayApp icon={faClock} app="ClockApp">
          Shows the current date using setInterval with button to show and hide
          the date
        </DisplayApp>
        <DisplayApp icon={faHandPointer} app="ClickerApp">
          Renders the application only when counter quantity is even number
        </DisplayApp>
        <DisplayApp icon={faCheckCircle} app="ToDoListApp">
          Presents yours To-Do list with possibility to add new tasks and marked
          as done the tasks that were finished
        </DisplayApp>
      </DisplayAppContainer>

      <IntroductionContainer>
        <IntroductionFooter />
      </IntroductionContainer>
    </>
  );
};

export default HomePage;
