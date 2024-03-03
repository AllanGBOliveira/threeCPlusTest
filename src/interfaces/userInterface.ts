export interface UserInfo {
  name: String
  avatar: String
  msg?: String
  file: Boolean
  image: Boolean | String
  date: Date
  displayed: {
    value: Boolean
    quantity: Number
  }
}
