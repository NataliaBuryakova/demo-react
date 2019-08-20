import React, {Component} from 'react'
//import newsData from './newsData'
import NewItem from "./NewItem";
import AddNew from "./AddNew";

export default class  extends Component {
    state = {
        news: [],
        isLoading: false, // статус для манипуляций "прелоадером" ("Загружаю..." в нашем случае)
    }
    handleAddNews = (data) => {
        const nextNews = [data, ...this.state.news]
        this.setState({ news: nextNews })
    }
    componentDidMount() {
        this.setState({ isLoading: true })
        fetch('http://localhost:3000/data/NewsData.json')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setTimeout(() => { // добавили задержку
                    this.setState({ isLoading: false, news: data })
                }, 3000) // в три секунды
            })
    }
 render() {
     const { news, isLoading } = this.state
     let newsTemplate

     if (news.length>0) {
         newsTemplate = news.map(function(item) {
             return <NewItem key={item.id} data={item}/>
         })
     }
        return (
            <React.Fragment>
               <AddNew onAddNews={this.handleAddNews}/>
                {isLoading && <p>Загружаю...</p>}
                {news.length>0? newsTemplate: (isLoading?null:<p>К сожалению новостей нет</p>)}
                {news.length>0 ?<strong>Всего новостей: {news.length}</strong>:null}
            </React.Fragment>
        );
    }
  }