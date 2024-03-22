import { formatDate } from "./utils";
import "./card.css";

export const Card = ({
  text,
  id,
  created_at,
  updated_at,
  url,
}: {
  text: string;
  id: string;
  created_at: string;
  updated_at: string;
  url: string;
}) => {
  return (
    <a href={url} target="__blank" className="joke-card">
      <p>{text}</p>

      <div className="joke-card__footer">
        <span>{id}</span>
        <span title={`Created date - ${formatDate(created_at)}`}>
          {formatDate(updated_at)}
        </span>
      </div>
    </a>
  );
};
