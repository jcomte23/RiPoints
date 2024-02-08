export const calcScoreCoins = (arr) =>{
  if(arr.length){
    let acc = 0;
    arr.forEach(coins => {
      acc += coins.attendantCoins
    });
    return acc
  }else{
    return 0
  }
}

export const calcWinCoins = (arr) =>{
  if(arr.length){
    let acc = 0;
    arr.forEach(coins => {
      acc += coins.coins
    });
    return acc
  }else{
    return 0
  }
}


export const getAllWinCoins = async (userId) => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/users?id=1&_embed=winCoins&_embed=scoreCoins`
  );
  const data = await response.json();

  return data;
};

export const getWeekCoins = async (userId, week) => {
  const allCoins = await getAllWinCoins();
  const weekCoins = allCoins.filter((winCoin) => {
    return (
      winCoin.scoreCoin.userId == userId && winCoin.scoreCoin.date.week == week
    );
  });
  return weekCoins;
};
