import EditView from '../components/body'
import Header from '../components/header'

const styles = {
  title: `text-3xl font-bold`,
}

export default function Home() {
  return <div>
    <Header />
    <div className='mt-20 p-10 max-w-screen-xl m-auto border border-t-0'>
      <p className={styles.title}>Dashboard</p>
      <p>View your statistics, clicks and engagement</p>
    </div>
  </div>
}
