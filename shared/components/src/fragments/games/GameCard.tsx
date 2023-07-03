import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './game.module.css';
import type { FC } from 'react';
import type { NSAPIGame } from '@standalone/shared/interfaces';

export interface GameCardProps {
  className?: string;
  popularity: number;
  id: string;
  title: string;
  currencies: Array<string>;
  selectedCurrency: string;
  provider: string;
  game: NSAPIGame.GameType;
}

const GameCard: FC<GameCardProps> = ({
  className,
  popularity,
  id,
  title,
  currencies,
  selectedCurrency,
  game,
  provider,
}) => {
  return (
    <Link
      className={clsx('rounded', 'shadow', styles.card, className)}
      state={{ game }}
      to={`/${id}`}
      rel="noreferrer"
    >
      <div className={styles.popularity}>
        <span>{popularity}</span>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={`https://cdn2.softswiss.net/i/s2/${id}.png`}
          alt={title}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = '/game-placeholder.jpg';
          }}
          loading="lazy"
          className={clsx('full', 'rounded', styles.image)}
        />
      </div>
      <div className={styles.badges}>
        <div className={styles.badge}>
          <span>{provider}</span>
        </div>
      </div>
      <div>
        <div>
          <span>{title}</span>
        </div>
      </div>
      <ul className={styles.badges}>
        {currencies.map((currency) => {
          const isCurrentCurrency = selectedCurrency === currency;

          return (
            <li className={styles.currencyBadge} key={currency}>
              {isCurrentCurrency ? <b>{currency}</b> : currency}
            </li>
          );
        })}
      </ul>
    </Link>
  );
};

export default GameCard;
