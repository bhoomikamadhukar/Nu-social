
import React from 'react';
import {useParams} from 'react-router-dom';
import NotFound from './misc/NotFound';
const PageRender = () =>{
const {page,id} = useParams()
let pagename ="";
if(id){
    pagename = `${page}/[id]`
}
else{
    pagename = `${page}`
}
console.log(pagename)
return(
   generatePage(pagename)
)

}
const generatePage = (pagename)=>{
    const component = () =>require(`./elements/${pagename}`).default
    try{
        return React.createElement(component())
    }
    catch(error){
        return <NotFound/>
    }
}
export default PageRender