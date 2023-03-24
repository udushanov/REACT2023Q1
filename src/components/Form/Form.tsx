import Styles from './Form.module.css';

export function Form() {
  return (
    <div>
      <form className={Styles.Form}>
        <input type="text" />
        <input type="date" />
        <select>
          <option value="">123</option>
          <option value="">456</option>
        </select>
        <input type="checkbox" />
        <input type="radio" />
        <input type="file" />
      </form>
    </div>
  );
}
