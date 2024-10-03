"use client"
import {useEffect, useState} from "react"

export function useTimer() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return time
}