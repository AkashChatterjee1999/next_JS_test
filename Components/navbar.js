import Link from 'next/link'
import Head from 'next/head';
class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return(
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                <a className="navbar-brand text-light">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <Link href = "/"><a className="nav-item nav-link mr-5 text-light">Page1<span className="sr-only">(current)</span></a></Link>
                        <Link href = "/demo-2"><a className="nav-item nav-link mr-5 text-light">Page2</a></Link>
                        <Link href = "/demo-3"><a className="nav-item nav-link mr-5 text-light">page3</a></Link>
                    </div>
                </div>
                </nav><br/>
            </>
        )
    }
}
export default Navbar 