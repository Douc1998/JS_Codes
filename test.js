const useMouse = () => {
  const [position, setPosition] = useState({x: 0, y: 0});
  useEffect(() => {
    const mouseMove = (e) => {
      let {pageX, pageY} = e;
      setPosition({
        x: pageX,
        y: pageY
      });
    }

    window.addEventListener('mousemove', mouseMove);
    return () => window.removeEventListener('mousemove', mouseMove);
  }, [])

  return position;
}
