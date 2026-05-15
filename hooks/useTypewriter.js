// Custom Hook para el efecto de máquina de escribir con Trigger de visibilidad
export const useTypewriter = (text, speed = 10, delay = 0, trigger = true) => {
  const [displayText, setDisplayText] = useState('');
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (!trigger) return; // No inicia si no es visible
    const startTimeout = setTimeout(() => setIsStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay, trigger]);

  useEffect(() => {
    if (!isStarted) return;
    if (displayText?.length < text?.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text?.slice(0, displayText?.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [displayText, isStarted, text, speed]);

  return displayText;
};