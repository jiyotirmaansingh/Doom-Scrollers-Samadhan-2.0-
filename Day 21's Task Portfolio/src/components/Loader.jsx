import { useProgress } from "@react-three/drei"

const Loader = () => {
    const {progress} = useProgress();
  return <html center >{progress}</html>
}

export default Loader