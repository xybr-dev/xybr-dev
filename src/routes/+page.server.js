// @ts-nocheck
import { redirect } from '@sveltejs/kit';

export async function load({ }) {
    throw redirect(302, `https://github.com/xybr-dev`);
}