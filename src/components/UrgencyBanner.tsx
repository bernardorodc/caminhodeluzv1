import { useState, useEffect } from 'react'

export const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState(10 * 60) // 10 minutos em segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          return 10 * 60 // Reset para 10 minutos
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="bg-gold text-white py-1.5 md:py-5 px-2 md:px-4 text-center sticky top-0 z-50 md:shadow-glow md:border-b md:border-gold-dark">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] md:text-lg font-bold flex flex-row items-center justify-center gap-1 sm:gap-3 animate-pulse">
          <span className="text-xs md:text-xl animate-bounce">⚠️</span>
          <span className="bg-white text-gold px-1.5 py-0.5 md:px-3 md:py-2 rounded-full text-[9px] md:text-base font-black shadow-sm md:shadow-lg animate-pulse">
            ÚLTIMAS VAGAS
          </span>
          <span className="text-white text-[9px] md:text-base hidden sm:inline">–</span>
          <span className="text-white text-[9px] md:text-base">encerra em</span>
          <span className="text-white font-black text-[10px] md:text-lg bg-gold-dark px-1.5 py-0.5 md:px-3 md:py-2 rounded-md md:rounded-lg shadow-sm md:shadow-lg">
            {formatTime(timeLeft)}
          </span>
        </p>
      </div>
    </div>
  )
}