import Form from './Form'
import Participants from './Participants'
import Footer from './Footer';

type Props = {
  participants: string[];
  addParticipant: (participante: string) => void;
  deleteParticipant: (participante: string) => void;
};

const SetupPage = ({
  participants,
  addParticipant,
  deleteParticipant,
}: Props) => (
  <>
    <h2>Vamos começar!</h2>
    <Form
      participants={participants}
      onInsert={addParticipant}
    />
    <Participants
      participants={participants}
      onDeleteItem={deleteParticipant}
    />
    <Footer participants={participants} />
  </>
);

export default SetupPage;
