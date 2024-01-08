const catPic = async () => {
    //Create an API key at thecatapi.com
    //Add it as an env
    const url = "https://api.thecatapi.com/v1/images/search?limit=5"
    const headers = {
        'x-api-key': process.env['CAT_API_KEY'] // add your API key here
    }
    try {
        const response = await fetch(url, {headers});
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`)
        }
        const data = await response.json()
        return data.map(image => image.url)
    } catch (err) {
        console.error('Error fetching cat images!', err)
        return []
    }
    
}
export default catPic