import { ICard } from '../models/card';
import Styles from './Card.module.css';

interface CardProps {
  card: ICard;
}

export function Card({ card }: CardProps) {
  return (
    <div className={Styles.Card}>
      <img src={card.image} alt={card.title} className={Styles.Img} />
      <p className={Styles.Title}>{card.title}</p>
      <span style={{ color: '#faa500' }}>${card.price}</span>
      <div className={Styles.Info}>
        <span>rate: {card.rating.rate}</span>
        <span>count: {card.rating.count}</span>
      </div>
      <button className={Styles.Button}>Buy now</button>
    </div>
  );
}
