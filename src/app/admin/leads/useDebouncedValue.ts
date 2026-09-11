"use client";
import { useEffect, useState } from "react";

/** Keep input immediate and apply only the latest value after typing pauses. */
export default function useDebouncedValue<T>(value: T, delay = 300): T {
    const [settled, setSettled] = useState(value);
    useEffect(() => {
        const timer = setTimeout(() => setSettled(value), delay);
        return () => clearTimeout(timer);
    }, [value, delay]);
    return settled;
}
