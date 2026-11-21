export type Role = {
	/** "a" or "an", whichever reads right before the title */
	article: 'a' | 'an';
	title: string;
	/** background of the title box; white text sits on it, so keep it dark enough to read */
	color: string;
	/** the two lines under the title */
	tagline: [string, string];
};

// The intro flips through these in order, starting with the first.
export const roles: Role[] = [
	{
		article: 'a',
		title: 'Software Engineer',
		color: '#b22f00',
		tagline: ['that loves experimenting', 'with new technologies.']
	},
	{
		article: 'an',
		title: 'AI Enthusiast',
		color: '#2c6e85',
		tagline: ['that enjoys designing', 'intelligent automated workflows.']
	},
	{
		article: 'a',
		title: 'Design Hobbyist',
		color: '#c25e0e',
		tagline: ['that geeks out on producing', 'interesting and inviting experiences.']
	},
	{
		article: 'a',
		title: 'Cat Dad',
		color: '#6e4a8e',
		tagline: ['that treasures cozy moments', 'with my two black cats.']
	}
];
