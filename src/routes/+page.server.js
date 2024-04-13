// @ts-nocheck
import { redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export async function load({  }) {
    
    // error(res.status_code, res.status_message);
    throw redirect(302, `https://github.com/xybr-dev`);
}