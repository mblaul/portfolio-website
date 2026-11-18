import { query } from '$app/server';

export type Project = {
	title: string;
	summary: string;
	// a little reaction row, as in the design's card footer
	reactions: string;
	href?: string;
};

// Placeholder content until the real projects are written up. This runs only on the server, so
// it can later read from a database or a CMS without the page changing at all.
const projects: Project[] = [
	{
		title: 'Project 1',
		summary:
			'A short description of what this project is, what it was built with, and what made it fun to work on.',
		reactions: '😭 🤪 😊'
	},
	{
		title: 'Project 2',
		summary:
			'A short description of what this project is, what it was built with, and what made it fun to work on.',
		reactions: '😭 🤪 😊'
	},
	{
		title: 'Project 3',
		summary:
			'A short description of what this project is, what it was built with, and what made it fun to work on.',
		reactions: '😭 🤪 😊'
	}
];

/** The projects shown on the home page. Call it from a component and `await` the result. */
export const getProjects = query(async () => projects);
