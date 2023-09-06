import React from 'react';
import { format } from 'date-fns';

const CardComment = ({ _id, comment, name, createdAt , updatedAt , replyComment }) => {
  const parsedDate = new Date(createdAt);
  const parsedDateReply = new Date(updatedAt);
  const formattedDate = format(parsedDate, 'yyyy-MM-dd HH:mm');
  const formattedDateReply = format(parsedDateReply, 'yyyy-MM-dd HH:mm');

  return (
    <div style={{ width: '97%', height: 'auto', backgroundColor: '#ccc', borderRadius: '5px', padding: '5px', textAlign: 'start', margin: '4px' }}>
      <div style={{  margin: '5px', padding: '5px', borderRadius: '5px' }}>
        <p>{name}</p>
        <p>{comment}</p>
        <span>{formattedDate}</span>
      </div>
      {/* Reply Comment */}
    
      {
        replyComment && (
          <div style={{ padding:'7px' , borderRadius:'5px' , color:'#fff' ,marginTop:'5px' , backgroundColor:'#7e7878b3'}}>
            <p style={{marginLeft:'50px' }}>{replyComment}</p>
            <span style={{marginLeft:'50px' }}>{formattedDateReply}</span>
          </div>
        )
      }
    </div>
  );
};

export default CardComment;
