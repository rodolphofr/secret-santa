import { useNavigate } from "react-router-dom";
import "./Footer.css";

type Props = {
  participants: string[];
};

const MINIMUM_PLAYERS_COUNT = 3;

const Footer = ({ participants }: Props) => {
  const navigate = useNavigate();
  const canSort = participants.length >= MINIMUM_PLAYERS_COUNT;

  return (
    <footer>
      <button
        className="actionButton"
        disabled={!canSort}
        onClick={() => navigate("/draw")}
      >
        Iniciar bricadeira!
      </button>
      <img src="/images/bags.png" alt="imagem de sacolas" />
    </footer>
  );
};

export default Footer;
