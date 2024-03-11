import { constants } from './constants/constants.js';
import { fetchData } from "./api";
import { createUserCard } from "./templates/userCard.js";

const rootElem = document.querySelector('#root');
const itemListWrapper = document.createElement('div');
itemListWrapper.className = 'wrapper';
rootElem.append(itemListWrapper);

const getData = async () => {
  try {
    const response = await fetchData(constants.BASE_URL);
    return response.data;
  }
  catch (err) {
    console.error(err.message);
    return [];
  }
}

await getData()
  .then(data => {
    data.map(user => {
      const userCard = createUserCard(user);
      itemListWrapper.appendChild(userCard);
    })
  })
  .catch(err => console.error(err.message))
