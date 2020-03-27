import React from 'react'
import ReactDom from 'react-dom'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'


class App extends React.Component{
    state={videos:[]}

    onTermSubmit=async term=>{
        const response = await youtube.get('/search', {
            param:{
                q:term
            }
        })
        this.setState({videos:response.data.items})
    }
    render(){
        return(
            <div>
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                i have {this.state.videos.length} videos
            </div>
        )
    }
}
export default App;