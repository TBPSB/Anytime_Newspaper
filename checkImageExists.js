export async function checkImageExists(url) {
    try {
        const response = await fetch(url, { method: 'GET', mode: 'no-cors' });
        return response.ok;
    } catch (error) {
        console.error('Error checking image existence:', error);
        return false;
    }
}