import React, { useState } from 'react';
const Card = ({ children }) => {
  return (
    <div id='Card' style={{ borderRadius: '12px', padding: '10px', margin: '10px', paddingBottom: '2ppx', width: '600px', boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.5)' }}>
      {children}
    </div>
  );
};
const ReadMoreReadLess = ({ children, maxCharacterCount = 150 }) => {
  const [isTruncated, setIsTruncated] = useState(true);
  const resultString = isTruncated ? children.slice(0, maxCharacterCount) + " . . .": children;
  const date = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  return (
    <Card>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '600px', margin: '0px', alignItems: 'flex-start' }}>
        <span style={{display: 'flex', flexDirection: 'row'}}>
          <h4 style={{ marginTop: '4px' ,marginRight: 'auto', marginBottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>Mike Odnis <span style={{ color: 'gray', fontSize: '12px' }}>@mikeodnis</span></h4>(he/him)
        </span>
        <hr width="100px" height="1px" style={{margin:0}}/>
          <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', margin: 'auto', padding: '10px 0px', maxHeight: isTruncated ? '60px' : 'none', transition: 'max-height 0.5 ease', display: 'inline' }}>{resultString}   
          {children.length > maxCharacterCount && (
            <span
              style={{ color: 'grey', cursor: 'pointer', marginTop: 'auto', marginLeft: 'auto', transition: 'color 0.3s ease', marginBottom: 0, paddingRight: '10px', fontSize: '14px', fontWeight: 'bold', textDecoration: 'underline', textDecorationColor: 'grey', textDecorationThickness: '1px', textDecorationStyle: 'dotted', paddingLeft: 'auto', position: 'relative', bottom: '0px', display: 'inline', float: 'right', userSelect: 'none' }}
              onClick={() => setIsTruncated(!isTruncated)}
            >
              {isTruncated ? 'more' : 'less'}
            </span>
          )}        
          </p>
          <>
            <span style={{ color: 'grey', fontSize: '12px', marginRight: 'auto', marginBottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', userSelect: 'none' }}>{`${date}`}</span>
          </>
      </div>
    </Card>
  );
};
export default ReadMoreReadLess;