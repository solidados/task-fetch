const user = {
  avatar: String,
  first_name: String,
  last_name: String,
  email: String,
  id: Number,
}

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
