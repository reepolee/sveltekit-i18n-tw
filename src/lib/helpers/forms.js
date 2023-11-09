export const formDataFromRequest = async request => Object.fromEntries(await request.formData());
