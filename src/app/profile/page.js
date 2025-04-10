"use client";

import { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabaseClient';
import { useRouter } from 'next/navigation';

export default function Profile() {
    const [session, setSession] = useState(null);
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    useEffect(() => {
        if (session) {
            setUser(session.user);
        }
    }, [session]);

    if (!session) {
        // Not logged in, redirect to login page
        useEffect(() => {
            router.push('/login');
        }, [router]); // Use useEffect to avoid immediate redirect during SSR
        return null; // Or a loading indicator
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="block text-gray-700 text-sm font-bold mb-2">Your Profile</h2>
                <p>Email: {user?.email}</p>
                <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={async () => {
                        await supabase.auth.signOut();
                        router.push('/login');
                    }}
                >
                    Sign Out
                </button>
            </div>
        </div>
    );
}