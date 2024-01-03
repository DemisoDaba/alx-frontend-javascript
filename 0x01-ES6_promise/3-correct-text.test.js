import handleProfileSignup from "./3-all";

test("handleProfileSignup returns the right text", async () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
  
    await handleProfileSignup();
    expect(spy).toBeCalledWith('photo-profile-1 Guillaume Salva');
    spy.mockRestore();
  });