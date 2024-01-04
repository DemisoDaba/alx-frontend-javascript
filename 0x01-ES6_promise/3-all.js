import * as utilsFunctions from "./utils";

export default function handleProfileSignup() {
  Promise.allSettled([utilsFunctions.uploadPhoto(), utilsFunctions.createUser()])
    .then(([photoResult, userResult]) => {
      if (photoResult.status === 'fulfilled' && userResult.status === 'fulfilled') {
        console.log(`${photoResult.value.body} Guillaume Salva`);
      } else {
        console.log('One or more tasks failed.');
      }
    })
    .catch(() => console.log('Signup system offline'));
}

