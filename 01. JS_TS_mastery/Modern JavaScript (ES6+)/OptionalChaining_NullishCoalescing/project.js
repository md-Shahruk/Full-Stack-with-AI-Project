// Mini Project — Safe User Profile
/*
  Then safely access:
    name
    email
    city
    github
    website
*/


const user = {
    name: "Shahruk",
    profile: {
        social: {
            github: "..."
        }
    }
};

const name = user.name;
const email = user.profile?.email ?? "shahruk@gmail.com";4
const city = user.address?.city ?? "Dhaka";
const github = user.profile.social?.github ?? "md-shahruk";
const website = user.profile.social?.website ?? "shahruk.com";
console.log(website);
