import Layout from '../Components/layout'
import axios from 'axios' 
import Link from 'next/link'
import Head from 'next/head'
class page3 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            tried:false,
            loaded: false,
            ids: []
        }
    }
    componentDidMount(){
        axios.get('https://api.bobbleapp.me/v4/stickerCategories/newAdditions?deviceType=website&page=0&limit=10&searchString=&withCreatorInfo=1'
        ).then((response) => {
            let id = []
            for(let i=0;i<response.data.length;i++){
                let inter = []
                inter.push(response.data[i].stickerCategoryId)
                inter.push(response.data[i].stickerCategoryName)
                id.push(inter)
            }
            this.setState({tried:true,loaded:true,ids:id});
            console.log("loaded");
        }).catch((error) => {
            this.setState({tried:true})
            console.log("Error has occured");
            console.log(error);
        })
    }
    componentWillUnmount(){
        this.setState({tried: false,loaded: false, ids: []})
        console.log("Comnponent destroyed")
    }
    render(){
        let elem;
        if(!this.state.loaded && !this.state.tried) elem = <p className = "lead">Getting your data ...</p>
        else if(this.state.tried && !this.state.loaded) elem = <p className = "lead text-danger">Error in loading your data ...</p>
        else{
            elem = this.state.ids.map( (item) => {
                    return (
                        <li key = {item[0]} className = "list-group-item mb-3">
                            <div>
                                <p className = "lead d-inline-block pr-2">Sticker Category ID:</p>
                                <h4 className = "d-inline-block">{item[0]}</h4>
                            </div>
                            <div>
                                <p className = "lead d-inline-block pr-2">Sticker Category Name:</p>
                                <h4 className = "d-inline-block mr-5">{item[1]}</h4>
                                <Link as = {"/demo-4/"+item[0]+"/"} href = "/demo-4/[id]"><button type="button" className="btn btn-primary">Redirect</button></Link>
                            </div>
                        </li> 
                    )
                })
        }
        return(
            <Layout>
                <Head>
                    <title>Sticker Categories</title>
                </Head>
                <h1>This is the page 3</h1>
                <br/>
                <ul className = "list-group">
                    {elem}
                </ul>
            </Layout>
        )
    }
}
export default page3