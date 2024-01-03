import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => res.map((e) => {
      const payload = { status: e.status, value: e.value ? e.value : e.reason.toString() };
      return payload;
    }));
}
