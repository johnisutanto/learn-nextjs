import Cellar from './components/Cellar'
import styles from './page.module.css'

export default async function CellarPage() {
    await new Promise(resolve => setTimeout(resolve, 2000))

    return (
      <Cellar />
    )
  }