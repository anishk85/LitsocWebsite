import React from 'react'
// import Cursor from '../components/Cursor'

function TextGroup({number,text1,text2,text3}){
  return(
    <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '40px' }}>
      {/* Number Circle */}
      <div
        style={{
          fontFamily: 'Inter',
          fontWeight: '400',
          fontSize: '20px',
          border: '2px solid white',
          borderRadius: '50%',
          width: '28px',
          height: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          marginRight: '0px',
          marginTop: '15px'
        }}
      >
        {number}
      </div>

      {/* Text Section */}
      <div>
        <p style={{ fontFamily: 'Inter', fontWeight: '400', color: 'white', fontSize: '22px', margin: 0,marginBottom:'5px',marginLeft: '15px', padding: 0, lineHeight: '1.1' }}>{text1}</p>
        <h1 style={{ fontFamily: 'Inter', fontWeight: '400', color: 'white', fontSize: '54px', margin: 0,marginBottom:'5px',marginLeft: '15px', padding: 0, lineHeight: '1' }}>{text2}</h1>
        <p style={{ fontFamily: 'Inter', fontWeight: '400', color: 'white', fontSize: '15px', margin: 0,marginLeft: '15px', padding: 0, lineHeight: '1.1' }}>{text3}</p>

        <hr
          style={{
            width: '750px',
            border: '0.5px solid white',
            margin: '10px 0',
          }}
        />
      </div>
    </div>
  );
}

const aboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-[#AD906C] overflow-hidden m-0 p-0 rounded-r-[60px]">
      <div className="text-[130px] text-[#FFFFFF] font-bricolage -mt-12 font-medium absolute bottom-[-12px] leading-none left-1/2 transform -translate-x-1/2">
        Who are we?
      </div>

    <hr style ={{
      width:'1000px',
      border: '1px solid #FFFFFF',
      position: 'absolute',
      top: '9.6%',
      left: '50%',
      transform: 'translateX(-50%)'
    }}>
    </hr>
    <div style = {{position:'absolute', top:'14%', marginLeft:'280px'}}>
    <TextGroup
        number="1"
        text1="THE importance of an idea"
        text2="Right concept, right client"
        text3="Unique, recognizable projects"
      />
      <TextGroup
        number="2"
        text1="Creative Vision Matters"
        text2="Designs that Inspire"
        text3="Innovative, aesthetic solutions"
      />
      <TextGroup
        number="3"
        text1="Bringing Ideas to Life"
        text2="Execution with Precision"
        text3="Delivering impactful results"
      />
    </div>

    </div>
  );
}


export default aboutUs