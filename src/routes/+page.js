// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {

    //const healthcheck = await fetch('http://localhost:3000/healthcheck')
    // console.log("healthcheck log :", healthcheck)

 

}  
