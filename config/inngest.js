import { Inngest } from "inngest";
import connectDB from "@/config/db";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "gibra-e-commerce" });

// Inngest Function to save user data to database
export const syncUserCreation = inngest.CreateFunction (
    {
        id: 'sync-user-from-clerk',
    },
    {
        event: 'clerk/user.created',
    },
    async ({event} ) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data;
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + " " + last_name,
            imageUrl: image_url,
        }
        await connectDB()
        await User.create(userData)
    }
)

// Inngest Function to update user dara in database
export const syncUserUpdation = inngest.CreateFunction (
    {
        id: 'update-user-from-clerk',
    },
    {
        event: 'clerk/user.updated',
    },
    async ({event} ) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data;
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + " " + last_name,
            imageUrl: image_url
        }
        await connectDB()
        await User.findByIdAndUpdate(id, userData)
    }
)

// Inngest Function to delete user from database
export const syncUserDeletion = inngest.CreateFunction (
    {
        id: 'delete-user-from-clerk',
    },
    {
        event: 'clerk/user.delete',
    },
    async ({event} ) => {
        const {id} = event.data;
        await connectDB()
        await User.findByIdAndDelete(id)
    }
)