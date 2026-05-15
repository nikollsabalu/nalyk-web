import { useState, useEffect, useCallback } from 'react';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&<>[]{}';

export const useTextScramble = (finalText, duration = 1.5, trigger = true) => {
  const [displayText, setDisplayText] = useState('');

  const scramble = useCallback(() => {
    // Si no hay texto, no hacemos nada
    if (!finalText) return;

    let frame = 0;
    const totalFrames = duration * 60;
    
    const internal = setInterval(() => {
      const progress = frame / totalFrames;
      
      const currentText = finalText.split('').map((char, index) => {
        // --- CORRECCIÓN CRÍTICA ---
        // Si el carácter es un espacio o salto de línea, lo devolvemos tal cual
        // para que el navegador respete el "wrapping" del contenedor.
        if (char === ' ' || char === '\n' || char === '\r') {
          return char;
        }

        // Si el progreso ya alcanzó esta posición, mostramos la letra real
        if (progress > index / finalText.length) {
          return char;
        }

        // Si no, mostramos carácter aleatorio
        return characters[Math.floor(Math.random() * characters.length)];
      }).join('');

      setDisplayText(currentText);
      frame++;

      if (frame >= totalFrames) {
        setDisplayText(finalText);
        clearInterval(internal);
      }
    }, 1000 / 60);

    return () => clearInterval(internal);
  }, [finalText, duration]);

  useEffect(() => {
    if (trigger) {
      scramble();
    }
  }, [trigger, scramble]);

  return displayText;
};