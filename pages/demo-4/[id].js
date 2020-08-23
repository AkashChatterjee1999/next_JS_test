import Layout from '../../Components/layout'
import axios from'axios'
import Head from 'next/head'
class page4 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loaded: 0,
            id: '',
            name: '',
            desc: ''
        }
    }
    componentDidMount(){
        const ids = window.location.pathname.split('/')[2]
        this.setState({id:ids})
        console.log('https://api.bobbleapp.me/v4/stickerCategories/'+ids+'/details?stickerPreviewImageSize=200')
        axios.get('https://api.bobbleapp.me/v4/stickerCategories/'+ids+'/details?stickerPreviewImageSize=200'
        ).then((response) => {
            const v_name = response.data.stickerCategoryName
            const v_desc = response.data.stickerCategoryDescription
            this.setState({loaded:1,name:v_name,desc:v_desc})
            console.log("State loaded")
        }).catch((error) => {
            this.setState({loaded: 2})
            console.log(error)
        })
    }
    render(){
        let elem;
        if(this.state.loaded==0) elem = <p className = "lead text-center">Getting your data...</p>
        else if(this.state.loaded==2) elem = <p className = "text-danger text-center lead">Error in loading your data!</p>
        else{
            elem =  <div className = "container rounded border pl-2 py-2">
                <p className = "lead">Sticker Category ID: {this.state.id}</p>
                <p className = "lead">Sticker Category Name: {this.state.name}</p>
                <p className = "lead">Sticker Category Description: {this.state.desc}</p>
            </div>
        }
        return(
            <Layout>
                <Head>
                    <title>Sticker ID:{this.state.id}</title>
                </Head>
                <h1>Hello this is Page4</h1>
                <p className = "lead">The details about the requested sticker category is listed below: </p>
                <br/>
                {elem}
            </Layout>
        )
    }
}
export default page4