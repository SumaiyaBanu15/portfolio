import React, { useState } from "react";
import "./styles.css";
import PageHeaders from "../../common/pageHeader/PageHeaders";
import { BsInfoCircleFill } from "react-icons/bs";
import AirbnbImg from "../../assets/AirBnbImgCopy.jpg";
import BlogImg from "../../assets/LapImg.jpg";
import PswdImg from "../../assets/PswImg.png";
import FoodImg from "../../assets/FoodImg.jpeg";
import TravelImg from "../../assets/travelImg.jpg";
import ChatAppImg from "../../assets/ChatImg.png";
import HeartImg from "../../assets/HeartImg.png";
import DiceImg from "../../assets/DiceGameImg.jpeg";
import ColorGetterImg from "../../assets/ColorGetterImg.jpeg";
import TodoListImg from "../../assets/TodoListImg.jpeg";
import ExpensesImg from "../../assets/expenseImg.jpeg";
import QuizImg from "../../assets/quizImg.jpeg";

const portfolioData = [
  {
    id: 2,
    name: "Airbnb Clone",
    image: AirbnbImg,
    link: "https://zingy-puppy-191dc4.netlify.app",
    code: "https://github.com/SumaiyaBanu15/airbnb-frontend",
  },
  {
    id: 2,
    name: "Chat-APP",
    image: ChatAppImg,
    link: "https://resilient-squirrel-7496d9.netlify.app",
    code: "https://github.com/SumaiyaBanu15/chat_app_socketio_frontend",
  },
  {
    id: 2,
    name: "Blog App",
    image: BlogImg,
    link: "https://keen-speculoos-9848ac.netlify.app",
    code: "https://github.com/SumaiyaBanu15/blog-app-frontend",
  },
  {
    id: 2,
    name: "Password Reset Flow",
    image: PswdImg,
    link: "https://luminous-dolphin-1bd766.netlify.app",
    code: "https://github.com/SumaiyaBanu15/password-reset-flow-frontend",
  },
  {
    id: 2,
    name: "Expenses Tracker App",
    image: ExpensesImg,
    link: "https://expensestrackerfrontend.netlify.app",
    code: "https://github.com/SumaiyaBanu15/expenses_tracker_frontend",
  },
  {
    id: 3,
    name: "Travel Landing Page",
    image: TravelImg,
    link: "https://hilarious-puffpuff-9a2e53.netlify.app",
    code: "https://github.com/SumaiyaBanu15/CSS-Project",
  },
  {
    id: 3,
    name: "Food Order Page",
    image: FoodImg,
    link: "https://ubiquitous-malabi-51b99a.netlify.app",
    code: "https://github.com/SumaiyaBanu15/BootStrap-Project",
  },
  {
    id: 4,
    name: "Quiz Application",
    image: QuizImg,
    link: "https://glistening-marigold-7803c2.netlify.app",
    code: "https://github.com/SumaiyaBanu15/quiz_app",
  },
  {
    id: 4,
    name: "Heart Trail Animation",
    image: HeartImg,
    link: "https://heroic-hotteok-f736c4.netlify.app/",
    code: "https://github.com/SumaiyaBanu15/heart_trail_animation",
  },
  {
    id: 4,
    name: "Dice Game",
    image: DiceImg,
    link: "https://jocular-frangipane-5103e3.netlify.app/",
    code: "https://github.com/SumaiyaBanu15/Dice-Game",
  },
  {
    id: 5,
    name: "Color Getter",
    image: ColorGetterImg,
    link: "https://delightful-chebakia-1d5243.netlify.app/",
    code: "https://github.com/SumaiyaBanu15/color-getter",
  },
  {
    id: 5,
    name: "To do List",
    image: TodoListImg,
    link: "https://stupendous-marigold-11731d.netlify.app/",
    code: "https://github.com/SumaiyaBanu15/todoapp",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
  {
    filterId: 4,
    label: "JavaScript",
  },
  {
    filterId: 5,
    label: "React",
  },
];

function PortFolioPage() {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  const handleFilter = (currentId) => {
    setFilteredValue(currentId);
  };

  const filteredItem =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);

  const handleHover = (index) => {
    setHoveredValue(index);
  };

  const handleVisitLink = (link) => {
    window.open(link, "_blank");
  };

  const handleSrcCode = (code) => {
    window.open(code, "_blank");
  };
  return (
    <>
      <section id="portfolio" className="portfolio">
        <PageHeaders
          headerText="Portfolio"
          icon={<BsInfoCircleFill size={20} />}
        />
        <div className="portfolio_content">
          <ul className="portfolio_filter">
            {filterData.map((item, index) => (
              <li
                className={item.filterId === filteredValue ? "active" : ""}
                onClick={() => handleFilter(item.filterId)}
                key={item.filterId}
              >
                {item.label}
              </li>
            ))}
          </ul>
          <div className="portfolio_cards">
            {filteredItem.map((item, i) => (
              <div
                className="cards_item"
                key={`cardItem ${item.name.trim()}`}
                onMouseEnter={() => handleHover(i)}
                onMouseLeave={() => handleHover(null)}
              >
                <div className="cards_img">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a>
                    <img src={item.image} alt="Project Img" />
                  </a>
                </div>
                <div className="cards_overlay">
                  {i === hoveredValue && (
                    <div>
                      <p>{item.name}</p>
                      <button onClick={() => handleVisitLink(item.link)}>
                        Visit
                      </button>
                      <button onClick={() => handleSrcCode(item.code)}>
                        Code
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default PortFolioPage;
