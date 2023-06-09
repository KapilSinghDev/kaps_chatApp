import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchbar'>
        <input className='searchwindow' type='text' placeholder='find friends ...'/>
      </div>
      <div className='userchat'>
        <img className='userimg' src='https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSBLeRgKyes_KnoMlt9eQd2YxXV5y3mhAVzCLteT4c7qQf_bp-eEJPUuLeSsnvQk-ecvGOMwXXPgTS2RLs' alt=''/><br/>
      </div>
      <div className='userchatinfo'>
        <span>Kaps</span>
      </div>
    </div>
  )
}

export default Search
