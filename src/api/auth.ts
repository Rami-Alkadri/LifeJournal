import { supabase } from "../utils/supabaseClient";

export async function signUp(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
        console.error("Sign up error:", error.message);
    } else {
        console.log("Sign up successful:", data);
    }
    return { data, error };
}

export async function signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
        console.error("Sign in error:", error.message);
    } else {
        console.log("Sign in successful:", data);
    }
    return { data, error };
}

export async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.error("Sign out error:", error.message);
    } else {
        console.log("Sign out successful");
    }
    return { error };
}

export async function getUser() {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
        console.error("Get user error:", error.message);
    } else {
        console.log("User fetched successfully:", data);
    }
    return { data, error };
}