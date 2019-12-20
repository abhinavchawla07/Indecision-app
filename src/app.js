class IndecisionApp extends React.Component {

    render()
    {
        const title = "Indecision App";
        const subtitle = "Put your life in the hands of a computer";
        const options=['one','two','three','four'];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}


class Options extends React.Component {
    removeClick()
    {
        super.options=[];
        alert("removed all!");
    }
    render()
    {
        return (
            <div>
                <button onClick={this.removeClick}>Remove All</button>
                {
                    this.props.options.map((item)=> <Option key={item} optionText= {item}/>)   
                }
                {this.props.options.length}
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        );
    }
} 

class AddOption extends React.Component{
    handleAddOptions(e)
    {
        e.preventDefault();
        const option=e.target.elements.getElementByName("option").value;
        // if(option){
            // alert(option);
        // }
        alert(option);
    }
    render()
    {
        return (
            <div>
            add options here
            <form onSubmit={this.handleAddOptions}>
            <input type="text" name="option"/>
            <button>submit</button>
            </form>
            </div>
        );
    }
}

class Action extends React.Component {
    clickPick()
    {
        alert("process started!");
    }
    render() {

        return (
            <button onClick={this.clickPick}>What Should I Do?</button>
        );
    }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));