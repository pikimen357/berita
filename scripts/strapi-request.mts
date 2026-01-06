import { writeFileSync } from "fs";
import qs from "qs";

const  url: string  =  'http://localhost:1337/api/posts' + '?' + qs.stringify({
    fields : ['slug','title', 'description', 'publishedAt','author', 'body'],
    populate: { image : {fields: 'url'} },
    sort: ['publishedAt:desc'],
    pagination: { pageSize: 1 }
},
{ 
    encodeValuesOnly: true 
});

const response: Response = await fetch(url);
const data: any = await response.json();

const posts: string =  JSON.stringify(data, null, 2);

// console.log('Posts:', posts);

const filePath: string =  'strapi-response.json';
writeFileSync(filePath, posts, 'utf-8');