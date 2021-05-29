export const state = () => ({
  darkTheme: false,
})

export const mutations = {
  changeTheme(state) {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    state.darkTheme = !state.darkTheme
  },
}
