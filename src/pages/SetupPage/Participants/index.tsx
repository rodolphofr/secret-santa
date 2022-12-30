import "./Participants.css";

type Props = {
  participants: string[];
  onDeleteItem: (participante: string) => void;
};

const Participants = ({ participants, onDeleteItem }: Props) => (
  <ul>
    {participants.map(participant => (
      <li key={participant} onClick={() => onDeleteItem(participant)}>
        {participant}
      </li>
    ))}
  </ul>
);

export default Participants;
