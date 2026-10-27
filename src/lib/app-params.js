const isNode = typeof window === 'undefined';
const env = /** @type {ImportMeta & { env: Record<string, string | undefined> }} */ (import.meta).env;

const getAccessToken = () => {
	if (isNode) return undefined;
	return window.localStorage.getItem('base44_access_token') || window.localStorage.getItem('token') || undefined;
};

const isClearAccessTokenRequested = () =>
	!isNode && new URLSearchParams(window.location.search).get("clear_access_token") === 'true';

const clearStoredAccessToken = () => {
	window.localStorage.removeItem('base44_access_token');
	window.localStorage.removeItem('token');
}

const getAppParams = () => {
	if (isClearAccessTokenRequested()) {
		clearStoredAccessToken();
	}
	return {
		appId: env.VITE_BASE44_APP_ID,
		token: getAccessToken(),
		functionsVersion: (!isNode && new URLSearchParams(window.location.search).get("functions_version")?.trim()) || env.VITE_BASE44_FUNCTIONS_VERSION,
		appBaseUrl: env.VITE_BASE44_APP_BASE_URL,
	}
}


export const appParams = {
	...getAppParams()
}
