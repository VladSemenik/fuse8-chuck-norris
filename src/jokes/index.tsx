import { useState } from "react";
import { useGetJokesQuery } from "./api";
import { useDebouncedCallback } from "use-debounce";
import { Card } from "./card";
import "./main.css";

const MIN_SEARCH_VAL_LEN = 3;
const SEARCH_VAL_LOCAL_STORE_KEY = "search-value";

const JokesPage = () => {
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem(SEARCH_VAL_LOCAL_STORE_KEY) || ""
  );
  const [skip, setSkip] = useState(true);
  const [helpText, setHelpText] = useState("");
  const { data, isLoading, isFetching, isSuccess, isError, refetch } =
    useGetJokesQuery(searchValue, {
      skip: !searchValue && skip,
    });

  const handleChange = useDebouncedCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >((event) => {
    if (event.target.value.length < MIN_SEARCH_VAL_LEN) {
      setHelpText("Minimum 3 symbols");
      return;
    }
    setHelpText("");
    setSkip(false);
    localStorage.setItem(SEARCH_VAL_LOCAL_STORE_KEY, event.target.value);
    setSearchValue(event.target.value);
  }, 500);

  const handleTryAgain = useDebouncedCallback(() => {
    refetch();
  }, 500);

  return (
    <div className="jokes-page">
      <div className="jokes-search">
        <input
          onChange={handleChange}
          placeholder="Search jokes..."
          autoFocus
          className="jokes-search__input"
          defaultValue={searchValue}
        />
        {helpText ? (
          <p className="jokes-search__help">{helpText}</p>
        ) : isSuccess && data && !isLoading ? (
          <p className="jokes-search__count">
            Found jokes: <span>{data?.total}</span>
          </p>
        ) : (
          <p className="jokes-search__count" />
        )}
      </div>

      {isError ? (
        <button className="jokes-error" onClick={handleTryAgain}>
          Try again
        </button>
      ) : isFetching ? (
        <div className="jokes-loader">loading...</div>
      ) : isSuccess && data?.total === 0 ? (
        <div className="jokes-empty-state">
          Child: Dad? Father: Yes son? Child: How come there's no jokes about
          Chuck Norris? Father: Because Chuck Norris is no joke.
        </div>
      ) : isSuccess && data?.total !== 0 ? (
        <div className="jokes-content">
          {data?.result.map((e, i) => {
            return (
              <Card
                key={i}
                text={e.value}
                id={e.id}
                created_at={e.created_at}
                updated_at={e.updated_at}
                url={e.url}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default JokesPage;
