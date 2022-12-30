import { useFormik } from "formik";
import { useEffect, useRef } from "react";
import * as Yup from "yup";
import "./Form.css";

type Props = {
  participants: string[];
  onInsert: (participant: string) => void;
};

type Values = {
  participant: string;
}

const Form = ({ participants, onInsert }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    errors,
    values,
    touched,
    handleSubmit,
    handleChange,
    setFieldError,
  } = useFormik<Values>({
    initialValues: { participant: "" },
    validateOnBlur: false,
    validateOnMount: false,
    validateOnChange: false,
    validationSchema: Yup.object().shape({
      participant: Yup
        .string()
        .trim()
        .required("Adicione o nome do participant")
        .test(
          "check-duplicate-names",
          "participant já adicionado",
          (newParticipant) => {
            return !!newParticipant && !participants.includes(newParticipant);
          }
        )
    }),
    onSubmit: ({ participant }, { resetForm }) => {
      onInsert(participant);
      resetForm();
      inputRef.current?.focus();
    }
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (errors.participant)
      timeoutId = setTimeout(() => setFieldError("participant", undefined), 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [errors, setFieldError]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="wrapperFields">
        <div className="group">
          <input
            ref={inputRef}
            type="text"
            id="participant"
            name="participant"
            data-testid="participant"
            autoComplete="off"
            placeholder="Insira os nomes dos participantes"
            onChange={handleChange}
            value={values.participant}
          />
          <button
            type="submit"
            data-testid="addButton"
            disabled={!values.participant}
          >
            Adicionar
          </button>
        </div>

        {errors.participant && touched.participant && (
          <p className="error" role="alert">{errors.participant}</p>
        )}
      </div>
    </form>
  );
};

export default Form;
