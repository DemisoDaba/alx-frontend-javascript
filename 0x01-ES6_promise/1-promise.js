export default function getFullResponseFromAPI(success) {
  return success ? Promise.resolve({ status: 200, body: 'Success' }) : Promise.reject(Error('The fake API is not working currently'));
}
