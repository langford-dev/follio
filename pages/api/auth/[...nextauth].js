import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

const options = {
    providers: [
        GoogleProvider({
            clientId: "489414089899-l4525e5gj8ur5avcroh6j1oru5g6k0av.apps.googleusercontent.com",
            clientSecret: "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",
        }),
    ],
    debug: false,
}

export default (req, res) => NextAuth(req, res, options)