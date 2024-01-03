import handleProfileSignup from "./3-all";
import * as utilsFunctions from "./utils";

test("handleProfileSignup manage an error", async () => {
  const spy = jest.spyOn(console, "log").mockImplementation();
  const uploadPhotoSpy = jest.spyOn(utilsFunctions, 'uploadPhoto').mockImplementation();
  uploadPhotoSpy.mockImplementation(() => {
    return Promise.reject(() => {});
  });

  await handleProfileSignup();
  expect(spy).toBeCalledWith('Signup system offline');
  spy.mockRestore();
});