import passport from  "passport"
import { Strategy } from "passport-google-oauth20"
import { User } from "../models/user"
import { google } from "../config/config"

passport.serializeUser((user, done) => {
  // @ts-ignore
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id)
    return user ? done(null, user) : done(null, false)
  } catch (error) {
    done(error, null)
  }
})

export default passport.use(
  new Strategy(
    {
      clientID: google.GOOGLE_CLIENT_ID,
      clientSecret: google.GOOGLE_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
      scope: ["email", "profile"],
    },
    async (accessToken, refreshToken, profile, done) => {
      let user;
      console.log(1)
      try {
        console.log(2)
        user = await User.findOne({ googleId: profile.id })
        console.log(3)
      } catch (error) {
        console.log(4)
        return done(error, undefined)
      }
      
      console.log(5)
      try {
        console.log(6)
        if (!user) {
          console.log(7)
          const newUser = new User({
            username: profile.displayName,
            googleId: profile.id
          })
          console.log(8)
          const newSavedUser = await newUser.save()
          console.log(9)
          return done(null, newSavedUser)
        }
        return done(null, user)
      } catch (error) {
        console.log(10)
        return done(error, undefined)
      }
    }
  )
)