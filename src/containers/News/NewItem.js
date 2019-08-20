import React,{Component} from "react"
import PropTypes from 'prop-types'

class NewItem extends Component {
    state = {
        visible: false,
    }
    handleClckOn = (event) => { //  метод открыть новость
        event.preventDefault()
        this.setState({ visible: true })
    }
    handleClckOff = (event) => { // метод скрыть новость
        event.preventDefault()
        this.setState({ visible: false })
    }
    render() {
        const {title, content} = this.props.data
        const { visible } = this.state
        return (
            <div>
                <h3>Заголовок: {title}</h3>
                {  !visible &&  <a onClick={this.handleClckOn}  href="#">Подробнее</a> }
                {   visible && <div> <p>Содержание: {content}</p>
                                     <a onClick={this.handleClckOff}  href="#">Скрыть</a>
                              </div>
                    }
                <hr/>
            </div>
        )
    }
}NewItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
    })
}
export default NewItem

