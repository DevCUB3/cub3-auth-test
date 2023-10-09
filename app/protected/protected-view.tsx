"use client"

import { useState } from "react"
import Layout from "../../components/layout"
import AccessDenied from "../../components/access-denied"
import {Session} from "next-auth";

export const ProtectedView = ({ session }: { session: Session}) => {
    const [content, setContent] = useState()

    // If no session exists, display access denied message
    if (!session) {
        return (
            <Layout>
                <AccessDenied />
            </Layout>
        )
    }

    // If session exists, display content
    return (
        <Layout>
            <h1>Protected Page</h1>
            <p>
                <strong>{content ?? "\u00a0"}</strong>
            </p>
        </Layout>
    )
}
