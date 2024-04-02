import React, { useState } from 'react'

const CountDown = () => {
    const [mins, setMins] = useState(0)
    const [secs, setSecs] = useState(0)
    const [timer, setTimer] = useState()

    const handleSetTimer = () => {
        setInterval(() => {
            setSecs(prev => prev - 1);
        }, 1000);
        setInterval(() => {
            setMins(prev => prev - 1)
        }, 60000)
    }

    return (
        <section className='my-8'>
            <h2 className='text-3xl font-semibold'>⌛ Countdown Timer with Audio🚨</h2>
            <p className='mt-4'>Develop a React application featuring a countdown timer that visually displays the remaining time and plays an audio cue upon reaching zero. Users should be able to set the desired countdown duration in minutes or seconds.</p>
            <div className='mt-4'>
                <label className=' font-semibold'>Set Countdown:</label>
                <input type='number' className='border-2 border-my-blue w-[3rem] mx-2' onChange={(e) => setMins(e.target.value)} /><span>min</span>
                <input type='number' className='border-2 border-my-blue w-[3rem] mx-2' onChange={(e) => setSecs(e.target.value)} /><span>sec</span>
                <button className='border-2 border-my-blue shadow-mini ml-8 px-2' onClick={handleSetTimer}>Set</button>
            </div>

            <div className='border-2 border-my-yellow rounded-2xl p-4 mt-4 shadow-xl flex flex-col items-center'>
                <h3 className='text-xl font-medium'>Countdown</h3>
                <div className='mt-6 flex items-end gap-2 my-4'>
                    <span className='bg-my-green text-white p-2 text-7xl rounded-xl'>{mins < 0 ? 0 : mins >= 60 ? 59 : mins}</span>
                    <p>Mins</p>
                    <span className='bg-my-green text-white p-2 text-7xl rounded-xl'>{secs < 0 ? 0 : secs >= 60 ? 59 : secs}</span>
                    <p>Secs</p>
                </div>
            </div>
        </section>
    )
}

export default CountDown

// import React, { useState, useEffect, useRef } from 'react';

// function CountDown() {
//   const [countdownTime, setCountdownTime] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const audioRef = useRef(null);

//   useEffect(() => {
//     let interval;
//     if (isPlaying && countdownTime > 0) {
//       interval = setInterval(() => setCountdownTime(countdownTime - 1000), 1000);
//     } else if (!isPlaying || countdownTime === 0) {
//       clearInterval(interval);
//       if (countdownTime === 0) audioRef.current.play();
//     }
//     return () => clearInterval(interval);
//   }, [countdownTime, isPlaying]);

//   const handleStartStop = () => setIsPlaying(!isPlaying);
//   const handleReset = () => setCountdownTime(0);

//   const getFormattedTime = () => {
//     const minutes = Math.floor(countdownTime / 60000);
//     const seconds = Math.floor((countdownTime % 60000) / 1000);
//     return `${minutes ? minutes + ':' : ''}${seconds.toString().padStart(2, '0')}`;
//   };

//   return (
//     <div className="countdown-timer-app">
//       <h1>Countdown Timer</h1>
//       <input
//         type="number"
//         placeholder="Set minutes"
//         onChange={(e) => setCountdownTime(e.target.value * 60000)}
//       />
//       <button onClick={handleStartStop}>{isPlaying ? 'Pause' : 'Start'}</button>
//       <button onClick={handleReset}>Reset</button>
//       <p>{getFormattedTime()}</p>
//       <audio ref={audioRef} src="path/to/audio.mp3" preload="auto" />
//     </div>
//   );
// }

// export default CountDown;
