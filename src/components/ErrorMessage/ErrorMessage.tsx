import Styles from './ErrorMessage.module.css';

interface IErrorMessage {
  error: string;
}

export function ErrorMessage({ error }: IErrorMessage) {
  return <p className={Styles.ErrorMessage}>{error}</p>;
}