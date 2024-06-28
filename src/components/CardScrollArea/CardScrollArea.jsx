
import testImage1 from "../../assets/images/test1.jpeg";
import testImage2 from "../../assets/images/test2.jpeg";
import testImage3 from "../../assets/images/test3.jpeg";
import testImage4 from "../../assets/images/test4.jpeg";
import testImage5 from "../../assets/images/test5.jpeg";
import testImage6 from "../../assets/images/test6.jpeg";
import testImage7 from "../../assets/images/test7.jpeg";

import "./CardScrollArea.scss";

export function CardScrollArea() {
    return (
        <section className="scroll">
            <div className="scroll__container">
                <div className="scroll__list">
                    {/* List of cards goes here */}
                    <img className="scroll__image" src={testImage1} alt="" />
                    <img className="scroll__image" src={testImage2} alt="" />
                    <img className="scroll__image" src={testImage3} alt="" />
                    <img className="scroll__image" src={testImage4} alt="" />
                    <img className="scroll__image" src={testImage5} alt="" />
                    <img className="scroll__image" src={testImage6} alt="" />
                    <img className="scroll__image" src={testImage7} alt="" />
                    {/* Add more cards as needed */}
                </div>
            </div>
        </section>
    );
}