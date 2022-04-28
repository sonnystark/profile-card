fetch("https://randomuser.me/api/?results=1")
  .then((resp) => resp.json())
  .then((data) => {
    ProfileCard.setData(data.results[0]);
  });

const ProfileCard = (() => {
  const profile = document.querySelector(".profile-img");
  const name = document.querySelector(".name");
  const location = document.querySelector(".location");
  const description = document.querySelector(".description");
  const phone = document.querySelector(".phone-icon");
  const github = document.querySelector(".github-icon");
  const email = document.querySelector(".email-icon");

  return {
    setData: (data) => {
      let fname = `${data.name.first} ${data.name.last}`;
      let origin = `${data.location.city}, ${data.nat}`;

      profile.src = data.picture.large;
      name.textContent = fname;
      location.textContent = origin;
      description.textContent =
        `Hello, I am ${fname} from ${origin}. I am ` +
        `${data.dob.age} years old and have been working here since I was ${data.registered.age}. Feel free to contact me below!`;
      phone.textContent = data.phone;
      github.textContent = data.login.username;
      email.textContent = data.email;
    },
  };
})();
