import React from 'react'

function Banner({desktopImg,tabletImg,mobileImg}) {
  return (
    <div className='banner-img'>
        <picture>
            <source media='(max-width:992px)' srcSet={tabletImg}/>
            <source media='(max-width:768px)' srcSet={mobileImg}/>
            <img src={desktopImg} alt="about-desktop" />
        </picture>
    </div>
  )
}

export default Banner