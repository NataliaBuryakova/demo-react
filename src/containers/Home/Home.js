import React,{Component} from 'react'
import { Remarkable } from 'remarkable';
class Home extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { value: 'Привет, **мир**!' };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    getRawMarkup() {
        const md = new Remarkable();
        return { __html: md.render(this.state.value) };
    }

    render() {
        return (
            <div className="MarkdownEditor">
                <h2>Пример из документации ReactJs с испльзованием сторонней библиотеки </h2>
                <h2 style={{color:'red'}}>Редактор</h2>

                <textarea
                    id="markdown-content"
                    onChange={this.handleChange}
                    defaultValue={this.state.value}
                />
                <h2 style={{color:'red'}}>Вывод</h2>
                <div
                    className="content"
                    dangerouslySetInnerHTML={this.getRawMarkup()}
                />
            </div>
        );
    }
}

export default Home
