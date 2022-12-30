import shuffle from "just-shuffle";
import { useEffect, useState, useMemo } from "react";
import "./DrawResultPage.css";

type Props = {
  participants: string[];
};

const DrawResultPage = ({ participants }: Props) => {
  const [participantDrawn, setParticipantDrawn] = useState("");
  const [selectedParticipant, setSelectedParticipant] = useState("");

  const drawResult: Map<string, string> = useMemo(() => {
    const result = new Map<string, string>();
    const totalParticipants = participants.length;
    const shuffledParticipants = shuffle(participants);

    for (let index = 0; index < totalParticipants; index++) {
      const drawnIndex = index === totalParticipants - 1 ? 0 : index + 1;
      const participant = shuffledParticipants[index];
      const itDrawn = shuffledParticipants[drawnIndex];

      result.set(participant, itDrawn);
    }

    return result;
  }, [participants]);

  const raffle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setParticipantDrawn(drawResult.get(selectedParticipant)!);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (participantDrawn)
      timeoutId = setTimeout(() => setParticipantDrawn(""), 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [participantDrawn]);

  return (
    <>
      <h2>Quem vai tirar o papelzinho?</h2>
      <form onSubmit={raffle}>
        <div className="wrapperResult">
          <select
            name="seletorParticipante"
            value={selectedParticipant}
            onChange={event => setSelectedParticipant(event.target.value)}
          >
            <option value="">Selecione seu nome</option>
            {participants.map(participant => (
              <option key={participant} value={participant}>
                {participant}
              </option>
            ))}
          </select>

          <p className="hint">
            Clique em sortear para ver quem é o seu amigo secreto
          </p>

          <button className="actionButton" disabled={!selectedParticipant}>
            Sortear!
          </button>

          {participantDrawn && <p className="sorted" role="alert">{participantDrawn}</p>}

          <img src="/images/airplane.png" alt="imagem de um avião" />
        </div>
      </form>
    </>
  );
};

export default DrawResultPage;
