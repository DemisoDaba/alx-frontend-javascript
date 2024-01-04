import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promisePhoto = uploadPhoto();
  const promiseUser = createUser();

  return Promise.all([promisePhoto, promiseUser]).then(([photo, user]) => {
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
