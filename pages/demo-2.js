import Layout from '../Components/layout'
import Head from 'next/head'
class page2 extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Layout>
                <Head>
                    <title>Page-2</title>
                </Head>
                <h1>Hello this is Page2</h1>
                <p className = "lead">This is only the supporting text behind the original heading</p>
            </Layout>
        )
    }
}
export default page2