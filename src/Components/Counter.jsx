// src/components/Counter.jsx
import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ target, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = parseInt(target, 10);
    if (start === end) return;

    const incrementTime = 50; // ms per increment
    const increments = duration / incrementTime;
    const step = end / increments;

    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += step;
      if (currentCount >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(currentCount));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration, isVisible]);

  return (
    <span ref={ref} className="text-royal-blue dark:text-gold text-5xl md:text-6xl font-extrabold">
      {count}{suffix}
    </span>
  );
};

export default Counter;