import { supabase } from '../../supabase'

export default async function SignUp(email, password, option) {
    // const userOption = option || {};

    try {
        const { error } = await supabase.auth.signUp({ email, password }, { data: { age: 24 } });

        if (error) throw error;

    } catch (error) {
        alert(error.error_description || error.message);
    }

}