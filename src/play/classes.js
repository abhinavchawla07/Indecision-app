console.log("app.js is running!")

var app = {
    title: "Indecision App",
    subtitle: "Put your life in hands of a computer",
    options: [],
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.option.value;
    if (option)
        app.options.push(option);
    e.target.option.value='';
    renderApp();
};

const numbers=[1,2,3,4];


const appRoot = document.getElementById('app');

const removeAll=()=>{
    app.options=[];
    renderApp();
};

const onDecision=()=>{
    const randNum=Math.floor(Math.random()*app.options.length);
    const option=app.options[randNum];
    // console.log(option);
    alert(option);
};

const renderApp=()=>{
    var template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle ? <p>{app.subtitle}</p> : undefined}
            <button disabled={app.options.length===0} onClick={onDecision}>What Should I do?</button>
            <button id="remove" onClick={removeAll}>Remove All</button>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
            {app.options.length > 0 ? <p>here are your options: </p> : <p>No options</p>}
            <ol>
            {
                app.options.map(
                    (option)=>{
                        return <li key={option}>{option}</li>
                    }
                )
            }
            </ol>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderApp();

// let count = 0;
// const add = () => {
//     count++;
//     renderApp();
// };
// const sub = () => {
//     count--;
//     renderApp();
// };
// const reset = () => {
//     count=0;
//     renderApp();
// };
// const appRoot = document.getElementById('app');

// const renderApp=() => {
//     var templatetwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button id="plus" onClick={add}>+1</button>
//             <button id="minus" onClick={sub}>-1</button>
//             <button id="reset" onClick={reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(templatetwo, appRoot);
// };
// renderApp();