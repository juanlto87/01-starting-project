import reacImag from "../assets/react-core-concepts.png";
import "./Header.css";
const reactDesc = ["Crucial", "Fundamental", "Critic"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const indice = getRandomInt(2);
  return (
    <header>
      <img src={reacImag} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDesc[indice]} React concepts you will need for almost any app you
        are going to build!
      </p>
    </header>
  );
}
