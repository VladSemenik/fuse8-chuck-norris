// {
//     categories: [ ],
//     created_at: "2020-01-05 13:42:26.991637",
//     icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
//     id: "iqzUvsQqTY6omuj7Zta5nA",
//     updated_at: "2020-01-05 13:42:26.991637",
//     url: "https://api.chucknorris.io/jokes/iqzUvsQqTY6omuj7Zta5nA",
//     value: "Chuck Norris once challenged Cool Hand Luke to an egg eating contest. Chuck Norris beat Cool Hand Luke by eating 500 eggs to Luke's record of 50. Chuck Norris's bowel movement after he ate all those eggs later starred in the 80's film "Howard the Duck!""
//     }

export interface Joke {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

// {
//     total: 2,
//     result: [
//     {
//     categories: [ ],
//     created_at: "2020-01-05 13:42:19.897976",
//     icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
//     id: "H9Pn_tS4S46JqmPScqG4HQ",
//     updated_at: "2020-01-05 13:42:19.897976",
//     url: "https://api.chucknorris.io/jokes/H9Pn_tS4S46JqmPScqG4HQ",
//     value: "Once on Blue's Clues, when Steve Burns was ill, Chuck Norris came to the show and disguised like Steve to let the children not know that Chuck Norris was on Blue's Clues. After the episode, Chuck made it through the game without clues. Steve then said "Did you use clues?". Then Chuck Norris took his disguise off and roundhouse kicked Steve in the face without a word. That was 16 years ago."
//     },
//     {
//     categories: [ ],
//     created_at: "2020-01-05 13:42:26.194739",
//     icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
//     id: "KSQDCWS_TTSN3YSvS3zNqQ",
//     updated_at: "2020-01-05 13:42:26.194739",
//     url: "https://api.chucknorris.io/jokes/KSQDCWS_TTSN3YSvS3zNqQ",
//     value: "Chuck Norris can play Blue's Clues. Without Clues."
//     }
//     ]
//     }

export interface JokesList {
  total: number;
  result: Joke[];
}
