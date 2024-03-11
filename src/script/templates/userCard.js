/**
 * @typedef {Object} User
 * @property {string} avatar - User's avatar URL
 * @property {string} first_name - User's First Name
 * @property {string} last_name - User's Surname
 * @property {string} email - User's Email
 * @property {number} id - Unique User's ID
 */

/**
 * Creates User's card HTML-element based on data received
 * @param {User} user - User's data
 * @returns {HTMLDivElement} - User card HTML-element
 */

export const createUserCard = (user) => {
  const userCardContainer = document.createElement('div');
  userCardContainer.className = 'user-card';

  const userImg = document.createElement('img');
  userImg.src = user.avatar;
  userImg.alt = `${user.first_name}_${user.last_name}`;
  userCardContainer.appendChild(userImg);

  const userName = document.createElement('p');
  userName.innerHTML = `${user.first_name} ${user.last_name}`;
  userCardContainer.appendChild(userName);

  const userEmail = document.createElement('a');
  userEmail.href = `mailto:${user.email}`;
  userEmail.innerHTML = `${user.email}`;
  userCardContainer.appendChild(userEmail);

  return userCardContainer;
}
