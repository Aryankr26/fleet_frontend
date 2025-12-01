declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';
declare module '*.webp';

// Provide minimal JSX/React runtime declarations to avoid TS errors in this example repo
declare module 'react/jsx-runtime';

declare namespace JSX {
	interface IntrinsicElements {
		[elemName: string]: any;
	}
}
