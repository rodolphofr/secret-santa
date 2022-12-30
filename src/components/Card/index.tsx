import "./card.css";

type Props = {
  children: React.ReactNode;
}

const Card = ({ children }: Props) => (
  <div className="card">
    {children}
  </div>
);

export default Card;
