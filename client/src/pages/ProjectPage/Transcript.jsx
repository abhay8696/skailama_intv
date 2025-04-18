import React, { useState } from 'react';
import "./Transcript.css";
import back from "../../assets/ep_back.png"
import { updatePodcast } from '../../functions/functions';

const para = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni"

const Transcript = ({transcirptData, closeTranscript}) => {
    const [transcirpt, setTranscript] = useState(transcirptData.transcript)

    const editPodCast = async () => {
        let res = await updatePodcast(
            transcirptData._id,
            {
            name: transcirptData.name,
            transcript: transcirpt
        })
        console.log(res)
        alert(res.message);
        // window.location.reload();
    }
    return (
        <div className='Transcript'>
            <div className='transcirpt-head'>
                <h1>
                    <img src={back} alt="" onClick={closeTranscript}/>
                    {transcirptData.name}
                </h1>
                <button onClick={editPodCast}>Edit</button>
            </div>
            <div className='transcirpt-body'>
                <span>Speaker</span>
                <textarea value={transcirpt} onChange={e=> setTranscript(e.target.value)}/>
            </div>
        </div>
    );
};

export default Transcript;