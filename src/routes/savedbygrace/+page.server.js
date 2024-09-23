// @ts-nocheck
import { redirect } from '@sveltejs/kit';

export async function load({ }) {
    throw redirect(302, `mailto:savedbygrace@xybr.dev`);
}