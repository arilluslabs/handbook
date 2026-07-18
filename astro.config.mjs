// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Arillus Handbook',
			social: [],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Company',
					items: [
						{ label: 'About Arillus', slug: 'company/about' },
						{ label: 'Our Values', slug: 'company/values' },
					],
				},
				{
					label: 'Team',
					items: [
						{ label: 'How We\'re Organized', slug: 'team/organization' },
						{ label: 'Engineering & QA', slug: 'team/engineering' },
						{ label: 'Product & Design', slug: 'team/product-design' },
						{ label: 'Delivery', slug: 'team/delivery' },
						{ label: 'Career Growth', slug: 'team/career-growth' },
					],
				},
				{
					label: 'Projects',
					items: [
						{ label: 'How We Run Projects', slug: 'projects/how-we-run-projects' },
						{ label: 'Kickstarting a Project', slug: 'projects/kickstarting-a-project' },
					],
				},
				{
					label: 'People',
					items: [
						{ label: 'Performance & Growth', slug: 'people/performance-and-growth' },
						{ label: 'Compensation & Benefits', slug: 'people/compensation' },
						{ label: 'Leave & Time Off', slug: 'people/leave' },
						{ label: 'Hiring', slug: 'people/hiring' },
					],
				},
				{
					label: 'Communication',
					items: [
						{ label: 'Tools We Use', slug: 'communication/tools' },
						{ label: 'How We Communicate', slug: 'communication/how-we-communicate' },
						{ label: 'Meeting Notes', slug: 'communication/meeting-notes' },
						{ label: 'Changing This Handbook', slug: 'communication/changing-this-handbook' },
					],
				},
			],
		}),
	],
});
