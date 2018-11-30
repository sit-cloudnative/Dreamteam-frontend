import Meta from './meta'
import Footer from './footer'
import Navbar from '../components/navbar'
export default ({ children }) => (
  <div>
    <Meta />
    <Navbar/>
    <div style={{padding:'8px',marginTop:'55px',backgroundColor:'#f7f7f7'}}>
      { children }
      </div>
    <Footer />
  </div>
)