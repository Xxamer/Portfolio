import { useState } from "react";
import "./know.css";
import computer from "../../images/knowme/computer.png";
import tree from "../../images/knowme/tree.png";
import hand from "../../images/knowme/hand.png";
const KnowSection = () => {
  const [cards] = useState([
    {
      image: computer,
      name: "Soft Skills",
      description: "In the projects I participated in I have been able to learn and improve in these soft skills:",
      list: ["Problem-Solving", "Perseverance", "Patience", "Empathy", "Willing to help", "Teamwork"]
    },
    {
      image: tree,
      name: "Life",
      description: "I am currently living in Las Palmas de Gran Canaria (Spain). But I am willing to move if necessary or if full remote is not possible. ",
      list: ["I’m currently working as a freelancer fullstack developer.", "Learning cybersecurity to improve the security of my projects"]
    },
    {
      image: hand,
      name: "Hobbies",
      description: "Besides programming I have other hobbies that help me to keep my mind relaxed.",
      list: ["Technology", "Cook", "Read", "Videogames", "Play games online"]
    },
    
  ]);

  const [skills] = useState([
    "Ruby On Rails", "Laravel", "Angular","React (This web is made in react!)", "Vue", "Ionic",  "Linux", "React Native", "Docker", "PostgreSQL", "MySQL", "MongoDB", "Python", "Wordpress", "Prestashop" 
  ])
  return (
    <div className="AboutBackground">
      <div className="Container">
        <div className="row">
          {cards.map((card, index) => {
            return (
              <div key={index} className="col-4">
                <div className="KnowCard">
                  <img width="120" height="120" alt={card.name} src={card.image} />
                  <h1 className="SynthTitle BigText">{card.name}</h1>
                  <p className="WhiteText DescriptionCard">{card.description}</p>
                  {card.name === "Life" ?  <div className="KnowLink"> <a target="_blank" href="https://drive.google.com/file/d/1I18HpK_rPjYfs2ptN7tu-XsxtWLql8s1/view?usp=sharing">You can download my Curriculum clicking <span className="SynthFont">here</span>  to get more professional info </a> </div> : null}
                  <ul className="list">
                  {card.list ?  card.list.map((skill, key)=>{
                    return (<li key={key}>{skill}</li>)
                  }) : null}
                  </ul>
                </div>
              </div>
            );
          })}
          <div className="col-12">
            <div className="KnowBigCard">
            <img width="120" height="120" alt="computer synth" src={computer} />
                  <h1 className="SynthTitle BigText">Computer Skills</h1>
                  <p className="WhiteText DescriptionCard"></p>
                  <div className="skillBox overflow-change">
                  {skills.map((skill, key) => {
                      return (
                    <span className="skillbadge">{skill}</span>
                    )
                  })}
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowSection;
