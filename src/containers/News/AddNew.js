import React,{Component} from "react"
import  "./News.css"
class AddNew extends Component {
    state = {
        title: '',
        content: ''
    }
    onBtnClickHandler = (event) => {
        event.preventDefault()
        const {title, content} = this.state
        this.props.onAddNews({
            id: +new Date(),
            title, content
        })

    }
    handleChange = (e) => {
        const { id, value } = e.currentTarget
        this.setState({ [id]: e.currentTarget.value })
    }
    validate = () => {
        const { title, content } = this.state
        if (title.trim() && content.trim()) {
            return true
        }
        return false
    }
    render() {
        return (
            <form className='form'>
                <input
                    id='title'
                    onChange={this.handleChange}
                    type='text'
                    className='add__title'
                    placeholder='Заголовок'
                />
                <textarea
                    id='content'
                    onChange={this.handleChange}
                    className='add__content'
                    placeholder='Текст новости'
                ></textarea>

                <button
                    disabled={!this.validate()}
                    onClick={this.onBtnClickHandler}>
                    Опубликовать
                </button>
            </form>
        )
    }
}


export default AddNew