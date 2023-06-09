import React from 'react'

const Chats = () => {
  return (
    <div className='chats'>
      <div className='userchat'>
      {/* https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSBLeRgKyes_KnoMlt9eQd2YxXV5y3mhAVzCLteT4c7qQf_bp-eEJPUuLeSsnvQk-ecvGOMwXXPgTS2RLs */}
        <img className='userimg' src='' alt=''/><br/>
      </div>
      <div className='usernameinfo'>
        <span className='chatid'>Kaps</span>
        <p className='lastmsg'>last message</p>
      </div>
    </div>
  )
}

export default Chats
