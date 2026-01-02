

import React from 'react';
import {useParams} from "react-router-dom";

const Service = () => {

    const services=[
        {
            "id":1,
            "image":"https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
            "categorie":"design",
            "name":"Professional Logo Design",
            "description":"Get a unique profesional logo that represent your brand perfectly",
            "mark":4.1,
            "client":{
                "avatar":""
            }
        },
        {
            "id":2,
            "image":"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
            "categorie":"development",
            "name":"Website Development",
            "description":"Custom responsive website built in modern technologies",
            "mark":4.1,
            "client":{
                "avatar":""
            }
        },
        {
            "id":3,
            "image":"https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
            "categorie":"marketing",
            "name":"Social media management",
            "description":"Compute social media strategy and content creation for your business",
            "mark":4.1,
            "client":{
                "avatar":""
            }
        },
        {
            "id":4,
            "image":"https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
            "categorie":"writing",
            "name":"Content Writing and SEO",
            "description":"High quality content optimized for search engines",
            "mark":4.1,
            "client":{
                "avatar":""
            }
        }
    ]


    const {id} = useParams();


    return (
        <div>
            {console.log(services.filter(service=>service.id==id))}
        </div>
      );
};

export default Service;
