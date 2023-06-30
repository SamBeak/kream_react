import axios from 'axios';
import React from 'react';
import './scss/section16.scss';

export default function Section16Component(){

    const [state, setState] = React.useState({
        image:''
    })

    const getDataApi=()=>{
        axios({
            url:'./data/section_link_image.json',
            method:'GET'
        })
        .then((res)=>{
            
            if(res.status===200){
                setState({
                    ...state,
                    image:res.data.Section16_image
                });
            }
        })
        .catch((err)=>{
            console.log(`AXIOS 실패!${err}`)
        })
    }

    React.useEffect(()=>{
        getDataApi();
    },[state.image])
    return (
        <section id='section16'>
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <a href="!#"><img src={`./images/sec_one_page/${state.image}`} alt="" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};