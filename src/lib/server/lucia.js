import { dev } from '$app/environment';
import { SQLITE_FILENAME } from '$env/static/private';
import { betterSqlite3 } from '@lucia-auth/adapter-sqlite';
import sqlite from 'better-sqlite3';
import fs from 'fs';
import { lucia } from 'lucia';
import { sveltekit } from 'lucia/middleware';

const db_exists = fs.existsSync(SQLITE_FILENAME);
const db = sqlite(SQLITE_FILENAME);
if (!db_exists) db.exec(fs.readFileSync('schema.sql', 'utf8'));

export const auth = lucia({
	adapter: betterSqlite3(db, {
		user: 'user',
		session: 'user_session',
		key: 'user_key'
	}),
	middleware: sveltekit(),
	env: dev ? 'DEV' : 'PROD',
	getUserAttributes: (data) => {
		return {
			username: data.username
		};
	}
});

