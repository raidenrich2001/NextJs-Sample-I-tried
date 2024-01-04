import User from "@component/models/User"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
var bcrypt = require('bcryptjs');
import CredentialsProvider from "next-auth/providers/credentials"
import connect from "@component/utils/db"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id:"credentials",
      name:"Credentials",
      async authorize(credentials){
        await connect();

        try{
          const user = await User.findOne({email: credentials.email})

          if(user){
   
              const isPasswordCorrect = bcrypt.compareSync(
                credentials.password,
                user.password
              )
              console.log(isPasswordCorrect)
              if(isPasswordCorrect){
                return user
              }
              else{
                throw new Error("Wrong Credentials")
              }
          } 
          else{
            throw new Error("user not found")
          }
        }catch(err){
          throw new Error(err)
        }
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      // console.log(session)
      console.log(token,'nothing here')
      // session.user.id = user.id; // Add user ID to the session
      // session.user.username = user.username; // Add username to the session
      // return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token
    }
  },
  // For Getting the Error on the specific page
  pages:{
    error:'/dashboard/login'
  }
})
 

export { handler as GET, handler as POST};